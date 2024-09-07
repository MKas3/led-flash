'use client';

import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

type CommentTextProps = React.ComponentPropsWithoutRef<'div'>;

export const CommentText = ({ children, ...props }: CommentTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const checkOverflow = () => {
      setIsOverflowing(textRef.current!.scrollHeight > textRef.current!.clientHeight);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [children]);

  return (
    <div {...props}>
      <p ref={textRef} className={cn('line-clamp-3', isExpanded && 'line-clamp-none')}>
        {children}
      </p>
      {!isExpanded && isOverflowing && (
        <Button
          className='p-0 !text-[length:inherit]'
          size='sm'
          variant='link'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Еще
        </Button>
      )}
    </div>
  );
};
