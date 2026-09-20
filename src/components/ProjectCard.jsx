import { useTranslation } from 'react-i18next';
import { getTechnology } from '../data/technologies';
import { getLocalizedText } from '../utils/projects';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const title = getLocalizedText(project.title, language);

  return (
    <div className="project-card">
      {project.image && (
        <img src={project.image} alt={t('project_image_alt', { title })} className="project-image" />
      )}
      <div className="project-info">
        <h3>{title}</h3>
        <p>{getLocalizedText(project.description, language)}</p>
        <div className="project-techs">
          {project.technologies.map((id) => (
            <span key={id} className="tech-tag">{getTechnology(id).label}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {t('project_github')}
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              {t('project_demo')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
