import type { FieldValues, UseFormProps, UseFormReturn } from 'react-hook-form';
import type { z, ZodType } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export type UseZodFormReturn<T extends FieldValues> = UseFormReturn<T>;

export const useZodForm = <T extends ZodType>(
  formSchema: T,
  options?: UseFormProps<z.infer<T>>
) => {
  return useForm<z.infer<T>>({
    resolver: zodResolver(formSchema),
    ...options,
  }) as UseZodFormReturn<z.infer<T>>;
};
