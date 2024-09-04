import React, { forwardRef } from 'react';

import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';

type CommentsAddModalTriggerProps = React.ComponentPropsWithoutRef<typeof Button>;

const CommentsAddModalTrigger = forwardRef<
  React.ElementRef<typeof Button>,
  CommentsAddModalTriggerProps
>(({ ...props }, ref) => {
  return (
    <DialogTrigger asChild>
      <Button ref={ref} {...props} />
    </DialogTrigger>
  );
});
CommentsAddModalTrigger.displayName = 'AddCommentModalTrigger';

export { CommentsAddModalTrigger };
