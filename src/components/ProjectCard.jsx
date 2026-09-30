import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { getTechnology } from '../data/technologies';
import { getLocalizedText } from '../utils/projects';
import './ProjectCard.css';

function ProjectCard({ project, featured = false, onOpen }) {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const title = getLocalizedText(project.title, language);
  const pointer = useRef(null);

  const liveUrl = project.liveUrl || project.demoUrl;

  return (
    <article className={`project-card${featured ? ' project-card--featured' : ''}${onOpen ? ' project-card--openable' : ''}`}
      onPointerDown={(event) => {
        if (event.pointerType === 'mouse' && event.button === 0) pointer.current = { x: event.clientX, y: event.clientY, moved: false };
      }}
      onPointerMove={(event) => {
        if (pointer.current && Math.hypot(event.clientX - pointer.current.x, event.clientY - pointer.current.y) > 6) pointer.current.moved = true;
      }}
      onPointerCancel={() => { pointer.current = null; }}
      onClick={(event) => {
        const moved = pointer.current?.moved;
        pointer.current = null;
        if (!onOpen || moved || event.target.closest('a, button') || window.getSelection()?.toString().trim()) return;
        onOpen(project, event.currentTarget.querySelector('.project-card-open-control'));
      }}>
      {onOpen && (
        <button type="button" className="project-card-open-control" aria-label={t('project_open_details', { title })}
          onClick={(event) => onOpen(project, event.currentTarget)} />
      )}
      {project.image ? (
        <img src={project.image} alt={t('project_image_alt', { title })} className="project-image" loading="lazy" />
      ) : (
        <div className="project-image project-image-fallback" aria-hidden="true">
          <span>{title}</span>
        </div>
      )}
      <div className="project-info">
        <h3>{title}</h3>
        <p>{getLocalizedText(project.description, language)}</p>
        <div className="project-techs">
          {project.technologies.slice(0, 4).map((id) => (
            <span key={id} className="tech-tag">{getTechnology(id).label}</span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-tag" aria-label={t('projects_more_technologies', { count: project.technologies.length - 4 })}>
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {t('project_github')}
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              {t('project_demo')}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
