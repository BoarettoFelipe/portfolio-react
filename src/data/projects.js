import attendanceImage from '../assets/projects/home-office-attendance-tracker/dashboard.png';
import smartExpenseImage from '../assets/projects/smart-expense/dashboard.png';
import transportaxImage from '../assets/projects/transportax/dashboard.png';
import portfolioCmsImage from '../assets/projects/professional-portfolio-cms/home.png';
import haskellInventoryImage from '../assets/projects/haskell-inventory-system/inventory.png';

/**
 * @typedef {{ pt: string, en: string }} LocalizedText
 * @typedef {Object} Project
 * @property {string} id Identificador único e estável (slug).
 * @property {LocalizedText} title
 * @property {LocalizedText} description Descrição curta para o card.
 * @property {LocalizedText} [details] Descrição detalhada para uma futura página.
 * @property {Array<keyof typeof import('./technologies.js').technologies>} technologies
 * @property {string|null} image Capa importada de src/assets/projects/.
 * @property {string} githubUrl
 * @property {string} [liveUrl] URL pública estável, quando disponível.
 * @property {string} [demoUrl] Alias legado de liveUrl.
 * @property {'portfolio'|'in-progress'|'completed'|'archived'} status
 * @property {boolean} featured
 */

// Para cadastrar: importe a capa e adicione um objeto Project neste array.
// Use IDs de technologies.js; mantenha os textos específicos junto do projeto.
/** @type {Project[]} */
// portfolio não presume conclusão ou operação em produção.
export const projects = [
  {
    "id": "smart-expense",
    "title": {
      "pt": "SmartExpense",
      "en": "SmartExpense"
    },
    "description": {
      "pt": "Aplicação full-stack de finanças pessoais com autenticação, transações, categorias, orçamentos mensais e dashboard financeiro. O projeto integra frontend React e TypeScript, API ASP.NET Core, PostgreSQL, containers Docker, infraestrutura AWS com Terraform e pipeline CI/CD via GitHub Actions.",
      "en": "Full-stack personal finance application with authentication, transactions, categories, monthly budgets and a financial dashboard. The project combines a React and TypeScript frontend, ASP.NET Core API, PostgreSQL, Docker containers, AWS infrastructure with Terraform, and a GitHub Actions CI/CD pipeline."
    },
    "technologies": [
      "react",
      "typescript",
      "csharp",
      "dotnet",
      "postgresql",
      "aws",
      "docker",
      "terraform",
      "github-actions"
    ],
    "image": smartExpenseImage,
    "githubUrl": "https://github.com/BoarettoFelipe/smart-expense",
    "status": "portfolio",
    "featured": true
  },
  {
    "id": "transportax",
    "title": {
      "pt": "Transportax",
      "en": "Transportax"
    },
    "description": {
      "pt": "Plataforma full-stack de conciliação tributária para documentos fiscais de transporte. Processa CT-e em XML e arquivos SPED, cruza valores fiscais, aplica regras de ICMS, PIS e COFINS, persiste as análises em MySQL e apresenta os resultados em um dashboard React com filtros e exportação para Excel. Projeto de portfólio inspirado em um cenário real, com dados fictícios ou anonimizados.",
      "en": "Full-stack tax reconciliation platform for Brazilian freight tax documents. It processes CT-e XML and SPED files, cross-checks fiscal values, applies ICMS, PIS and COFINS rules, persists analyses in MySQL, and presents the results in a React dashboard with filters and Excel export. A portfolio project inspired by a real-world scenario, using fictional or anonymized data."
    },
    "technologies": [
      "react",
      "javascript",
      "nodejs",
      "express",
      "mysql",
      "exceljs"
    ],
    "image": transportaxImage,
    "githubUrl": "https://github.com/BoarettoFelipe/transportax-tax-reconciliation",
    "status": "portfolio",
    "featured": true
  },
  {
    "id": "ai-shopping-list-agent",
    "title": {
      "pt": "AI Shopping List Agent",
      "en": "AI Shopping List Agent"
    },
    "description": {
      "pt": "Assistente de lista de compras controlado por voz ou texto em português. Utiliza Python, reconhecimento de fala e um LLM local com Ollama e LangChain para extrair produtos dos comandos, atualizar uma planilha Excel e gerar um link de compartilhamento da lista pelo WhatsApp. Projeto acadêmico/pessoal de IA e automação.",
      "en": "Shopping-list assistant controlled through Portuguese voice commands or text input. It uses Python, speech recognition and a local LLM through Ollama and LangChain to extract products from commands, update an Excel workbook and generate a WhatsApp sharing link. An academic/personal AI and automation project."
    },
    "technologies": [
      "python",
      "ollama",
      "langchain",
      "speech-recognition",
      "openpyxl"
    ],
    "image": null,
    "githubUrl": "https://github.com/BoarettoFelipe/ai-shopping-list-agent",
    "status": "portfolio",
    "featured": true
  },
  {
    id: 'home-office-attendance-tracker',
    title: { pt: 'Home Office Attendance Tracker', en: 'Home Office Attendance Tracker' },
    description: {
      pt: 'Aplicação desktop local-first desenvolvida em .NET WPF para gerenciamento de presença em home office, escalas semanais, permissões de usuários, histórico de alterações e exportação de relatórios em Excel. Utiliza SQLite para persistência local, Dapper para acesso a dados e ClosedXML para geração dos relatórios. Adaptação de portfólio inspirada em um fluxo real, sem representar o sistema corporativo original ou uma aplicação em produção.',
      en: 'Local-first desktop application built with .NET WPF for managing home-office attendance, weekly schedules, user permissions, audit history and Excel report exports. It uses SQLite for local persistence, Dapper for data access and ClosedXML for report generation. A portfolio adaptation inspired by a real workflow, not the original corporate system or a production application.'
    },
    technologies: ['csharp', 'dotnet', 'wpf', 'sqlite', 'dapper', 'closedxml'],
    image: attendanceImage,
    githubUrl: 'https://github.com/BoarettoFelipe/home-office-attendance-tracker',
    status: 'portfolio',
    featured: true
  },
  {
    id: 'professional-portfolio-cms',
    title: { pt: 'Portfolio Profissional com CMS', en: 'Professional Portfolio with CMS' },
    description: {
      pt: 'Portfólio profissional desenvolvido em React com integração ao Decap CMS, permitindo que uma usuária não técnica atualize conteúdos como perfil, experiências, publicações e currículo por uma interface administrativa, sem editar diretamente o código.',
      en: 'Professional portfolio built with React and Decap CMS, allowing a non-technical user to update content such as profile information, experience, publications and resume through an admin interface without editing the source code.'
    },
    technologies: ['react', 'javascript', 'vite', 'decap-cms', 'i18next', 'emailjs'],
    image: portfolioCmsImage,
    githubUrl: 'https://github.com/BoarettoFelipe/portifolio-namorada',
    liveUrl: 'https://brendawollinger.vercel.app',
    status: 'portfolio',
    featured: false
  },
  {
    id: 'haskell-inventory-system',
    title: { pt: 'Sistema de Inventário em Haskell', en: 'Haskell Inventory System' },
    description: {
      pt: 'Sistema de inventário em Haskell com regras de negócio funcionais, persistência em arquivos e log de auditoria. O projeto separa lógica pura de operações de IO e utiliza Data.Map e Either para modelar o estado e os resultados das operações.',
      en: 'Inventory system built in Haskell with functional business rules, file persistence and audit logging. The project separates pure logic from IO operations and uses Data.Map and Either to model state and operation results.'
    },
    technologies: ['haskell'],
    image: haskellInventoryImage,
    githubUrl: 'https://github.com/BoarettoFelipe/ProjetoHaskell',
    status: 'portfolio',
    featured: false
  }
];
