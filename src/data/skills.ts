export interface Skill {
  name: string;
  category: 'core' | 'learning';
}

export const skills: Skill[] = [
  // Core Skills
  { name: 'Java', category: 'core' },
  { name: 'C#', category: 'core' },
  { name: 'Object-Oriented Programming', category: 'core' },
  { name: 'SQL', category: 'core' },
  { name: 'Git & GitHub', category: 'core' },
  { name: 'Problem Solving', category: 'core' },

  // Currently Learning
  { name: 'JavaScript', category: 'learning' },
  { name: 'React', category: 'learning' },
  { name: 'Next.js 14', category: 'learning' },
  { name: 'TypeScript', category: 'learning' },
  { name: 'TailwindCSS', category: 'learning' },
  { name: 'Framer Motion', category: 'learning' },
  { name: 'Web Design', category: 'learning' },
  { name: 'REST APIs', category: 'learning' },
];