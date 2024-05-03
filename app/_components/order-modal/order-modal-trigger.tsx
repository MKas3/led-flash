import React from 'react';

import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';

type OrderModalTriggerProps = React.ComponentPropsWithoutRef<typeof Button>;

export const OrderModalTrigger = ({ ...props }: OrderModalTriggerProps) => {
  return (
    <DialogTrigger asChild>
      <Button {...props} />
    </DialogTrigger>
  );
};
