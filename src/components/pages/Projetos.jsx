import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard';
import ProjectCarousel from '../ProjectCarousel';
import ProjectFilters from '../ProjectFilters';
import ProjectDetails from '../ProjectDetails';
import { projects } from '../../data/projects';
import { getProjectTechnologyGroups, filterProjectsByTechnology } from '../../utils/projects';
import './Projetos.css';

const groups = getProjectTechnologyGroups(projects);
const featuredProjects = projects.filter((project) => project.featured);
const getCatalogPageSize = () => window.innerWidth < 768 ? 4 : window.innerWidth < 1024 ? 6 : 12;

function Projetos() {
  const { t } = useTranslation();
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [mode, setMode] = useState('featured');
  const [activeProject, setActiveProject] = useState(null);
  const [catalogPage, setCatalogPage] = useState(0);
  const [catalogPageSize, setCatalogPageSize] = useState(getCatalogPageSize);
  const detailsTrigger = useRef(null);
  const detailsOrigin = useRef(null);
  const catalogGrid = useRef(null);
  // Persiste a pausa mesmo quando o carrossel é desmontado pelo catálogo.
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const hasFilters = selectedTechnologies.length > 0;
  const showCatalog = mode === 'catalog' || hasFilters || featuredProjects.length === 0;
  const visibleProjects = filterProjectsByTechnology(projects, selectedTechnologies);
  const catalogPageCount = Math.ceil(visibleProjects.length / catalogPageSize);
  const currentCatalogPage = Math.min(catalogPage, Math.max(0, catalogPageCount - 1));
  const pageProjects = visibleProjects.slice(currentCatalogPage * catalogPageSize, (currentCatalogPage + 1) * catalogPageSize);

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)');
    const desktop = window.matchMedia('(min-width: 1024px)');
    const updatePageSize = () => {
      setCatalogPageSize(getCatalogPageSize());
      setCatalogPage(0);
    };
    mobile.addEventListener('change', updatePageSize);
    desktop.addEventListener('change', updatePageSize);
    return () => {
      mobile.removeEventListener('change', updatePageSize);
      desktop.removeEventListener('change', updatePageSize);
    };
  }, []);

  const toggleTechnology = (id) => {
    setCatalogPage(0);
    setSelectedTechnologies((selected) => selected.includes(id)
      ? selected.filter((technologyId) => technologyId !== id)
      : [...selected, id]);
    setMode('catalog');
  };

  const openProject = (project, trigger) => {
    detailsTrigger.current = trigger;
    detailsOrigin.current = trigger?.closest('.project-card')?.getBoundingClientRect() ?? null;
    setActiveProject(project);
  };

  const changeCatalogPage = (page) => {
    setCatalogPage(page);
    window.requestAnimationFrame(() => catalogGrid.current?.scrollIntoView({ block: 'start' }));
  };

  return (
    <div className="projetos-container">
      <h2>{t('nav_projetos')}</h2>
      <p className="projects-intro">{t('projects_intro')}</p>
      {projects.length > 0 && (
        <div className="projects-toolbar">
          <ProjectFilters groups={groups} selected={selectedTechnologies} onToggle={toggleTechnology} onClear={() => { setSelectedTechnologies([]); setCatalogPage(0); }} />
          {!hasFilters && featuredProjects.length > 0 && (
            <button type="button" className="project-filter projects-mode-button" onClick={() => { setMode(showCatalog ? 'featured' : 'catalog'); setCatalogPage(0); }}>
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
          <>
            <div ref={catalogGrid} key={`${catalogPageSize}-${currentCatalogPage}-${selectedTechnologies.join(',')}`} className="projects-grid projects-grid--enter">
              {pageProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={openProject} />)}
            </div>
            {catalogPageCount > 1 && (
              <nav className="projects-pagination" aria-label={t('projects_catalog_navigation')}>
                <button type="button" className="projects-pagination-button" disabled={currentCatalogPage === 0} aria-label={t('projects_catalog_previous')} onClick={() => changeCatalogPage(currentCatalogPage - 1)}><span aria-hidden="true">‹</span></button>
                <p className="projects-pagination-status" aria-live="polite">{t('projects_catalog_page', { page: currentCatalogPage + 1, total: catalogPageCount })}</p>
                <button type="button" className="projects-pagination-button" disabled={currentCatalogPage === catalogPageCount - 1} aria-label={t('projects_catalog_next')} onClick={() => changeCatalogPage(currentCatalogPage + 1)}><span aria-hidden="true">›</span></button>
              </nav>
            )}
          </>
        )
      ) : (
        <ProjectCarousel projects={featuredProjects} playing={playing} onPlayingChange={setPlaying} onOpenProject={openProject} />
      )}
      <ProjectDetails project={activeProject} trigger={detailsTrigger.current} origin={detailsOrigin.current} onClose={() => setActiveProject(null)} />
    </div>
  );
}

export default Projetos;
