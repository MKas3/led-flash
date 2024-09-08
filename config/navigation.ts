export const xeraseHref = 'https://form.xerase.ru';

export const navigationHrefs = {
  about: {
    altNaming: 'О нас',
    href: '/about',
    naming: 'about'
  },
  blog: {
    altNaming: 'Блог',
    article: {
      href: (article: string) => `/blog/${article}`,
      naming: 'article'
    },
    href: '/blog',
    naming: 'blog'
  },
  calculator: {
    altNaming: 'Калькулятор',
    href: '/calculator',
    naming: 'calculator'
  },
  cases: {
    altNaming: 'Кейсы',
    href: '/cases',
    naming: 'cases'
  },
  delivery: {
    altNaming: 'Доставка',
    href: '/delivery',
    naming: 'delivery'
  },
  home: {
    altNaming: 'Главная',
    href: '/',
    naming: 'home'
  },
  policy: {
    altNaming: 'Политика обработки персональных данных',
    href: '/policy',
    naming: 'policy'
  }
} as const;
