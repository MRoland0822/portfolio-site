export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'work' | 'learning' | 'project';
}

export const experience: Experience[] = [
{
    id: 'exp-1',
    title: 'Java Software Engineer',
    company: 'Konecranes',
    period: '02/2025 - Present',
    description:
      'Currently working as a Java Software Engineer at Konecranes. Contributing to mission-critical port terminal applications with focus on quality and reliability.',
    technologies: ['Java', 'Cucumber', 'Testing Automation'],
    type: 'work',
  },
  {
    id: 'exp-2',
    title: 'Java Software Engineer - Trainee',
    company: 'Konecranes',
    period: '08/2024 - 01/2025',
    description:
      'Worked as a trainee Java engineer, writing production code and developing comprehensive Cucumber tests for port terminal testing applications. Gained hands-on experience in test automation and software quality assurance.',
    technologies: ['Java', 'Cucumber', 'Testing'],
    type: 'work',
  },
  {
    id: 'exp-3',
    title: 'Programmer',
    company: 'Ambo Systems',
    period: '08/2023 - 10/2023',
    description:
      'Part-time programmer focusing on C# development. Worked on various features and bug fixes for company projects.',
    technologies: ['C#', '.NET', 'Visual Studio'],
    type: 'work',
  },
  {
    id: 'exp-4',
    title: 'Process Engineer Internship',
    company: 'Zollner Electronics',
    period: '07/2023 - 08/2023',
    description:
      'Internship in process engineering, responsible for continuous operation and maintenance of manufacturing machines.',
    technologies: ['Manufacturing', 'Process Optimization', 'Equipment Maintenance'],
    type: 'work',
  },
  {
    id: 'exp-5',
    title: 'Process Engineer Internship',
    company: 'Zollner Electronics',
    period: '07/2022 - 08/2022',
    description:
      'Initial internship in process engineering, gaining foundational knowledge in manufacturing operations and machine maintenance.',
    technologies: ['Manufacturing', 'Operations', 'Maintenance'],
    type: 'work',
  },
  {
    id: 'exp-6',
    title: 'Bachelor of Science in Computer Science',
    company: 'Sapientia Hungarian University of Transylvania',
    period: '09/2020 - 07/2024',
    description:
      'Completed comprehensive computer science degree with strong foundation in programming languages and software development. Coursework included C, C++, Matlab, Java, Kotlin, and OOP principles.',
    technologies: ['C', 'C++', 'Java', 'Kotlin', 'Matlab', 'OOP'],
    type: 'learning',
  },
];