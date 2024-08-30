import * as React from 'react';

import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          `flex w-full rounded-sm bg-input p-4 font-poppins text-base ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:rounded-default lg:px-8 lg:py-6 lg:text-2xl md:rounded-md md:px-6 md:py-5 placeholder:text-white/50 xl:text-3xl`,
          className
        )}
        type={type}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
