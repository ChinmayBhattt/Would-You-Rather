import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  isSelected = false, 
  children, 
  className = '', 
  disabled,
  ...props 
}) => {
  return (
    <button
      className={`
        relative overflow-hidden px-8 py-6 rounded-xl font-medium text-lg transition-all duration-300
        ${isSelected 
          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-xl scale-105 animate-pulse' 
          : 'bg-white text-gray-800 hover:bg-gray-50 shadow-lg hover:shadow-xl'
        }
        ${disabled 
          ? 'cursor-not-allowed opacity-75' 
          : 'transform hover:scale-[1.02] active:scale-[0.98] hover:-translate-y-1'
        }
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      <div className="relative z-10">
        {children}
        {isSelected && (
          <div className="absolute -top-3 -right-3 bg-white text-primary text-xs px-3 py-1 rounded-full shadow-lg animate-bounce font-bold">
            Selected!
          </div>
        )}
      </div>
      {isSelected && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse" />
      )}
    </button>
  );
};

export default Button; 