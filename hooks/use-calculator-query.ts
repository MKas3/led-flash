import { places, substrateTypes } from '@/config/calculator/calculator';
import { neonTypes } from '@/config/home/constructor';
import { parseAsFloat, parseAsInteger, parseAsStringEnum, useQueryStates } from 'nuqs';

export const useCalculatorQuery = () => {
  return useQueryStates({
    count: parseAsInteger,
    height: parseAsFloat,
    length: parseAsFloat,
    neonType: parseAsStringEnum([...neonTypes]),
    place: parseAsStringEnum([...places]),
    substrateType: parseAsStringEnum([...substrateTypes]),
    width: parseAsFloat
  });
};
