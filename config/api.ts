import { siteConfig } from '@/config/site';

import { env } from '@/lib/env';

export const apiBaseHref = `${siteConfig.url}/api`;

export const api = {
  yMapsApiUrl: `https://api-maps.yandex.ru/3.0/?apikey=${env.YMAP_API_KEY}&lang=ru_RU`
};
