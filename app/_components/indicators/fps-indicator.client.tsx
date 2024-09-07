'use client';

import { useFps } from '@/hooks/use-fps';

export function FPSIndicatorClient() {
  const fps = useFps();

  return (
    <div className='fixed bottom-1 left-8 z-40 flex h-6 w-fit items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white'>
      {fps}
      {' '}
      fps
    </div>
  );
}
