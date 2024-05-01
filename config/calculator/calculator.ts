import { z } from 'zod';

import { neonTypes } from '@/config/home/constructor';

export const substrateTypes = ['transparent', 'colored'] as const;

export const substrateTypesNamings = ['Прозрачный', 'Цветной'];

export const places = ['inside', 'outside'] as const;

export const placesNamings = ['В помещении', 'На улице'];

export const calculatorFormSchema = z.object({
  substrateType: z.enum(substrateTypes),
  width: z.number({
    errorMap: () => ({ message: 'Напишите приблизительную ширину подложки' }),
  }),
  height: z.number({
    errorMap: () => ({ message: 'Напишите приблизительную высоту подложки' }),
  }),
  length: z.number({
    errorMap: () => ({
      message: 'Напишите приблизительную длину гибкого неона',
    }),
  }),
  neonType: z.enum(neonTypes),
  count: z.number({
    errorMap: () => ({
      message: 'Напишите приблизительное количество отдельных элементов неона',
    }),
  }),
  place: z.enum(places),
});

export type CalculatorFormSchema = z.infer<typeof calculatorFormSchema>;

export const calculatorFormDefaults: CalculatorFormSchema = {
  substrateType: substrateTypes[0],
  width: 1,
  height: 1,
  length: 1,
  neonType: neonTypes[0],
  count: 1,
  place: places[0],
};
