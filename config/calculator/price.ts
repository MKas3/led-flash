import { places, substrateTypes } from '@/config/calculator/calculator';
import { neonTypes } from '@/config/home/constructor';

export const substrateTypePrices: Record<
  (typeof substrateTypes)[number],
  number
> = {
  transparent: 1500,
  colored: 2500,
};

export const priceMultipliers = {
  substrateWidth: 10,
  substrateHeight: 10,
  neonLength: 1300,
  neonCount: 200,
};

export const neonTypePriceMultipliers: Record<
  (typeof neonTypes)[number],
  number
> = {
  colors: 1,
  rgb: 2,
  smart: 2,
};

export const placesPriceMultipliers: Record<(typeof places)[number], number> = {
  inside: 0,
  outside: 0.3,
};

export const discounts = [0.01, 0.02, 0.03, 0.05, 0.07, 0.1, 0.15];

export const discountsFromPrice = [
  10_000, 20_000, 30_000, 50_000, 75_000, 100_000, 200_000,
];
