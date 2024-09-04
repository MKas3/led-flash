'use server';

import type { CalculatorFormSchema } from '@/config/calculator/calculator';
import type { FooterFormSchema } from '@/config/footer';

import { calculatorFormSchema } from '@/config/calculator/calculator';
import { feedbackBodySchema } from '@/config/email';
import { footerFormSchema } from '@/config/footer';

import { env } from '@/lib/env';

export const sendOrder = async (data: FooterFormSchema) => {
  const safeData = footerFormSchema.safeParse(data);

  if (!safeData.success) return { success: false };

  await fetch(`${env.API_URL}/email/order`, {
    body: JSON.stringify(safeData.data),
    method: 'POST'
  });

  return { success: true };
};

export const sendFeedback = async (data: FormData) => {
  const safeData = feedbackBodySchema.safeParse(data);

  if (!safeData.success) return { success: false };

  await fetch(`${env.API_URL}/email/feedback`, {
    body: data,
    method: 'POST'
  });

  return { success: true };
};

export const sendPricedOrder = async (data: FooterFormSchema, calculatorData: CalculatorFormSchema) => {
  const safeData = footerFormSchema.safeParse(data);
  const safeCalculatorData = calculatorFormSchema.safeParse(calculatorData);

  if (!safeData.success || !safeCalculatorData.success) return { success: false };

  await fetch(`${env.API_URL}/email/price`, {
    body: JSON.stringify({ ...safeData.data, ...safeCalculatorData.data }),
    method: 'POST'
  });

  return { success: true };
};
