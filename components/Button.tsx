import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-2xl font-bold transition-all transform active:scale-95 shadow-[0_4px_0_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-1 focus:outline-none";
  
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-400 border-b-blue-700",
    secondary: "bg-yellow-400 text-yellow-900 hover:bg-yellow-300 border-b-yellow-600",
    danger: "bg-red-500 text-white hover:bg-red-400 border-b-red-700",
    ghost: "bg-transparent text-gray-600 shadow-none hover:bg-black/5"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-8 py-4 text-xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};