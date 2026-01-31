import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  interactive = false,
  onClick,
  hover = true,
}) => {
  const Component = interactive || onClick ? motion.div : 'div';
  
  const motionProps = interactive || onClick ? {
    whileHover: hover ? {
      scale: 1.02,
      y: -4,
    } : undefined,
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  } : {};

  return (
    <Component
      className={cn(
        'card',
        {
          'card-interactive': interactive || onClick,
        },
        className
      )}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </Component>
  );
};

export const StatCard: React.FC<{
  icon: React.ReactNode;
  value: string | number;
  label: string;
  change?: string;
  changeType?: 'positive' | 'negative';
  trend?: React.ReactNode;
}> = ({ icon, value, label, change, changeType, trend }) => {
  return (
    <Card className="stat-card">
      <div className="flex items-start justify-between mb-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
          className="p-3 bg-primary-50 rounded-xl text-primary-600"
        >
          {icon}
        </motion.div>
        {trend && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {trend}
          </motion.div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="stat-value">{value}</div>
        <div className="stat-label mt-1">{label}</div>
        {change && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={cn('stat-change mt-2', {
              'stat-change-positive': changeType === 'positive',
              'stat-change-negative': changeType === 'negative',
            })}
          >
            {change}
          </motion.div>
        )}
      </motion.div>
    </Card>
  );
};