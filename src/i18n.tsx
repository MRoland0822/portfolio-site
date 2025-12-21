import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './i18n/config';

export default getRequestConfig(async ({ locale = defaultLocale }) => ({
  locale,
  messages: (await import(`./i18n/${locale}.json`)).default,
}));