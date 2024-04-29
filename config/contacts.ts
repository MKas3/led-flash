import { siteConfig } from '@/config/site';

export const contacts = [
  {
    altNaming: 'phone',
    naming: 'Телефон',
    value: siteConfig.altPhone,
  },
  {
    altNaming: 'email',
    naming: 'E-mail',
    value: siteConfig.email,
  },
  {
    altNaming: 'address',
    naming: 'Адрес для самовывоза',
    value: siteConfig.address,
  },
  {
    altNaming: 'work-time',
    naming: 'Режим работы',
    value: siteConfig.workTime,
  },
] as const;
