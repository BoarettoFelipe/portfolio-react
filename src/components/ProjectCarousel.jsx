import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import './ProjectCarousel.css';

function ProjectCarousel({ projects, playing, onPlayingChange }) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(() => window.innerWidth >= 1100 ? 3 : window.innerWidth >= 700 ? 2 : 1);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [hovered, setHovered] = useState(false);
  const [transition, setTransition] = useState({ phase: 'idle', direction: 1 });
  const transitionTimer = useRef(null);
  const transitioning = useRef(false);
  const gesture = useRef(null);
  const dragged = useRef(false);
  const count = projects.length;
  const canRotate = count > visibleCount;

  useEffect(() => () => window.clearTimeout(transitionTimer.current), []);

  const move = useCallback((nextIndex, direction) => {
    if (!count || transitioning.current) return;
    const next = ((nextIndex % count) + count) % count;
    if (next === index) return;
    if (reducedMotion) {
      setIndex(next);
      return;
    }
    transitioning.current = true;
    setTransition({ phase: 'out', direction });
    transitionTimer.current = window.setTimeout(() => {
      setIndex(next);
      setTransition({ phase: 'in', direction });
      transitionTimer.current = window.setTimeout(() => {
        transitioning.current = false;
        setTransition({ phase: 'idle', direction });
      }, 170);
    }, 150);
  }, [count, index, reducedMotion]);

  useEffect(() => {
    const resize = () => setVisibleCount(window.innerWidth >= 1100 ? 3 : window.innerWidth >= 700 ? 2 : 1);
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    window.addEventListener('resize', resize);
    preference.addEventListener('change', updatePreference);
    return () => {
      window.removeEventListener('resize', resize);
      preference.removeEventListener('change', updatePreference);
    };
  }, []);

  useEffect(() => {
    if (!playing || reducedMotion || hovered || !canRotate) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) move(index + 1, 1);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [playing, reducedMotion, hovered, canRotate, index, move]);

  const navigate = (nextIndex, direction = nextIndex > index ? 1 : -1) => {
    onPlayingChange(false);
    move(nextIndex, direction);
  };

  return (
    <div className="project-carousel" role="region" aria-label={t('projects_carousel')} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="project-carousel-stage">
        <button type="button" className="project-carousel-arrow previous" disabled={!canRotate} aria-label={t('projects_previous')} onClick={() => navigate(index - 1)}><span aria-hidden="true">‹</span></button>
      <div className="project-carousel-window" data-phase={transition.phase} style={{ '--visible-projects': Math.max(1, Math.min(visibleCount, count)), '--slide-direction': transition.direction }}
        onFocusCapture={() => onPlayingChange(false)}
        onDragStart={(event) => event.preventDefault()}
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0) return;
          dragged.current = false;
          gesture.current = { x: event.clientX, y: event.clientY };
        }}
        onPointerMove={(event) => {
          if (!gesture.current) return;
          const dx = event.clientX - gesture.current.x;
          const dy = event.clientY - gesture.current.y;
          if (Math.abs(dx) > 15 && Math.abs(dx) > Math.abs(dy)) {
            onPlayingChange(false);
            dragged.current = true;
            event.currentTarget.setPointerCapture(event.pointerId);
          }
        }}
        onPointerUp={(event) => {
          if (!gesture.current) return;
          const dx = event.clientX - gesture.current.x;
          const dy = event.clientY - gesture.current.y;
          if (canRotate && Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) navigate(index + (dx < 0 ? 1 : -1));
          gesture.current = null;
        }}
        onPointerCancel={() => { gesture.current = null; }}
        onClickCapture={(event) => {
          if (dragged.current) {
            event.preventDefault();
            event.stopPropagation();
            dragged.current = false;
          }
        }}>
        {/* All cards size the same grid row; hidden cards are inert, never cloned. */}
        {projects.map((project, position) => {
          const offset = (position - index + count) % count;
          const visible = offset < visibleCount;
          return (
            <div key={project.id} className="project-carousel-slide" style={{ gridColumn: visible ? offset + 1 : 1, order: offset }} aria-hidden={!visible} inert={!visible} data-visible={visible}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
        <button type="button" className="project-carousel-arrow next" disabled={!canRotate} aria-label={t('projects_next')} onClick={() => navigate(index + 1)}><span aria-hidden="true">›</span></button>
      </div>
      {canRotate && (
        <div className="project-carousel-positions" role="group" aria-label={t('projects_carousel')}>
          {projects.map((project, position) => (
            <button key={project.id} type="button" className="project-carousel-dot" aria-pressed={position === index} aria-label={t('projects_position', { position: position + 1, total: count })} onClick={() => navigate(position)}>
              <span aria-hidden="true">{position === index ? '●' : '○'}</span>
            </button>
          ))}
        </div>
      )}
      <div className="project-carousel-playback">
        <button type="button" className="project-carousel-play" disabled={!canRotate || reducedMotion} aria-label={t(playing && !reducedMotion ? 'projects_pause_label' : 'projects_play_label')} onClick={() => onPlayingChange(!playing)}>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            {playing && !reducedMotion ? <path d="M4 3h3v10H4zM9 3h3v10H9z" /> : <path d="M4 2l10 6-10 6z" />}
          </svg>
        </button>
      </div>
      <p className="project-carousel-status" aria-live={playing && !reducedMotion ? 'off' : 'polite'}>{t('projects_position_status', { position: index + 1, total: count })}</p>
      {reducedMotion && <p className="project-carousel-status">{t('projects_reduced_motion')}</p>}
    </div>
  );
}

export default ProjectCarousel;
