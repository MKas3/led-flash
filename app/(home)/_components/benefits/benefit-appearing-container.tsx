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
      variants={slideFromDownVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      {...props}
    />
  );
};
