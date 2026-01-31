import React from 'react';
import { motion } from 'framer-motion';
import { Stamp, TrendingUp, Gavel, Wallet, Search, SlidersHorizontal } from 'lucide-react';
import { Card, StatCard } from '../components/Card';
import { IconButton } from '../components/IconButton';
import { stats, collections } from '../data/mockData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Dashboard: React.FC = () => {
  return (
    <div className="pb-24 px-6 max-w-2xl mx-auto">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-6 mb-8"
      >
        <Card className="p-6 bg-gradient-to-br from-accent-50 to-primary-50 border-2 border-accent-200">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0"
            >
              ✨
            </motion.div>
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold text-text-primary mb-1"
              >
                Welcome back Moses!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-accent-600 font-medium"
              >
                Let's see what others have in their collection
              </motion.p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-4 mb-8"
      >
        <motion.div variants={item}>
          <StatCard
            icon={<Stamp size={24} />}
            value={stats.totalStamps}
            label="Total Stamps"
            change={`+${stats.monthlyChange.stamps} this month`}
            changeType="positive"
            trend={<TrendingUp size={20} className="text-success" />}
          />
        </motion.div>

        <motion.div variants={item}>
          <StatCard
            icon={<TrendingUp size={24} />}
            value={`$${stats.totalValue.toLocaleString()}`}
            label="Collection Value"
            change={`+$${stats.monthlyChange.value.toLocaleString()}`}
            changeType="positive"
            trend={<TrendingUp size={20} className="text-success" />}
          />
        </motion.div>

        <motion.div variants={item}>
          <StatCard
            icon={<Gavel size={24} />}
            value={stats.activeBids}
            label="Active Bids"
            change="2 ending soon"
            changeType="positive"
          />
        </motion.div>

        <motion.div variants={item}>
          <StatCard
            icon={<Wallet size={24} />}
            value={`$${stats.budgetLeft}`}
            label="Budget Left"
            change={`of $2,000`}
            changeType="positive"
          />
        </motion.div>
      </motion.div>

      {/* My Collections Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-between mb-4"
      >
        <h3 className="text-2xl font-bold text-text-primary">My Collections</h3>
        <div className="flex gap-2">
          <IconButton
            icon={<SlidersHorizontal size={20} />}
            label="Filter"
            className="text-text-secondary hover:text-primary-600"
          />
          <IconButton
            icon={<Search size={20} />}
            label="Search"
            className="text-text-secondary hover:text-primary-600"
          />
        </div>
      </motion.div>

      {/* Collections Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-4"
      >
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            variants={item}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Card interactive className="overflow-hidden">
              <div className="relative aspect-square">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100"
                >
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    {index % 3 === 0 ? '👑' : index % 3 === 1 ? '🦅' : '🏛️'}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3"
                >
                  <span className="text-white text-sm font-medium">
                    View Collection
                  </span>
                </motion.div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-text-primary mb-1 truncate">
                  {collection.name}
                </h4>
                <p className="text-sm text-accent-600 font-medium mb-2">
                  {collection.stampCount} stamps
                </p>
                <p className="text-lg font-bold text-text-primary">
                  ${collection.totalValue.toLocaleString()}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};