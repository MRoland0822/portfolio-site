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
    title: '3D Printed Robot Hand with DSP & Image Processing',
    description: 'Advanced robotics project using digital signal processing and image recognition',
    longDescription:
      'Developed a fully functional 3D-printed robotic hand controlled through sophisticated digital signal processing (DSP) and image processing algorithms. The hand responds to visual input using computer vision techniques. This project showcased expertise in signal processing, image recognition, and practical robotics engineering.',
    technologies: ['Python', 'DSP', 'Image Processing', 'OpenCV', '3D Printing', 'Robotics'],
    githubUrl: 'https://github.com/MRoland0822/3D-nyomtatott-kez-vezerlese-EMG-jelekkel-es-kepfeldolgozassal',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'TMS - Social Media App for Car Lovers',
    description: 'Mobile Android application for car enthusiast community',
    longDescription:
      'Developed a full-featured social media application built with Android Studio targeting car enthusiasts. The app includes user authentication, community features, and car-specific content sharing capabilities. Designed with a focus on user engagement and community building.',
    technologies: ['Android', 'Firebase', 'Material Design', 'Mobile Development'],
    githubUrl: 'https://github.com/MRoland0822/TMS',
    featured: true,
  },
 {
  id: 'project-3',
  title: 'Auth + Roles + CRUD Admin Panel',
  description: 'Full-stack application with authentication, role-based access control, and admin management',
  longDescription:
    'A comprehensive full-stack web application demonstrating advanced authentication with JWT tokens, role-based access control (RBAC), and complete CRUD operations. Features a modern Next.js frontend with TypeScript and a robust NestJS backend with PostgreSQL. Includes audit logging to track all administrative actions, user management capabilities, and secure password handling with bcrypt. The application showcases enterprise-level architecture with Docker containerization, proper error handling, and responsive UI design.',
  technologies: [
    'TypeScript',
    'NestJS',
    'PostgreSQL',
    'Prisma',
    'Docker',
  ],
  githubUrl: 'https://github.com/MRoland0822/auth-admin-panel',
  featured: true,
},
{
  id: 'project-4',
  title: 'Personal Portfolio Website',
  description: 'Modern, fully responsive portfolio built with Next.js 14, featuring i18n and smooth animations',
  longDescription:
    'A modern, production-ready personal portfolio website built with Next.js 14 and TypeScript. Features include i18n support (Hungarian/English), smooth Framer Motion animations, responsive design optimized for all devices, and comprehensive SEO optimization. The portfolio showcases projects, experience, and skills with a clean, minimalist design. Built with best practices including server components, proper TypeScript typing, and deployed on Vercel with automatic CI/CD.',
  technologies: [
    'Next.js 14',
    'TypeScript',
    'TailwindCSS',
    'Framer Motion',
    'next-intl',
    'Responsive Design',
    'SEO Optimization',
    'Vercel',
  ],
  githubUrl: 'https://github.com/MRoland0822/portfolio-site',
  liveUrl: 'https://your-portfolio-domain.com', 
  featured: true,
},
{
  id: 'project-5',
  title: 'Christmas Gift Website',
  description: 'An interactive Christmas gift experience with animated cards, snowfall effects, and ambient music.',
  longDescription:
    'A beautiful, festive web application built with Next.js and TypeScript. Users can click on a wrapped gift box to reveal a grid of mystery cards with personalized messages. Features smooth 3D card flip animations, continuous snowfall, twinkling stars, and background music. Fully responsive design with mobile-first approach and accessibility features including keyboard navigation and ARIA labels.',
  technologies: [
    'Next.js 14',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'Framer Motion',
    'CSS Animations',
    'Web Audio API',
  ],
  githubUrl: 'https://github.com/MRoland0822/christmas-gift-app',
  liveUrl: 'https://christmas-gift-app.vercel.app',
  featured: true,
},
  
];