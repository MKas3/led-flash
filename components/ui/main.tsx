import { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { FooterTeam } from '@/app/_components/footer-team';

type MainProps = React.HTMLAttributes<HTMLElement>;

export const Main = ({ className, children, ...props }: MainProps) => {
  return (
    <main className={cn('relative w-full', className)} {...props}>
      {children}
      <FooterTeam />
    </main>
  );
};
