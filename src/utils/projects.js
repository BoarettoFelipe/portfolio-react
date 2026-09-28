import { getTechnology, technologyGroups } from '../data/technologies.js';

// Aceita pt-BR/en-US, com fallback para português.
export function getLocalizedText(text, language = 'pt') {
  const locale = language.toLowerCase().split('-')[0];
  return text?.[locale] || text?.pt || text?.en || '';
}

// Deriva somente as tecnologias presentes no catálogo, sem duplicatas.
export function getProjectTechnologies(projects) {
  const ids = new Set(projects.flatMap((project) => project.technologies));
  return Array.from(ids, getTechnology).sort((a, b) => a.label.localeCompare(b.label));
}

// Aceita múltiplos IDs (OR), preservando chamadas legadas com um ID ou null.
export function filterProjectsByTechnology(projects, technologyIds = []) {
  const selected = technologyIds === null
    ? []
    : Array.isArray(technologyIds) ? technologyIds : [technologyIds];
  return selected.length === 0
    ? projects
    : projects.filter((project) => project.technologies.some((id) => selected.includes(id)));
}

export function getProjectTechnologyGroups(projects) {
  const used = getProjectTechnologies(projects);
  return technologyGroups.map((group) => ({
    ...group,
    technologies: used.filter((technology) => technology.group === group.id),
  })).filter((group) => group.technologies.length > 0);
}
