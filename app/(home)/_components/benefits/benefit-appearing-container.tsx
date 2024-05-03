import React from 'react';

import { slideFromDownVariants } from '@/config/animation';
import { AppearingContainer } from '@/components/ui/appearing-container';

type BenefitAppearingContainerProps = React.ComponentPropsWithoutRef<
  typeof AppearingContainer
>;

export const BenefitAppearingContainer = ({
  ...props
}: BenefitAppearingContainerProps) => {
  return (
    <AppearingContainer
      variant='child'
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      {...props}
    />
  );
};
