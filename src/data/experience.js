/**
 * Conteúdo profissional em ordem de exibição. Preencher apenas com dados reais.
 * Textos localizados usam { pt: string, en: string }.
 *
 * @typedef {{ pt: string, en: string }} LocalizedText
 * @typedef {Object} Experience
 * @property {string} id Identificador estável.
 * @property {string} company Nome da empresa.
 * @property {LocalizedText} role Cargo.
 * @property {LocalizedText} [program] Programa profissional.
 * @property {{ id: string, title: LocalizedText, description: LocalizedText }[]} [rotations] Rotações do programa.
 * @property {LocalizedText} period Período para exibição.
 * @property {LocalizedText} [location] Local ou modalidade.
 * @property {LocalizedText} [summary] Resumo da atuação.
 * @property {LocalizedText[]} [highlights] Realizações ou destaques.
 * @property {string[]} [technologies] IDs do registro technologies.js.
 */

/** @type {Experience[]} */
export const experience = [
  {
    "id": "forvia-next-generation",
    "company": "FORVIA",
    "role": {
      "pt": "Estagiário em Tecnologia e Automação de Negócios",
      "en": "Technology & Business Automation Intern"
    },
    "program": {
      "pt": "Next Generation Program",
      "en": "Next Generation Program"
    },
    "period": {
      "pt": "Fevereiro de 2024 – Fevereiro de 2026",
      "en": "February 2024 – February 2026"
    },
    "location": {
      "pt": "São José dos Pinhais, PR",
      "en": "São José dos Pinhais, PR"
    },
    "summary": {
      "pt": "Programa rotacional no Global Business Services (GBS), com atuação em tecnologia, automação de processos e melhoria operacional em diferentes áreas de negócio.",
      "en": "Rotational program within Global Business Services (GBS), focused on technology, process automation and operational improvement across different business areas."
    },
    "rotations": [
      {
        "id": "it",
        "title": {
          "pt": "Information Technology (IT)",
          "en": "Information Technology (IT)"
        },
        "description": {
          "pt": "Desenvolvimento de soluções internas utilizando C#, .NET e SQL Server para suporte às operações e melhoria da eficiência de processos.",
          "en": "Developed internal solutions using C#, .NET and SQL Server to support business operations and improve process efficiency."
        }
      },
      {
        "id": "impex",
        "title": {
          "pt": "Import & Export (IMPEX)",
          "en": "Import & Export (IMPEX)"
        },
        "description": {
          "pt": "Desenvolvimento de automações e ferramentas internas utilizando VBA, SAP Scripts, Power Platform, Excel, Power BI e Microsoft 365.",
          "en": "Designed automation solutions and internal tools using VBA, SAP Scripts, Power Platform, Excel, Power BI and Microsoft 365."
        }
      },
      {
        "id": "tax",
        "title": {
          "pt": "Tax Operations",
          "en": "Tax Operations"
        },
        "description": {
          "pt": "Desenvolvimento de aplicações locais, automações e melhorias de processos para apoiar atividades fiscais e administrativas.",
          "en": "Developed local applications, automations and process improvements to support tax and administrative activities."
        }
      },
      {
        "id": "controlling",
        "title": {
          "pt": "Controlling",
          "en": "Controlling"
        },
        "description": {
          "pt": "Criação de ferramentas de automação, relatórios e aplicações voltadas à otimização de processos financeiros e de controladoria.",
          "en": "Built automation tools, reports and business applications to streamline financial and controlling processes."
        }
      }
    ],
    "highlights": [
      {
        "pt": "Apresentação de projetos, resultados e soluções técnicas em inglês para a liderança do GBS ao final das rotações.",
        "en": "Presented projects, results and technical solutions in English to GBS leadership at the end of the rotations."
      }
    ],
    "technologies": [
      "csharp",
      "dotnet",
      "sql-server",
      "vba",
      "sap",
      "power-bi",
      "power-apps",
      "power-automate",
      "excel",
      "microsoft-365"
    ]
  }
];
