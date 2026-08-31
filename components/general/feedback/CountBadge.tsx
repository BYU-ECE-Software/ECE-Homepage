import type { ReactNode } from 'react';

export type CountBadgeVariant = 'primary' | 'navy' | 'danger' | 'success' | 'warning' | 'neutral';
export type CountBadgeSize = 'sm' | 'md' | 'lg';

const VARIANT_CLASSES: Record<CountBadgeVariant, string> = {
  primary: 'bg-byu-royal text-white',
  navy: 'bg-byu-navy text-white',
  danger: 'bg-red-600 text-white',
  success: 'bg-green-600 text-white',
  warning: 'bg-yellow-500 text-white',
  neutral: 'bg-gray-200 text-gray-700',
};

const SIZE_CLASSES: Record<CountBadgeSize, string> = {
  sm: 'h-4 min-w-4 text-[9px] pb-px',
  md: 'h-5 min-w-5 text-[10px] pb-px',
  lg: 'h-6 min-w-6 text-xs',
};

type Props = {
  children: ReactNode;
  variant?: CountBadgeVariant;
  size?: CountBadgeSize;
  className?: string;
};

export default function CountBadge({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: Props) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full font-bold ring-2 ring-white ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
    >
      {children}
    </span>
  );
}
