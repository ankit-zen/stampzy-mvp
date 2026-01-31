# Design Assets & Icons Reference

This document outlines the images and icons used throughout the Stampzy app based on the Figma designs.

## 🎨 Icon System

### Navigation Icons (Bottom Bar)
- **Home**: House icon (🏠)
- **Feed**: Leaf icon (🍃) 
- **Add**: Plus icon in circular FAB (➕)
- **Budget**: Wallet icon (💰)
- **Auctions**: Gavel/Hammer icon (🔨)

### Header Icons
- **Bookmark**: Bookmark outline icon
- **Notifications**: Bell icon
- **Profile**: User circle icon

### Feature Icons

#### Dashboard Stats Cards
- **Total Stamps**: Stamp icon (📮)
- **Collection Value**: Trending up arrow (📈)
- **Active Bids**: Gavel icon (🔨)
- **Budget Left**: Wallet icon (💰)

#### Budget Page
- **Overview Tab**: Circle/Donut icon
- **My Purchases Tab**: Shopping bag icon
- **Full Report**: Document/File icon
- **Auction Purchases**: Gavel icon (🔨)
- **Manual Entries**: Tag icon (🏷️)

#### Auctions Page
- **eBay Logo**: Blue eBay branding
- **Heritage**: Amber/Gold dot indicator
- **Delcampe**: Rose/Pink dot indicator  
- **HipStamp**: Green dot indicator
- **External Link**: Arrow pointing out icon
- **Clock**: Time/Clock icon for countdown
- **Edit**: Pencil/Edit icon

#### Social Feed
- **Like**: Thumbs up icon (👍)
- **Dislike**: Thumbs down icon (👎)
- **Comment**: Message circle icon (💬)
- **Bookmark**: Bookmark icon (🔖)
- **More Options**: Three vertical dots (⋮)

#### Create Collection Form
- **Upload**: Upload/Cloud icon (☁️)
- **Back Arrow**: Left arrow (←)
- **Next Arrow**: Right arrow (→)
- **Checkmark**: Check icon (✓)

## 📸 Image Placeholders

### Stamp Images
Currently using emoji placeholders that should be replaced with actual stamp images:
- 📮 (Postage stamp emoji) - Generic stamp placeholder
- 👑 (Crown) - Victorian Era collection
- 🦅 (Eagle) - US Commemorative collection
- 🏛️ (Classical building) - European/Historical collections
- ✨ (Sparkles) - Welcome banner decoration

### Collection Thumbnails
Each collection card should display:
- High-quality stamp photograph
- Aspect ratio: 1:1 (square)
- Recommended size: 400x400px minimum
- Format: JPG or WebP for optimization

### Post Images
Social feed posts should show:
- Stamp photographs or collection previews
- Aspect ratio: 1:1 (square)
- Recommended size: 600x600px
- Format: JPG or WebP

### Auction Item Images
Auction listings should include:
- Clear stamp photograph
- Size: 200x200px minimum
- Format: JPG or WebP
- Multiple angles if available

## 🎨 Color-Coded Elements

### Platform Indicators
- **eBay**: Blue (#1E90FF)
- **Heritage**: Amber (#F59E0B)
- **Delcampe**: Rose (#F43F5E)
- **HipStamp**: Green (#10B981)

### Status Badges
- **Ending Soon**: Red/Error color (#C84A17)
- **Active**: Primary brown (#6B3410)
- **Scheduled**: Blue (#3B82F6)

### Transaction Types
- **Auction**: Orange/Accent (#C85A17)
- **Manual Entry**: Primary brown (#6B3410)

## 📐 Image Guidelines

### Recommended Specifications
1. **Stamp Photos**
   - Resolution: 72-150 DPI for web
   - Size: 400x400px to 800x800px
   - Format: WebP (preferred) or JPG
   - Compression: 80-90% quality

2. **Collection Covers**
   - Resolution: 72 DPI
   - Size: 600x600px
   - Format: WebP or JPG
   - Should represent the collection theme

3. **User Avatars**
   - Size: 48x48px to 96x96px
   - Format: WebP or JPG
   - Circular crop applied via CSS

## 🔄 Implementation Notes

### Current Implementation
- Using emoji placeholders (📮, 👑, 🦅, 🏛️, ✨)
- Gradient backgrounds for visual interest
- Lucide React icons for UI elements

### Recommended Updates
1. Replace emoji placeholders with actual stamp photographs
2. Add image optimization pipeline (sharp, imagemin)
3. Implement lazy loading for images
4. Add blur-up placeholder technique
5. Use WebP format with JPG fallback

## 🎯 Icon Library

Currently using **Lucide React** for all UI icons:
- Consistent stroke width (2px)
- Size variants: 16px, 20px, 24px
- Color: Inherits from parent or theme colors

### Key Icons Used
```typescript
import {
  Home, Leaf, Plus, Wallet, Gavel,
  Bookmark, Bell, User,
  Stamp, TrendingUp, Clock,
  ThumbsUp, ThumbsDown, MessageCircle,
  Upload, ArrowLeft, ArrowRight,
  ExternalLink, Edit, Search,
  SlidersHorizontal, FileText, Tag,
  Calendar, AlertCircle, DollarSign
} from 'lucide-react';
```

## 📱 Responsive Images

All images should include:
- `srcset` for different screen densities (1x, 2x, 3x)
- `sizes` attribute for responsive loading
- `alt` text for accessibility
- `loading="lazy"` for performance

Example:
```html
<img
  src="stamp-400.webp"
  srcset="stamp-400.webp 1x, stamp-800.webp 2x"
  alt="Penny Black 1840 stamp"
  loading="lazy"
  className="w-full h-full object-cover"
/>