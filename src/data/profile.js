import resumeUrl from '../assets/Boaretto-Curriculo.pdf';

export const profile = {
  name: 'Felipe Boaretto',
  github: { url: 'https://github.com/BoarettoFelipe', username: 'BoarettoFelipe' },
  linkedin: { url: 'https://www.linkedin.com/in/felipe-boaretto-565754267/', label: 'Felipe Boaretto' },
  email: 'feliperibasboaretto@gmail.com',
  whatsapp: { url: 'https://wa.me/5541999027311', label: '+55 41 99902-7311' },
  skillGroups: [
    { id: 'languages', labelKey: 'skills_languages', technologies: ['csharp', 'python', 'javascript', 'typescript', 'vba'] },
    { id: 'development', labelKey: 'skills_development', technologies: ['dotnet', 'react', 'nodejs', 'wpf'] },
    { id: 'data', labelKey: 'skills_data', technologies: ['sql', 'sql-server', 'postgresql', 'mysql', 'sqlite', 'power-bi'] },
    { id: 'cloud', labelKey: 'skills_cloud', technologies: ['aws', 'docker', 'terraform', 'github-actions'] },
    { id: 'automation', labelKey: 'skills_automation', technologies: ['power-apps', 'power-automate', 'excel', 'sap'] },
  ],
  resume: { url: resumeUrl, filename: 'FelipeBoaretto-Curriculo.pdf' },
};
