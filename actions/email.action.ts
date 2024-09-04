'use server';

import type { FooterFormSchema } from '@/config/footer';

import { feedbackBodySchema } from '@/app/api/email/feedback/route';
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
