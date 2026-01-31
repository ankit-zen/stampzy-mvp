import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, Gavel, Edit } from 'lucide-react';
import { Card } from '../components/Card';
import { Tabs } from '../components/Tabs';
import { Button } from '../components/Button';
import { auctions } from '../data/mockData';
import { AuctionTab } from '../types';
import { cn } from '../utils/cn';

interface AuctionsProps {
  onNavigate?: (page: string) => void;
}

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

export const Auctions: React.FC<AuctionsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<AuctionTab>('browse');

  return (
    <div className="pb-24 px-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 mb-6"
      >
        <h1 className="text-3xl font-bold text-text-primary mb-2">Auctions</h1>
        <p className="text-text-secondary">Buy, sell, and bid on rare stamps</p>
      </motion.div>

      {/* eBay Integration Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-primary-50 border-2 border-blue-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏷️</span>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">
                  Browse eBay Auctions
                </h3>
                <p className="text-sm text-text-secondary">
                  Discover rare finds and bid with confidence
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-600"
            >
              <ExternalLink size={24} />
            </motion.button>
          </div>
        </Card>
      </motion.div>

      {/* More Auction Sites */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="text-text-secondary">🔗</div>
          <h3 className="font-medium text-text-secondary">More Auction Sites</h3>
        </div>
        <div className="flex gap-3">
          {[
            { name: 'Heritage', color: 'bg-amber-100 text-amber-700' },
            { name: 'Delcampe', color: 'bg-rose-100 text-rose-700' },
            { name: 'HipStamp', color: 'bg-green-100 text-green-700' },
          ].map((site, index) => (
            <motion.button
              key={site.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2',
                site.color
              )}
            >
              <span>●</span>
              {site.name}
              <ExternalLink size={14} />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6"
      >
        <Tabs
          tabs={[
            { value: 'browse', label: 'Browse' },
            { value: 'scheduled', label: 'Scheduled', badge: 1 },
            { value: 'selling', label: 'Selling' },
          ]}
          activeTab={activeTab}
          onChange={(value) => setActiveTab(value as AuctionTab)}
        />
      </motion.div>

      {/* Auction Listings */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {auctions.map((auction, index) => (
          <motion.div key={auction.id} variants={item}>
            <Card className="overflow-hidden" interactive>
              <div className="flex gap-4 p-4">
                {/* Stamp Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl flex items-center justify-center text-4xl"
                >
                  📮
                </motion.div>

                {/* Auction Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-text-primary truncate mb-1">
                        {auction.stamp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-text-tertiary mb-2">
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          eBay
                        </span>
                        <ExternalLink size={12} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <div className="text-xs text-text-tertiary mb-1">Current</div>
                      <div className="text-accent-600 font-bold text-lg">
                        ${auction.currentBid.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-text-tertiary mb-1">Bids</div>
                      <div className="text-text-primary font-bold text-lg">
                        {auction.bidCount}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
                    <Clock size={16} />
                    <span className="font-medium">{auction.timeRemaining}</span>
                  </div>

                  {auction.status === 'ending' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="px-3 py-1 bg-error-light text-error rounded-lg text-xs font-medium inline-block mb-3"
                    >
                      Ending
                    </motion.div>
                  )}

                  {activeTab === 'scheduled' && auction.scheduledDate && (
                    <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
                      <Gavel size={16} />
                      <span>Scheduled: {auction.scheduledDate}</span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {activeTab === 'selling' ? (
                      <Button
                        size="sm"
                        variant="primary"
                        className="flex-1"
                        leftIcon={<ExternalLink size={16} />}
                        onClick={() => window.open('https://www.ebay.com', '_blank')}
                      >
                        View on eBay
                      </Button>
                    ) : activeTab === 'scheduled' ? (
                      <Button
                        size="sm"
                        variant="primary"
                        className="flex-1"
                        leftIcon={<Edit size={16} />}
                      >
                        Edit Schedule
                      </Button>
                    ) : (
                      <>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="flex-1"
                          leftIcon={<Clock size={16} />}
                          onClick={() => onNavigate?.('schedule-autobid')}
                        >
                          Auto-bid
                        </Button>
                        <Button
                          size="sm"
                          variant="primary"
                          className="flex-1"
                          leftIcon={<Gavel size={16} />}
                        >
                          Bid Now
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};