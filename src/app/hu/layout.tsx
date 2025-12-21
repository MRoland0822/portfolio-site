import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/common/Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default async function HuLayout({ children }: LayoutProps) {
  const messages = await getMessages({ locale: 'hu' });

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar/>
      <div className="flex flex-col min-h-screen">
        {children}
      </div>
    </NextIntlClientProvider>
  );
}