import React from 'react';
import { cn } from '../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'neu-card',
          {
            'hover:scale-[1.02] transition-transform cursor-pointer': variant === 'interactive',
          },
          className
        )}
        {...props}
      />
    );
  }
);