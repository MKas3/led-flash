import { env } from '@/lib/env';

import { MemoryIndicatorClient } from './memory-indicator.client';

export function MemoryIndicator() {
  if (env.NODE_ENV === 'production') return null;

  return <MemoryIndicatorClient />;
}
