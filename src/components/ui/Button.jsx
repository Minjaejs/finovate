import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 font-bold tracking-tight rounded-[14px] h-[52px] transition-all duration-300 disabled:opacity-50 select-none";
  
  const variants = {
    primary: "bg-brand-primary hover:bg-brand-primary-hover text-white shadow-[0_4px_12px_rgba(20,184,166,0.25)] hover:shadow-[0_12px_24px_rgba(20,184,166,0.35)] hover:-translate-y-0.5",
    secondary: "bg-brand-secondary hover:bg-brand-secondary-hover text-white shadow-[0_4px_12px_rgba(99,102,241,0.25)] hover:shadow-[0_12px_24px_rgba(99,102,241,0.35)] hover:-translate-y-0.5",
    outline: "border border-gray-200 text-brand-dark hover:bg-white hover:border-gray-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 bg-transparent",
    white: "bg-white text-brand-primary hover:bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_-5px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.97 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
