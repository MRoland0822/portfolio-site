import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Junior Developer Portfolio | Java, C#, JavaScript',
  description:
    'Portfolio of a junior developer with 1.5+ years of experience in Java and C#. Currently learning modern web technologies like React and Next.js.',
  keywords: [
    'junior developer',
    'Java',
    'C#',
    'JavaScript',
    'React',
    'Next.js',
    'portfolio',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Junior Developer Portfolio',
    description:
      'Portfolio of a junior developer with 1.5+ years of experience in Java and C#.',
    siteName: 'Dev Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junior Developer Portfolio',
    description:
      'Portfolio of a junior developer with 1.5+ years of experience in Java and C#.',
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-site-verification-code', // Add later
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        {children}
      </body>
    </html>
  );
}