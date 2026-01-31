import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface Tab {
  value: string;
  label: string;
  badge?: number;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
}) => {
  return (
    <div className={cn('flex gap-2 bg-background-secondary p-1 rounded-xl', className)}>
      {tabs.map((tab) => (
        <motion.button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn('tab relative', {
            'tab-active': activeTab === tab.value,
          })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          {activeTab === tab.value && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary-100 rounded-xl -z-10"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
          {tab.badge !== undefined && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-2 px-2 py-0.5 bg-primary-600 text-white text-xs rounded-full"
            >
              {tab.badge}
            </motion.span>
          )}
        </motion.button>
      ))}
    </div>
  );
};