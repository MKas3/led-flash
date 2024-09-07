import HowToTransformYourBakery from '@/public/blog/articles/how-to-transform-your-bakery.mdx';
import SmartLightingControlDimmersAndControllersForNeonSigns from '@/public/blog/articles/smart-lighting-control-dimmers-and-controllers-for-neon-signs.mdx';

export const articlesMetadata = [
  {
    naming: 'Умное управление освещением: Диммеры и контроллеры для неоновых вывесок',
    previewSrc:
      '/blog/articles/preview/smart-lighting-control-dimmers-and-controllers-for-neon-signs.webp',
    tag: 'Популярное',
    urlNaming: 'smart-lighting-control-dimmers-and-controllers-for-neon-signs',
    views: '452'
  },
  {
    naming: 'Как преобразить вашу пекарню?',
    previewSrc: '/blog/articles/preview/how-to-transform-your-bakery.webp',
    tag: 'Новое',
    urlNaming: 'how-to-transform-your-bakery',
    views: '118'
  }
];

export const articles: Record<string, any> = {
  'how-to-transform-your-bakery': HowToTransformYourBakery,
  'smart-lighting-control-dimmers-and-controllers-for-neon-signs': SmartLightingControlDimmersAndControllersForNeonSigns
};
