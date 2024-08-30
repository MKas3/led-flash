import React from 'react';

import Link from '@/components/ui/link';
import { navigationHrefs } from '@/config/navigation';

import { cn } from '@/lib/utils';

type ArticleCardProps = React.ComponentPropsWithoutRef<typeof Link.Link>;

export const ArticleCard = ({
  className,
  href,
  ...props
}: ArticleCardProps) => {
  return (
    <Link.Link
      className={cn('block rounded-sm bg-muted p-4', className)}
      href={navigationHrefs.blog.article.href(href.toString())}
      {...props}
    />
  );
};
