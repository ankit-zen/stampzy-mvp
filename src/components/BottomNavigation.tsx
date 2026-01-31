import React from 'react';
import { motion } from 'framer-motion';
import { Home, Leaf, Plus, Wallet, Gavel } from 'lucide-react';
import { cn } from '../utils/cn';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', icon: <Home size={24} />, label: 'Home' },
  { id: 'feed', icon: <Leaf size={24} />, label: 'Feed' },
  { id: 'add', icon: <Plus size={28} />, label: 'Add' },
  { id: 'budget', icon: <Wallet size={24} />, label: 'Budget' },
  { id: 'auctions', icon: <Gavel size={24} />, label: 'Auctions' },
];

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 bg-background-card border-t border-primary-100 safe-area-bottom z-50"
    >
      <div className="flex items-center justify-around px-4 py-3 max-w-2xl mx-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const isCenter = item.id === 'add';

          return (
            <motion.button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                'flex flex-col items-center gap-1 relative transition-colors duration-200',
                {
                  'text-primary-600': isActive && !isCenter,
                  'text-text-tertiary': !isActive && !isCenter,
                }
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              {isCenter ? (
                <motion.div
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 -mt-6 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg"
                >
                  {item.icon}
                </motion.div>
              ) : (
                <>
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      y: isActive ? -2 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.span
                    className="text-xs font-medium"
                    animate={{
                      opacity: isActive ? 1 : 0.7,
                      fontWeight: isActive ? 600 : 500,
                    }}
                  >
                    {item.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </>
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};