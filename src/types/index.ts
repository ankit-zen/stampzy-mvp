export interface User {
  id: string;
  name: string;
  username: string;
  avatar?: string;
}

export interface Stamp {
  id: string;
  title: string;
  country: string;
  year: number;
  imageUrl: string;
  value: number;
  condition: 'Mint' | 'Used' | 'Mint Never Hinged';
  catalogueNumber?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  stamps: Stamp[];
  totalValue: number;
  imageUrl: string;
  stampCount: number;
}

export interface Post {
  id: string;
  user: User;
  stamp: Stamp;
  likes: number;
  dislikes: number;
  comments: number;
  timestamp: string;
  isLiked?: boolean;
  isDisliked?: boolean;
  isSaved?: boolean;
}

export interface Auction {
  id: string;
  stamp: Stamp;
  currentBid: number;
  bidCount: number;
  timeRemaining: string;
  platform: 'eBay' | 'Heritage' | 'Delcampe' | 'HipStamp';
  status: 'active' | 'ending' | 'scheduled';
  scheduledDate?: string;
}

export interface Purchase {
  id: string;
  title: string;
  amount: number;
  date: string;
  type: 'auction' | 'manual';
  platform?: string;
  icon: 'auction' | 'tag';
}

export interface BudgetData {
  monthly: number;
  spent: number;
  remaining: number;
  avgPerDay: number;
  categories: {
    auctions: number;
    manual: number;
    tax: number;
    shipping: number;
  };
}

export interface Stats {
  totalStamps: number;
  totalValue: number;
  activeBids: number;
  budgetLeft: number;
  monthlyChange: {
    stamps: number;
    value: number;
    bids: number;
  };
}

export type TabValue = 'daily' | 'weekly' | 'monthly' | 'yearly';
export type BudgetTab = 'overview' | 'purchases';
export type AuctionTab = 'browse' | 'scheduled' | 'selling';