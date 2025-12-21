import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

interface LayoutProps {
  children: ReactNode;
}

export default async function HuLayout({ children }: LayoutProps) {
  const messages = await getMessages({ locale: 'hu' });

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex flex-col min-h-screen">
        {children}
      </div>
    </NextIntlClientProvider>
  );
}