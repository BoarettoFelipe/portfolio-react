import { useLayoutEffect, useRef } from 'react';
import './Reveal.css';

const TARGETS = {
  perfil: ['.perfil-texto', '.perfil-imagem', '.perfil-skills'],
  experiencia: ['.experience-container > h2', '.experience-list'],
  projetos: ['.projetos-container > h2', '.projects-intro', '.projects-toolbar', '.projects-result-count', '.projects-grid', '.project-carousel', '.projects-empty'],
  certificacoes: ['.certificacoes-container > h2', '.certificacoes-intro', '.certificacoes-grid'],
  contato: ['.contato-intro', '.contato-form'],
};

const pending = new Map();

function revealPassedElements() {
  for (const [element, reveal] of pending) {
    if (element.getBoundingClientRect().bottom <= 0) reveal(element);
  }
}

function stopWaiting(element) {
  pending.delete(element);
  if (pending.size === 0) window.removeEventListener('scroll', revealPassedElements);
}

function waitForElement(element, reveal) {
  if (pending.size === 0) window.addEventListener('scroll', revealPassedElements, { passive: true });
  pending.set(element, reveal);
}

function Reveal({ children, className = '', stagger = false }) {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const root = elementRef.current;
    const selectors = stagger ? TARGETS[root.closest('section')?.id] : null;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observed = new Set();
    const reveal = (element) => {
      element.classList.add('is-visible');
      root.dataset.revealStarted = '';
      observer?.unobserve(element);
      observed.delete(element);
      stopWaiting(element);
    };
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting, boundingClientRect }) => {
          if (!isIntersecting && boundingClientRect.bottom > 0) return;
          reveal(target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })
      : null;

    const prepare = () => {
      for (const target of observed) {
        if (!root.contains(target)) {
          observer.unobserve(target);
          observed.delete(target);
          stopWaiting(target);
        }
      }

      const elements = selectors
        ? selectors.flatMap((selector) => [...root.querySelectorAll(selector)])
        : [root];

      elements.forEach((element, index) => {
        if (element.hasAttribute('data-reveal-item')) return;
        element.dataset.revealItem = '';
        element.style.setProperty('--reveal-delay', `${Math.min(index, 2) * 90}ms`);

        const rect = element.getBoundingClientRect();
        if (reducedMotion.matches || !observer || root.hasAttribute('data-reveal-started') || rect.bottom <= 0 || (rect.top < window.innerHeight * 0.9 && rect.bottom > 0)) {
          element.classList.add('is-visible');
        } else {
          observer.observe(element);
          observed.add(element);
          waitForElement(element, reveal);
        }
      });
    };

    const revealRemaining = () => {
      if (!reducedMotion.matches) return;
      observed.forEach((element) => {
        element.classList.add('is-visible');
        observer.unobserve(element);
        stopWaiting(element);
      });
      observed.clear();
    };

    const mutations = new MutationObserver(prepare);
    mutations.observe(root, { childList: true, subtree: true });
    reducedMotion.addEventListener('change', revealRemaining);
    prepare();

    return () => {
      mutations.disconnect();
      reducedMotion.removeEventListener('change', revealRemaining);
      observer?.disconnect();
      observed.forEach(stopWaiting);
      const elements = selectors
        ? selectors.flatMap((selector) => [...root.querySelectorAll(selector)])
        : [root];
      elements.forEach((element) => {
        element.removeAttribute('data-reveal-item');
        element.classList.remove('is-visible');
        element.style.removeProperty('--reveal-delay');
      });
      root.removeAttribute('data-reveal-started');
    };
  }, [stagger]);

  return (
    <div ref={elementRef} className={`${className} scroll-reveal${stagger ? ' scroll-reveal--stagger' : ''}`}>
      {children}
    </div>
  );
}

export default Reveal;
