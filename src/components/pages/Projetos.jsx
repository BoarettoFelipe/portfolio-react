import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard';
import ProjectCarousel from '../ProjectCarousel';
import ProjectFilters from '../ProjectFilters';
import { projects } from '../../data/projects';
import { getProjectTechnologyGroups, filterProjectsByTechnology } from '../../utils/projects';
import './Projetos.css';

const groups = getProjectTechnologyGroups(projects);
const featuredProjects = projects.filter((project) => project.featured);

function Projetos() {
  const { t } = useTranslation();
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [mode, setMode] = useState('featured');
  // Persiste a pausa mesmo quando o carrossel é desmontado pelo catálogo.
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const hasFilters = selectedTechnologies.length > 0;
  const showCatalog = mode === 'catalog' || hasFilters || featuredProjects.length === 0;
  const visibleProjects = filterProjectsByTechnology(projects, selectedTechnologies);

  const toggleTechnology = (id) => {
    setSelectedTechnologies((selected) => selected.includes(id)
      ? selected.filter((technologyId) => technologyId !== id)
      : [...selected, id]);
    setMode('catalog');
  };

  return (
    <div className="projetos-container">
      <h2>{t('nav_projetos')}</h2>
      <p className="projects-intro">{t('projects_intro')}</p>
      {projects.length > 0 && (
        <div className="projects-toolbar">
          <ProjectFilters groups={groups} selected={selectedTechnologies} onToggle={toggleTechnology} onClear={() => setSelectedTechnologies([])} />
          {!hasFilters && featuredProjects.length > 0 && (
            <button type="button" className="project-filter projects-mode-button" onClick={() => setMode(showCatalog ? 'featured' : 'catalog')}>
              {t(showCatalog ? 'projects_featured' : 'projects_more')}
            </button>
          )}
        </div>
      )}
      {hasFilters && <p className="projects-result-count" role="status">{t('projects_found', { count: visibleProjects.length })}</p>}
      {showCatalog ? (
        visibleProjects.length === 0 ? (
          <p className="projects-empty" role="status">{t(projects.length === 0 ? 'projects_empty' : 'projects_no_results')}</p>
        ) : (
          <div className="projects-grid">
            {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        )
      ) : (
        <ProjectCarousel projects={featuredProjects} playing={playing} onPlayingChange={setPlaying} />
      )}
    </div>
  );
}

export default Projetos;
