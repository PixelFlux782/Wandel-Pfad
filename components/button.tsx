import * as React from 'react';
import { cn } from '@/lib/utils';

const variants = {
  default: 'border border-text/20 bg-text/[0.88] text-[#F8F1E6] shadow-none hover:border-text/32 hover:bg-text/[0.82] focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  secondary: 'border border-text/14 bg-transparent text-text/76 hover:border-text/26 hover:bg-text/[0.018] hover:text-text',
  subtle: 'border border-transparent bg-transparent text-text/72 hover:text-text'
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
