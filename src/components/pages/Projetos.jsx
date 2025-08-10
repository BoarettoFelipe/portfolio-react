import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard';
import './Projetos.css';
import imgProjeto1 from '../../assets/projects/projeto1.png';
import imgProjeto2 from '../../assets/projects/projeto2.png';
import imgProjeto3 from '../../assets/projects/projeto3.png';

function Projetos() {
  const { t } = useTranslation();

  const projectsData = [
    {
      image: imgProjeto1,
      title: t('project1_title'),
      description: t('project1_desc'),
      techs: ['React', 'Node.js', 'Express', 'MongoDB'],
      repoLink: '#'
    },
    {
      image: imgProjeto2,
      title: t('project2_title'),
      description: t('project2_desc'),
      techs: ['React', 'API REST', 'CSS Grid'],
      repoLink: '#'
    },
    {
      image: imgProjeto3,
      title: t('project3_title'),
      description: t('project3_desc'),
      techs: ['Next.js', 'Tailwind CSS', 'GraphQL'],
      repoLink: '#'
    }
  ];

  return (
    <div className="projetos-container">
      <h2>{t('nav_projetos')}</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            techs={project.techs}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projetos;