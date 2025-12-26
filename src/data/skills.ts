export interface Skill {
  name: string;
  category: 'core' | 'learning';
}

export const skills: Skill[] = [
  // Core Skills
  { name: 'Java', category: 'core' },
  { name: 'C#', category: 'core' },
  { name: 'Python', category: 'core' },
  { name: 'Object-Oriented Programming', category: 'core' },
  { name: 'Digital Signal Processing', category: 'core' },
  { name: 'Image Processing', category: 'core' },
  { name: 'Git & GitHub', category: 'core' },
  { name: 'Electronics', category: 'core' },

  // Currently Learning
  { name: 'JavaScript', category: 'learning' },
  { name: 'React', category: 'learning' },
  { name: 'Next.js 14', category: 'learning' },
  { name: 'TypeScript', category: 'learning' },
  { name: 'TailwindCSS', category: 'learning' },
  { name: 'Artificial Intelligence', category: 'learning' },
  { name: 'NestJS', category: 'learning' },
  { name: 'REST APIs', category: 'learning' },
];