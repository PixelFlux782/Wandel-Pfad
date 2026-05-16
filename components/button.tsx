import * as React from 'react';
import { cn } from '@/lib/utils';

const variants = {
  default: 'bg-text text-[#F8F1E6] shadow-none hover:bg-[#2B2722] focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  secondary: 'border border-text/18 bg-transparent text-text hover:border-text/38 hover:bg-text/[0.035]',
  subtle: 'border border-transparent bg-transparent text-text/78 hover:bg-text/[0.035] hover:text-text'
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
          'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium tracking-[0.04em] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60',
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
