import { cn } from '@/lib/utils';
import { FooterTeam } from '@/app/_components/footer/footer-team';
import { OrderModal } from '@/app/_components/order-modal/order-modal';

type MainProps = React.HTMLAttributes<HTMLElement>;

export const Main = ({ className, children, ...props }: MainProps) => {
  return (
    <main className={cn('relative w-full bg-background', className)} {...props}>
      <OrderModal>{children}</OrderModal>
      <FooterTeam />
    </main>
  );
};
