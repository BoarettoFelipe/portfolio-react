import { useId, useLayoutEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { getTechnology } from '../data/technologies';
import { getLocalizedText } from '../utils/projects';
import './ProjectDetails.css';

function ProjectDetails({ project, trigger, origin, onClose }) {
  const { t, i18n } = useTranslation();
  const dialogRef = useRef(null);
  const titleId = useId();

  useLayoutEffect(() => {
    if (!project) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    let animation;
    if (origin && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const destination = dialog.getBoundingClientRect();
      animation = dialog.animate([
        {
          opacity: 0.55,
          transform: `translate(${origin.left - destination.left}px, ${origin.top - destination.top}px) scale(${origin.width / destination.width}, ${origin.height / destination.height})`
        },
        { opacity: 1, transform: 'translate(0, 0) scale(1, 1)' }
      ], { duration: 320, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' });
    }
    return () => {
      animation?.cancel();
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [project, origin]);

  if (!project) return null;

  const language = i18n.resolvedLanguage || i18n.language;
  const title = getLocalizedText(project.title, language);
  const description = getLocalizedText(project.details || project.description, language);
  const liveUrl = project.liveUrl || project.demoUrl;
  const close = () => {
    dialogRef.current.close();
    onClose();
    trigger?.focus({ preventScroll: true });
  };

  return (
    <dialog ref={dialogRef} className="project-details-dialog" aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); close(); }}
      onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="project-details-content">
        <button type="button" className="project-details-close" aria-label={t('project_close_details')} onClick={close}>×</button>
        {project.image && <img className="project-details-image" src={project.image} alt={t('project_image_alt', { title })} />}
        <div className="project-details-body">
          <h2 id={titleId}>{title}</h2>
          <p>{description}</p>
          <div className="project-details-techs" aria-label={t('project_technologies')}>
            {project.technologies.map((id) => <span key={id} className="tech-tag">{getTechnology(id).label}</span>)}
          </div>
          <div className="project-details-links">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">{t('project_github')}</a>
            {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">{t('project_demo')}</a>}
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ProjectDetails;
