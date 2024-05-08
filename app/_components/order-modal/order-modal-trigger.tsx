import React, { forwardRef } from 'react';

import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';

type OrderModalTriggerProps = React.ComponentPropsWithoutRef<typeof Button>;

const OrderModalTrigger = forwardRef<
  React.ElementRef<typeof Button>,
  OrderModalTriggerProps
>(({ ...props }, ref) => {
  return (
    <DialogTrigger asChild>
      <Button ref={ref} {...props} />
    </DialogTrigger>
  );
});
OrderModalTrigger.displayName = 'OrderModalTrigger';

export { OrderModalTrigger };
