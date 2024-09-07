'use client';

import { useMemory } from '@/hooks/use-memory';

export function MemoryIndicatorClient() {
  const { value } = useMemory();

  return (
    <div className='fixed bottom-1 right-1 z-40 flex h-6 w-fit items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white'>
      {Math.round(value.usedJSHeapSize / 1024 / 1024)}
      {' '}
      mb (
      {Math.round(value.totalJSHeapSize / 1024 / 1024)}
      {' '}
      mb) /
      {' '}
      {Math.round(value.jsHeapSizeLimit / 1024 / 1024)}
      {' '}
      mb
      {' '}

    </div>
  );
}
