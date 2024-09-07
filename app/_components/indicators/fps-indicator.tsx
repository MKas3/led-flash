import { env } from '@/lib/env';

import { FPSIndicatorClient } from './fps-indicator.client';

export function FPSIndicator() {
  if (env.NODE_ENV === 'production') return null;

  return <FPSIndicatorClient />;
}
