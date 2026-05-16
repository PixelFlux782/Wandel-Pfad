import * as React from 'react';
import { cn } from '@/lib/utils';

const variants = {
  default: 'bg-text text-white shadow-soft hover:bg-[#2b2723] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  secondary: 'bg-white text-text border border-border hover:border-text hover:bg-[#F0E9DF]',
  subtle: 'bg-transparent text-text/85 hover:text-text'
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
