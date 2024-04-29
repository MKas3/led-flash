import { siteConfig } from '@/config/site';

export const apiBaseHref = `${siteConfig.url}/api`;

export const api = {
  yMapsApiUrl: `https://api-maps.yandex.ru/3.0/?apikey=${process.env.YMAP_API_KEY}&lang=ru_RU`,
};
