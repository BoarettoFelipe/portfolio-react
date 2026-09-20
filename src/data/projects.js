/**
 * @typedef {{ pt: string, en: string }} LocalizedText
 * @typedef {Object} Project
 * @property {string} id Identificador único e estável (slug).
 * @property {LocalizedText} title
 * @property {LocalizedText} description Descrição curta para o card.
 * @property {LocalizedText} [details] Descrição detalhada para uma futura página.
 * @property {Array<keyof typeof import('./technologies.js').technologies>} technologies
 * @property {string} image Capa importada de src/assets/projects/.
 * @property {string} githubUrl
 * @property {string} [demoUrl]
 * @property {'in-progress'|'completed'|'archived'} status
 * @property {boolean} featured
 */

// Para cadastrar: importe a capa e adicione um objeto Project neste array.
// Use IDs de technologies.js; mantenha os textos específicos junto do projeto.
/** @type {Project[]} */
export const projects = [];
