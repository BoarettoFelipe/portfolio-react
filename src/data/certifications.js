import awsBadge from '../assets/certifications/AWS_Academy_Graduate/aws-academy-graduate-cloud-foundations-training-bad (1).png';
import awsCertificate from '../assets/certifications/AWS_Academy_Graduate/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260530-31-3w3gqa.pdf';
import talkenCertificate from '../assets/certifications/Talken/Talken.pdf';
import sprottShawCertificate from '../assets/certifications/Sprott Shaw/Sprott Shaw.pdf';

// Textos específicos das credenciais ficam junto dos dados; a interface usa i18n.
export const certifications = [
  {
    id: 'aws-cloud-foundations',
    title: {
      pt: 'AWS Academy Graduate – Cloud Foundations',
      en: 'AWS Academy Graduate – Cloud Foundations',
    },
    issuer: 'AWS Academy',
    date: { pt: 'Maio de 2026', en: 'May 2026' },
    description: {
      pt: 'Formação em fundamentos de computação em nuvem pela AWS Academy, abordando conceitos essenciais da AWS, serviços de cloud, segurança, arquitetura e infraestrutura.',
      en: 'Training in cloud computing fundamentals through AWS Academy, covering core AWS concepts, cloud services, security, architecture and infrastructure.',
    },
    details: { pt: '20 horas', en: '20 hours' },
    image: awsBadge,
    credentialUrl: 'https://www.credly.com/go/XW2ibzCE',
    certificateUrl: awsCertificate,
  },
  {
    id: 'toefl-itp',
    title: { pt: 'TOEFL ITP', en: 'TOEFL ITP' },
    issuer: 'Talken English School',
    description: {
      pt: 'Avaliação institucional de proficiência em inglês com pontuação TOEFL ITP de 567.',
      en: 'Institutional English proficiency assessment with a TOEFL ITP score of 567.',
    },
    details: { pt: '567 pontos', en: '567 points' },
    certificateUrl: talkenCertificate,
  },
  {
    id: 'english-language-studies',
    title: {
      pt: 'Programa de Estudos da Língua Inglesa',
      en: 'English Language Studies Program',
    },
    issuer: 'Sprott Shaw Language College',
    date: { pt: '2019', en: '2019' },
    location: 'Vancouver, Canada',
    description: {
      pt: 'Programa intensivo de língua inglesa realizado em Vancouver, Canadá, com quatro semanas de duração e carga de 20 horas semanais.',
      en: 'Intensive English language program completed in Vancouver, Canada, over four weeks with 20 hours of study per week.',
    },
    details: {
      pt: '4 semanas · 20 horas/semana · Canadian Language Benchmark 5',
      en: '4 weeks · 20 hours/week · Canadian Language Benchmark 5',
    },
    certificateUrl: sprottShawCertificate,
  },
]
