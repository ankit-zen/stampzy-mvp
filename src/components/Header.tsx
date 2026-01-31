import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Bell, User } from 'lucide-react';
import { IconButton } from './IconButton';

interface HeaderProps {
  title?: string;
  showActions?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showActions = true,
}) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="sticky top-0 z-40 bg-background-card border-b border-primary-100"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg"
          >
            S
          </motion.div>
          <span className="text-2xl font-bold text-primary-600">
            Stampzy
          </span>
        </motion.div>

        {showActions && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <IconButton
              icon={<Bookmark size={20} />}
              label="Bookmarks"
              className="text-text-secondary hover:text-primary-600"
            />
            <IconButton
              icon={<Bell size={20} />}
              label="Notifications"
              className="text-text-secondary hover:text-primary-600"
            />
            <IconButton
              icon={<User size={20} />}
              label="Profile"
              className="text-text-secondary hover:text-primary-600"
            />
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};