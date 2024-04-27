import { Pause as PausePrimitive, Play as PlayPrimitive } from 'lucide-react';

import { cn } from '@/lib/utils';

type IconProps = React.SVGAttributes<SVGElement>;

const Logo = ({ className, ...props }: IconProps) => {
  return (
    <svg
      className={cn('text-foreground', className)}
      viewBox='0 0 30 35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        className='fill-current'
        d='M29.9825 8.39168H14.3868C14.3776 8.39168 14.3684 8.3963 14.3684 8.40555L11.5692 18.249H7.52895L12.7689 0H6.86247L0 23.9221H15.8393C15.8393 23.9221 12.7965 27.2325 9.10093 26.9273L6.81191 34.9723C6.80731 34.9861 6.8165 35 6.83029 35H8.32413C9.64791 35 10.9395 34.57 11.9691 33.7332C12.8792 32.9934 13.5273 32.0086 13.8536 30.8758L15.8393 23.9221H17.8755C19.1165 23.9221 20.2932 23.5244 21.2815 22.7754C22.2697 22.0264 22.9776 20.9954 23.3223 19.7979L23.7681 18.2444H17.4572L18.6477 14.074C18.6523 14.0647 18.6569 14.0601 18.6661 14.0601H22.5317C25.9928 14.0601 29.0402 11.7576 29.9963 8.41017C30.0055 8.40092 29.9963 8.39168 29.9825 8.39168Z'
      />
    </svg>
  );
};

const Play = PlayPrimitive;

const Pause = PausePrimitive;

const Burger = ({ className, ...props }: IconProps) => {
  return (
    <svg
      className={cn('text-foreground', className)}
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        className='stroke-current'
        d='M3.75 21.25H26.25M3.75 15H26.25M3.75 8.75H26.25'
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default {
  Logo,
  Play,
  Pause,
  Burger,
};
