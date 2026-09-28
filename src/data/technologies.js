// Registro de nomenclatura; cadastrar uma tecnologia não implica domínio dela.
export const technologyGroups = [
  { id: 'languages', labelKey: 'projects_group_languages' },
  { id: 'web', labelKey: 'projects_group_web' },
  { id: 'desktop', labelKey: 'projects_group_desktop' },
  { id: 'data', labelKey: 'projects_group_data' },
  { id: 'cloud', labelKey: 'projects_group_cloud' },
  { id: 'ai', labelKey: 'projects_group_ai' },
];

export const technologies = {
  wpf: { id: 'wpf', label: 'WPF', group: 'desktop' },
  sqlite: { id: 'sqlite', label: 'SQLite', group: 'data' },
  dapper: { id: 'dapper', label: 'Dapper', group: 'data' },
  closedxml: { id: 'closedxml', label: 'ClosedXML', group: 'ai' },
  'typescript': { id: 'typescript', label: 'TypeScript', group: 'languages' },
  'postgresql': { id: 'postgresql', label: 'PostgreSQL', group: 'data' },
  'docker': { id: 'docker', label: 'Docker', group: 'cloud' },
  'terraform': { id: 'terraform', label: 'Terraform', group: 'cloud' },
  'github-actions': { id: 'github-actions', label: 'GitHub Actions', group: 'cloud' },
  'express': { id: 'express', label: 'Express', group: 'web' },
  'mysql': { id: 'mysql', label: 'MySQL', group: 'data' },
  'exceljs': { id: 'exceljs', label: 'ExcelJS', group: 'ai' },
  'ollama': { id: 'ollama', label: 'Ollama', group: 'ai' },
  'langchain': { id: 'langchain', label: 'LangChain', group: 'ai' },
  'speech-recognition': { id: 'speech-recognition', label: 'Speech Recognition', group: 'ai' },
  'openpyxl': { id: 'openpyxl', label: 'OpenPyXL', group: 'ai' },
  react: { id: 'react', label: 'React', group: 'web' },
  csharp: { id: 'csharp', label: 'C#', group: 'languages' },
  dotnet: { id: 'dotnet', label: '.NET', group: 'desktop' },
  python: { id: 'python', label: 'Python', group: 'languages' },
  aws: { id: 'aws', label: 'AWS', group: 'cloud' },
  javascript: { id: 'javascript', label: 'JavaScript', group: 'languages' },
  nodejs: { id: 'nodejs', label: 'Node.js', group: 'web' },
  css: { id: 'css', label: 'CSS', group: 'web' },
  html: { id: 'html', label: 'HTML', group: 'web' },
  sql: { id: 'sql', label: 'SQL', group: 'data' },
  git: { id: 'git', label: 'Git', group: 'cloud' },
};

export function getTechnology(id) {
  if (!Object.hasOwn(technologies, id)) {
    throw new Error('Tecnologia não cadastrada: ' + id);
  }
  return technologies[id];
}
