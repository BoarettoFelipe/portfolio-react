import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';
import './Projetos.css';

function Projetos() {
  const { t } = useTranslation();

  return (
    <div className="projetos-container">
      <h2>{t('nav_projetos')}</h2>
      {projects.length === 0 ? (
        <p className="projects-empty" role="status">{t('projects_empty')}</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      )}
    </div>
  );
}

export default Projetos;
