interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100',
    outline: 'border border-gray-300 text-gray-900 dark:border-gray-600 dark:text-gray-100',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}