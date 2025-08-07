import './ProjectCard.css';

function ProjectCard({ image, title, description, techs, repoLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={`Screenshot do projeto ${title}`} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-techs">
          {techs.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {/* 2. Deixamos apenas um botão. Usamos a classe 'btn-primary' para dar mais destaque. */}
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Ver no GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;