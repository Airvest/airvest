import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseStyles = 'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-white text-black border-2 border-white hover:bg-transparent hover:text-white',
    secondary: 'bg-black text-white border-2 border-black hover:bg-transparent hover:text-black',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black',
    text: 'bg-transparent text-white hover:underline',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-1.5 px-3 rounded',
    md: 'text-base py-2 px-4 rounded-md',
    lg: 'text-lg py-3 px-6 rounded-md',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;