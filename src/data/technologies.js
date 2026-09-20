// Registro de nomenclatura; cadastrar uma tecnologia não implica domínio dela.
export const technologies = {
  react: { id: 'react', label: 'React' },
  csharp: { id: 'csharp', label: 'C#' },
  dotnet: { id: 'dotnet', label: '.NET' },
  python: { id: 'python', label: 'Python' },
  aws: { id: 'aws', label: 'AWS' },
  javascript: { id: 'javascript', label: 'JavaScript' },
  nodejs: { id: 'nodejs', label: 'Node.js' },
  css: { id: 'css', label: 'CSS' },
  html: { id: 'html', label: 'HTML' },
  sql: { id: 'sql', label: 'SQL' },
  git: { id: 'git', label: 'Git' },
};

export function getTechnology(id) {
  if (!Object.hasOwn(technologies, id)) {
    throw new Error('Tecnologia não cadastrada: ' + id);
  }
  return technologies[id];
}
