import { getTechnology } from '../data/technologies.js';

// Aceita pt-BR/en-US, com fallback para português.
export function getLocalizedText(text, language = 'pt') {
  const locale = language.toLowerCase().split('-')[0];
  return text?.[locale] || text?.pt || text?.en || '';
}

// A interface futura pode acrescentar "Todos" via i18n, com valor null.
export function getProjectTechnologies(projects) {
  const ids = new Set(projects.flatMap((project) => project.technologies));
  return Array.from(ids, getTechnology).sort((a, b) => a.label.localeCompare(b.label));
}

export function filterProjectsByTechnology(projects, technologyId = null) {
  return technologyId === null
    ? projects
    : projects.filter((project) => project.technologies.includes(technologyId));
}
