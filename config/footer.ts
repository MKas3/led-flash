import { z } from 'zod';

export const contactWays = ['phone', 'telegram', 'whatsapp'] as const;

export const contactWaysNamings = ['Звонок', 'Telegram', 'WhatsApp'];

export const footerFormSchema = z.object({
  contactWay: z.enum(contactWays),
  email: z
    .string({
      errorMap: () => ({
        message: 'Введите Email'
      })
    })
    .email({
      message: 'Введите корректный Email'
    }),
  fullName: z
    .string({ errorMap: () => ({ message: 'Введите ФИО' }) })
    .min(1, { message: 'Введите ФИО' }),
  phone: z
    .string({
      errorMap: () => ({
        message: 'Введите телефон'
      })
    })
    .min(1, { message: 'Введите телефон' })
    .regex(/^\d{11}$/g, {
      message: 'Введите корректный телефон'
    })
});

export type FooterFormSchema = z.infer<typeof footerFormSchema>;
