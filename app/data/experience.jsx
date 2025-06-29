// data/experience.js
import { GoBriefcase, GoMortarBoard } from 'react-icons/go';
import { GiArchiveResearch  } from 'react-icons/gi';


export const experience = [
  /* ──────────────────────────────────────────────── */
  {
    title: 'Software Engineer',
    org: 'Incedo',
    date: 'Jul 2023 – Present',
    color: '#f46fa0',                 // pink accent
    icon: <GoBriefcase />,
    summary: [
      'Developed <b>scalable microservices</b> with Spring Boot, Java & PostgreSQL, significantly boosting performance.',
      'Enhanced distributed caching via </b>Redis</b> → ≈ 40 % higher throughput.',
      'Applied </b>Clean Architecture</b> to improve maintainability and onboarding speed.',
      'Built a secure JWT service (RSA-256 + KID) that met enterprise-grade compliance.',
      'Extended the Business Assessment Tool (BAT):\n  Integrated Kafka → Azure Event Hub for real-time preference streams.\n  Co-ordinated live e-mail notifications with the legacy mailer.',
      'Mentored junior devs and resolved complex prod issues, fostering a collaborative culture.'
    ]
  },

  /* ────────────────────Research paper────────────────────────── */
  {
    title: 'Adverse Weather Object Detection Using Customized YOLO Models',
    org: 'Springer - Conference paper',
    date: 'First Online: 31 January 2025',
    color: '#7670ff',                 // purple accent
    icon: <GiArchiveResearch />,
    url: 'https://link.springer.com/chapter/10.1007/978-981-97-9112-5_7',
    // summary:
    //   'CGPA 8.82 · IEEE Society Core. Capstone: autonomous UAV-swarm navigation.'
  },



  /* ──────────────────────────────────────────────── */
  {
    title: 'Microsoft Certified: Azure Developer Associate',
    // org: 'Microsoft',
    date: 'Jul 2023 – Dec 2023',
    color: '#49d179',                 // green accent
    icon: <GoMortarBoard />,
    // summary:
    //   'CGPA 8.82 · IEEE Society Core. Capstone: autonomous UAV-swarm navigation.'
  },

  /* ──────────────────────────────────────────────── */
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    // org: 'Microsoft',
    date: 'May 2023 – Jun 2023',
    color: '#49d179',                 // green accent
    icon: <GoMortarBoard />,
    // summary:
    //   'CGPA 8.82 · IEEE Society Core. Capstone: autonomous UAV-swarm navigation.'
  },
  /* ──────────────────────────────────────────────── */
  {
    title: 'Software Engineer Trainee',
    org: 'Incedo',
    date: 'Jan 2023 – Jun 2023',
    color: '#7670ff',                 // purple accent
    icon: <GoBriefcase />,
    summary: [
      'Completed an intensive 1.5-month track in Spring Boot, Java & React.',
      'Introduced Clean Architecture + Repository Pattern to new modules.',
      'Led a squad of 7 that shipped 4 new features in 1 month; presented to the CDO.',
      'Owned sprint planning, code reviews & API integrations → 30 % rise in engagement.'
    ]
  },

  /* ──────────────────────────────────────────────── */
  {
    title: 'B.E. Computer Engineering',
    org: 'Thapar Institute of Engineering & Technology',
    date: 'Aug 2019 – May 2023',
    color: '#49d179',                 // green accent
    icon: <GoMortarBoard />,
    // summary:
    //   'CGPA 8.82 · IEEE Society Core. Capstone: autonomous UAV-swarm navigation.'
  }
];
