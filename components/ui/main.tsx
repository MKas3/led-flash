import { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import {
  BackgroundCircles,
  backgroundCirclesVariants,
} from '@/components/ui/background-circles';
import { FooterTeam } from '@/app/_components/footer-team';

type MainProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof backgroundCirclesVariants>;

export const Main = ({ size, className, children, ...props }: MainProps) => {
  return (
    <main
      className={cn('relative w-full overflow-hidden', className)}
      {...props}
    >
      {/*<BackgroundCircles size={size} />*/}
      {children}
      <FooterTeam />
    </main>
  );
};
