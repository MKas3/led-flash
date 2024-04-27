import type { ClassValue } from 'clsx';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toHSLString = (hsl: [number, number, number]) =>
  `hsl(${hsl.map((value, index) => (index >= 1 ? `${value}%` : value)).join(',')})`;
