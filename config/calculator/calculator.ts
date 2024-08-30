import { neonTypes } from '@/config/home/constructor';
import { z } from 'zod';

export const substrateTypes = ['transparent', 'colored'] as const;

export const substrateTypesNamings = ['Прозрачный', 'Цветной'];

export const places = ['inside', 'outside'] as const;

export const placesNamings = ['В помещении', 'На улице'];

export const calculatorFormSchema = z.object({
  count: z.number({
    errorMap: () => ({
      message: 'Напишите приблизительное количество отдельных элементов неона'
    })
  }),
  height: z.number({
    errorMap: () => ({ message: 'Напишите приблизительную высоту подложки' })
  }),
  length: z.number({
    errorMap: () => ({
      message: 'Напишите приблизительную длину гибкого неона'
    })
  }),
  neonType: z.enum(neonTypes),
  place: z.enum(places),
  substrateType: z.enum(substrateTypes),
  width: z.number({
    errorMap: () => ({ message: 'Напишите приблизительную ширину подложки' })
  })
});

export type CalculatorFormSchema = z.infer<typeof calculatorFormSchema>;

export const calculatorFormDefaults: CalculatorFormSchema = {
  count: 1,
  height: 1,
  length: 1,
  neonType: neonTypes[0],
  place: places[0],
  substrateType: substrateTypes[0],
  width: 1
};
