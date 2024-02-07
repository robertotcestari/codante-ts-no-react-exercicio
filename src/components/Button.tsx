import { ComponentPropsWithRef, forwardRef } from 'react';
import { cn } from '../lib/utils';

type ButtonProps = ComponentPropsWithRef<'button'> 

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, ...props }: ButtonProps,
  ref
) {
  return (
    <button
      ref={ref}
      className={cn("px-4 py-2 mt-10 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded bg-opacity-10 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50", className)}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
