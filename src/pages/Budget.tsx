import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Gavel, Tag, TrendingUp } from 'lucide-react';
import { Card } from '../components/Card';
import { Tabs } from '../components/Tabs';
import { budgetData, purchases } from '../data/mockData';
import { BudgetTab, TabValue } from '../types';

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

export const Budget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<BudgetTab>('overview');
  const [timeFrame, setTimeFrame] = useState<TabValue>('monthly');

  const percentUsed = (budgetData.spent / budgetData.monthly) * 100;

  return (
    <div className="pb-24 px-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 mb-6"
      >
        <h1 className="text-3xl font-bold text-text-primary mb-2">Budget</h1>
        <p className="text-text-secondary">Track expenses & purchases</p>
      </motion.div>

      {/* Main Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Tabs
          tabs={[
            { value: 'overview', label: 'Overview' },
            { value: 'purchases', label: 'My Purchases' },
          ]}
          activeTab={activeTab}
          onChange={(value) => setActiveTab(value as BudgetTab)}
        />
      </motion.div>

      {activeTab === 'overview' ? (
        <motion.div
          key="overview"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          {/* Time Frame Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <Tabs
              tabs={[
                { value: 'daily', label: 'Daily' },
                { value: 'weekly', label: 'Weekly' },
                { value: 'monthly', label: 'Monthly' },
                { value: 'yearly', label: 'Yearly' },
              ]}
              activeTab={timeFrame}
              onChange={(value) => setTimeFrame(value as TabValue)}
            />
          </motion.div>

          {/* Budget Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-text-primary">
                  <div className="w-6 h-6 bg-primary-600 rounded-full" />
                  <span className="font-medium">Monthly Goal</span>
                </div>
                <span className="text-text-secondary font-medium">
                  {percentUsed.toFixed(0)}% used
                </span>
              </div>

              <div className="mb-4">
                <div className="text-4xl font-bold text-text-primary mb-2">
                  ${budgetData.spent}
                </div>
                <div className="text-text-secondary">
                  of ${budgetData.monthly.toLocaleString()}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="progress-bar mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentUsed}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="progress-fill"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-success font-bold text-xl">
                    ${budgetData.remaining}
                  </div>
                  <div className="text-sm text-text-secondary">Remaining</div>
                </div>
                <div>
                  <div className="text-text-primary font-bold text-xl">
                    ${budgetData.avgPerDay}
                  </div>
                  <div className="text-sm text-text-secondary">Avg/day</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Spending Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-text-primary">
                Spending Analysis
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-accent-600 font-medium text-sm"
              >
                <FileText size={16} />
                Full Report
              </motion.button>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              {Object.entries(budgetData.categories).map(([key, value], index) => {
                const total = Object.values(budgetData.categories).reduce((a, b) => a + b, 0);
                const percentage = (value / total) * 100;
                const colors = ['bg-primary-600', 'bg-primary-700', 'bg-error', 'bg-primary-500'];

                return (
                  <motion.div key={key} variants={item}>
                    <Card className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-text-primary capitalize">
                          {key}
                        </span>
                        <span className="font-bold text-text-primary">
                          ${value.toLocaleString()}
                        </span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className={`h-full rounded-full ${colors[index]}`}
                        />
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-text-primary">
                Recent Activity
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary-600 font-medium text-sm"
              >
                View all
              </motion.button>
            </div>

            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-error-light rounded-xl flex items-center justify-center">
                  <TrendingUp size={24} className="text-error" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-text-primary">
                    Penny Black 1840
                  </div>
                  <div className="text-sm text-text-tertiary">Today</div>
                </div>
                <div className="text-error font-bold">- $450</div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="purchases"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {purchases.map((purchase, index) => (
              <motion.div key={purchase.id} variants={item}>
                <Card className="p-4" interactive>
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        purchase.icon === 'auction'
                          ? 'bg-accent-100 text-accent-600'
                          : 'bg-primary-100 text-primary-600'
                      }`}
                    >
                      {purchase.icon === 'auction' ? (
                        <Gavel size={24} />
                      ) : (
                        <Tag size={24} />
                      )}
                    </motion.div>
                    <div className="flex-1">
                      <div className="font-bold text-text-primary mb-1">
                        {purchase.title}
                      </div>
                      <div className="text-sm text-text-tertiary">
                        {purchase.date} • {purchase.platform}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-accent-600 font-bold text-lg">
                        ${Math.abs(purchase.amount).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};