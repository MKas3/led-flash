export const xeraseHref = 'https://form.xerase.ru';

export const navigationHrefs = {
  home: {
    naming: 'home',
    altNaming: 'Главная',
    href: '/',
  },
  cases: {
    naming: 'cases',
    altNaming: 'Кейсы',
    href: '/cases',
  },
  delivery: {
    naming: 'delivery',
    altNaming: 'Доставка',
    href: '/delivery',
  },
  calculator: {
    naming: 'calculator',
    altNaming: 'Калькулятор',
    href: '/calculator',
  },
  blog: {
    naming: 'blog',
    altNaming: 'Блог',
    href: '/blog',
    article: {
      naming: 'article',
      href: (article: string) => `/blog/${article}`,
    },
  },
  about: {
    naming: 'about',
    altNaming: 'О нас',
    href: '/about',
  },
} as const;
