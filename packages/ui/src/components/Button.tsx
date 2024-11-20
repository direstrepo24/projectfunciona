import React from 'react';
import { cn } from '../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'neu-button inline-flex items-center justify-center font-medium transition-colors',
          {
            'bg-blue-500 text-white hover:bg-blue-600': variant === 'primary',
            'bg-gray-500 text-white hover:bg-gray-600': variant === 'secondary',
            'bg-green-500 text-white hover:bg-green-600': variant === 'success',
            'bg-red-500 text-white hover:bg-red-600': variant === 'danger',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);