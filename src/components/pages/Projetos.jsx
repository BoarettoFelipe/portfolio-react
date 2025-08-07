import ProjectCard from '../ProjectCard';
import './Projetos.css';

const projectsData = [
  {
    image: 'https://via.placeholder.com/400x250/3498db/ffffff?text=Projeto+1',
    title: 'Sistema de E-commerce',
    description: 'Plataforma completa de e-commerce com carrinho de compras, checkout e painel administrativo para gerenciamento de produtos e pedidos.',
    techs: ['React', 'Node.js', 'Express', 'MongoDB'],
    repoLink: '#'
  },
  {
    image: 'https://via.placeholder.com/400x250/2ecc71/ffffff?text=Projeto+2',
    title: 'Aplicativo de Clima',
    description: 'Um aplicativo web simples e elegante que consome uma API de clima para exibir a previsão do tempo em tempo real para qualquer cidade.',
    techs: ['React', 'API REST', 'CSS Grid'],
    repoLink: '#'
  },
  {
    image: 'https://via.placeholder.com/400x250/e74c3c/ffffff?text=Projeto+3',
    title: 'Blog Pessoal',
    description: 'Um blog dinâmico com sistema de posts e comentários, construído com um CMS Headless para facilitar a criação e edição de conteúdo.',
    techs: ['Next.js', 'Tailwind CSS', 'GraphQL'],
    repoLink: '#'
  }
];

function Projetos() {
  return (
    <div>
      <h2>Meus Projetos</h2>
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