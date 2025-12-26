import './globals.css';
import GlobalBackground from '@/styles/GlobalBackground';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        <GlobalBackground/>
        {children}
      </body>
    </html>
  );
}