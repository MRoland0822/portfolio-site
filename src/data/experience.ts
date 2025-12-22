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
    title: 'Junior Java Developer',
    company: 'Tech Solutions Inc.',
    period: '2023 - Present',
    description:
      'Developing and maintaining Java backend services for enterprise applications. Working with Spring Boot, REST APIs, and database optimization. Collaborating with senior developers on code reviews and best practices.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Git'],
    type: 'work',
  },
  {
    id: 'exp-2',
    title: 'C# Developer (Freelance)',
    company: 'Self-employed',
    period: '2022 - 2023',
    description:
      'Built several desktop applications using C# and WPF. Focused on learning OOP principles, design patterns, and creating maintainable code. Completed multiple small projects for clients.',
    technologies: ['C#', 'WPF', 'SQL Server', 'MVVM', 'Visual Studio'],
    type: 'work',
  },
  {
    id: 'exp-3',
    title: 'Web Development Bootcamp',
    company: 'Online Learning Platform',
    period: '2024 - Present',
    description:
      'Intensive course covering modern web technologies including JavaScript, React, Next.js, and TypeScript. Building projects to apply concepts and preparing for web development career transition.',
    technologies: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    type: 'learning',
  },
  {
    id: 'exp-4',
    title: 'E-Commerce Platform Project',
    company: 'Personal Project',
    period: '2023',
    description:
      'Full-stack e-commerce application showcasing skills in backend development with Java and frontend integration. Implemented user authentication, product management, and payment processing.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API'],
    type: 'project',
  },
  {
    id: 'exp-5',
    title: 'Task Management App',
    company: 'Personal Project',
    period: '2022',
    description:
      'Windows desktop application for task and project management. Learned WPF, MVVM pattern, and data persistence. Demonstrated understanding of OOP principles and user interface design.',
    technologies: ['C#', 'WPF', 'SQL Server', 'MVVM'],
    type: 'project',
  },
];