import React from 'react';
import { cn } from '../utils/cn';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';
  as?: keyof JSX.IntrinsicElements;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant, as, className, ...props }, ref) => {
    const Component = as || {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      body: 'p',
      small: 'small'
    }[variant];

    return React.createElement(Component, {
      ref,
      className: cn(
        {
          'text-4xl font-bold': variant === 'h1',
          'text-3xl font-bold': variant === 'h2',
          'text-2xl font-bold': variant === 'h3',
          'text-xl font-bold': variant === 'h4',
          'text-base': variant === 'body',
          'text-sm text-gray-600': variant === 'small',
        },
        className
      ),
      ...props
    });
  }
);