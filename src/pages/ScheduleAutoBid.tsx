import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, DollarSign, Calendar, AlertCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { Input, Select } from '../components/Input';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';

export const ScheduleAutoBid: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    maxBid: '',
    bidIncrement: '5.00',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    strategy: 'aggressive',
    notifications: true,
  });

  const handleSubmit = () => {
    console.log('Auto-bid scheduled:', formData);
    onBack?.();
  };

  return (
    <div className="pb-24 px-6 max-w-2xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 mb-6 flex items-center gap-4"
      >
        <IconButton
          icon={<ArrowLeft size={24} />}
          label="Back"
          onClick={onBack || (() => window.history.back())}
        />
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Schedule Auto-Bid</h1>
          <p className="text-sm text-text-secondary">Set up automatic bidding parameters</p>
        </div>
      </motion.div>

      {/* Auction Item Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Card className="p-4">
          <div className="flex gap-4">
            <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl flex items-center justify-center text-4xl">
              📮
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-text-primary mb-1">Inverted Jenny 1918</h3>
              <div className="flex items-center gap-2 text-sm text-text-tertiary mb-2">
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  eBay
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-xs text-text-tertiary">Current Bid</div>
                  <div className="text-accent-600 font-bold">$12,000.45</div>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary">Time Left</div>
                  <div className="text-text-primary font-medium">1d 4h</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Bidding Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <Card className="p-6">
          <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <DollarSign size={20} className="text-accent-600" />
            Bidding Parameters
          </h3>

          <div className="space-y-4">
            <Input
              label="Maximum Bid Amount"
              type="number"
              value={formData.maxBid}
              onChange={(e) => setFormData({ ...formData, maxBid: e.target.value })}
              placeholder="15000.00"
              leftIcon={<span className="text-text-tertiary">$</span>}
            />

            <Input
              label="Bid Increment"
              type="number"
              value={formData.bidIncrement}
              onChange={(e) => setFormData({ ...formData, bidIncrement: e.target.value })}
              placeholder="5.00"
              leftIcon={<span className="text-text-tertiary">$</span>}
            />

            <Select
              label="Bidding Strategy"
              value={formData.strategy}
              onChange={(e) => setFormData({ ...formData, strategy: e.target.value })}
            >
              <option value="conservative">Conservative - Bid slowly</option>
              <option value="moderate">Moderate - Balanced approach</option>
              <option value="aggressive">Aggressive - Bid quickly</option>
            </Select>
          </div>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 p-4 bg-blue-50 rounded-xl flex gap-3"
          >
            <AlertCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-medium mb-1">How Auto-Bid Works</p>
              <p className="text-blue-700">
                The system will automatically place bids on your behalf up to your maximum amount,
                using your chosen strategy to optimize winning chances.
              </p>
            </div>
          </motion.div>
        </Card>
      </motion.div>

      {/* Schedule Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <Card className="p-6">
          <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <Clock size={20} className="text-accent-600" />
            Schedule
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Start Date"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                leftIcon={<Calendar size={16} />}
              />
              <Input
                label="Start Time"
                type="time"
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                leftIcon={<Clock size={16} />}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="End Date"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                leftIcon={<Calendar size={16} />}
              />
              <Input
                label="End Time"
                type="time"
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                leftIcon={<Clock size={16} />}
              />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6"
      >
        <Card className="p-6">
          <label className="flex items-center justify-between cursor-pointer group">
            <div>
              <h3 className="font-bold text-text-primary mb-1">Enable Notifications</h3>
              <p className="text-sm text-text-secondary">
                Get notified when bids are placed or when you're outbid
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <input
                type="checkbox"
                checked={formData.notifications}
                onChange={(e) =>
                  setFormData({ ...formData, notifications: e.target.checked })
                }
                className="w-12 h-6 rounded-full appearance-none bg-primary-200 checked:bg-primary-600 transition-colors cursor-pointer"
              />
              <motion.div
                animate={{
                  x: formData.notifications ? 24 : 2,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 left-0 w-4 h-4 bg-white rounded-full shadow-md pointer-events-none"
              />
            </motion.div>
          </label>
        </Card>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-6"
      >
        <Card className="p-6 bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200">
          <h3 className="font-bold text-text-primary mb-4">Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">Maximum Bid:</span>
              <span className="font-bold text-text-primary">
                ${formData.maxBid || '0.00'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Bid Increment:</span>
              <span className="font-medium text-text-primary">${formData.bidIncrement}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Strategy:</span>
              <span className="font-medium text-text-primary capitalize">
                {formData.strategy}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Notifications:</span>
              <span className="font-medium text-text-primary">
                {formData.notifications ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4"
      >
        <Button
          variant="secondary"
          size="lg"
          onClick={onBack || (() => window.history.back())}
          className="flex-1"
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={handleSubmit}
          className="flex-1"
          leftIcon={<Clock size={20} />}
        >
          Schedule Auto-Bid
        </Button>
      </motion.div>
    </div>
  );
};