export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image?: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with Java backend and modern UI',
    longDescription:
      'Built a complete e-commerce platform with user authentication, product management, shopping cart, and payment integration. Implemented RESTful APIs with Spring Boot and optimized database queries.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A C# desktop application for managing daily tasks and projects',
    longDescription:
      'Developed a Windows desktop application using C# and WPF for task management. Features include task categorization, deadline tracking, and data persistence with local database.',
    technologies: ['C#', 'WPF', 'SQL Server', 'MVVM'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'A responsive weather app built with React and weather API integration',
    longDescription:
      'Created a real-time weather dashboard that fetches data from a public API. Features include current weather, 7-day forecast, location search, and dark mode support.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.com',
    featured: true,
  },
  {
    id: 'project-4',
    title: 'Blog Platform',
    description: 'A lightweight blogging platform built with Next.js and Markdown',
    longDescription:
      'Developed a modern blog platform with server-side rendering, markdown support, and SEO optimization. Includes admin panel for content management.',
    technologies: ['Next.js', 'TypeScript', 'Markdown', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/blog-platform',
    liveUrl: 'https://blog-demo.com',
    featured: false,
  },
  {
    id: 'project-5',
    title: 'Inventory Management System',
    description: 'A Java-based system for tracking inventory across multiple locations',
    longDescription:
      'Built an enterprise inventory management system with real-time stock tracking, automated reordering, and reporting features. Handles thousands of transactions daily.',
    technologies: ['Java', 'PostgreSQL', 'Spring MVC', 'Hibernate'],
    githubUrl: 'https://github.com/yourusername/inventory-system',
    featured: false,
  },
  {
    id: 'project-6',
    title: 'Chat Application',
    description: 'A real-time messaging app with WebSocket support',
    longDescription:
      'Developed a real-time chat application with user authentication, message history, and typing indicators. Uses WebSockets for instant communication.',
    technologies: ['Node.js', 'Socket.io', 'React', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/chat-app',
    liveUrl: 'https://chat-app-demo.com',
    featured: false,
  },
];