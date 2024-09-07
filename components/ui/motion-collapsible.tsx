'use client';

import React, { createContext, useContext, useId, useMemo, useState } from 'react';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { LayoutGroup, motion } from 'framer-motion';

type CollapsibleContext = {
  isOpen: boolean;
};

const collapsibleContext = createContext<CollapsibleContext>({} as CollapsibleContext);

const useMotionCollapsible = () => {
  return useContext(collapsibleContext);
};

const MotionCollapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>(({ defaultOpen, ...props }, ref) => {
  const id = useId();

  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  const contextValue = useMemo(() => ({ isOpen }), [isOpen]);

  return (
    <LayoutGroup id={id}>
      <collapsibleContext.Provider value={contextValue}>
        <CollapsiblePrimitive.Root ref={ref} open={isOpen} onOpenChange={setIsOpen} {...props} />
      </collapsibleContext.Provider>
    </LayoutGroup>
  );
}
);
MotionCollapsible.displayName = CollapsiblePrimitive.Root.displayName;

const MotionCollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger>
>(({ ...props }, ref) => {
  return <CollapsiblePrimitive.CollapsibleTrigger ref={ref} {...props} />;
});
MotionCollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName;

const MotionCollapsibleTriggerContent = React.forwardRef<
  React.ElementRef<typeof motion.div>,
  React.ComponentPropsWithoutRef<typeof motion.div>
>(({ ...props }, ref) => {
  const { isOpen } = useMotionCollapsible();

  if (isOpen) return null;

  return <motion.div ref={ref} layout='size' layoutId='motion-collapsible' {...props} />;
});
MotionCollapsibleTriggerContent.displayName = 'CollapsibleTriggerContent';

const InnerMotionCollapsibleContent = motion.create(CollapsiblePrimitive.CollapsibleContent);

const MotionCollapsibleContent = React.forwardRef<
  React.ElementRef<typeof InnerMotionCollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof InnerMotionCollapsibleContent>
>(({ ...props }, ref) => {
  const { isOpen } = useMotionCollapsible();

  if (!isOpen) return null;

  return <InnerMotionCollapsibleContent ref={ref} layout='size' layoutId='motion-collapsible' {...props} />;
});
MotionCollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;

export { MotionCollapsible, MotionCollapsibleContent, MotionCollapsibleTrigger, MotionCollapsibleTriggerContent, useMotionCollapsible };
