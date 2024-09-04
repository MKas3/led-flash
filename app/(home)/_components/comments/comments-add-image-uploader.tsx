import type { CommentsAddFormSchema } from '@/app/(home)/_components/comments/comments-add-form';

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';

import Image from 'next/image';

import { cn } from '@/lib/utils';

type CommentsAddImageUploaderProps = React.ComponentPropsWithoutRef<'div'>;

export const CommentsAddImageUploader = ({ className, ...props }: CommentsAddImageUploaderProps) => {
  const form = useFormContext<CommentsAddFormSchema>();

  const [files, setFiles] = useState<(File & { preview: string })[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    );

    setFiles(newFiles);

    form.setValue('images', acceptedFiles);
  };

  const { getInputProps, getRootProps } = useDropzone({
    accept: { 'image/*': ['.png', '.jpg', '.jpeg'] },
    maxFiles: 3,
    maxSize: 10_485_760,
    onDrop
  });

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)} {...props}>
      <div
        className='flex h-20 cursor-pointer items-center justify-center rounded-md bg-muted'
        {...getRootProps()}
      >
        <input className='hidden' {...getInputProps()} />
        <span className='flex aspect-[3/4] h-full items-center justify-center overflow-hidden rounded-md bg-muted-foreground text-foreground'>+</span>
      </div>
      {files.map((file) => (
        <div key={file.name} className='relative aspect-[3/4] h-20 overflow-hidden rounded-md'>
          <Image
            className='size-full object-cover'
            alt={file.name}
            layout='fill'
            sizes='100vw'
            src={file.preview}
          />
        </div>
      ))}
    </div>
  );
};
