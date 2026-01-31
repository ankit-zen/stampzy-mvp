# 🎨 Stampzy - Premium Stamp Collection App

A fully functional, production-ready stamp collecting application with polished interactions and comprehensive animations built with React, TypeScript, Framer Motion, and Tailwind CSS.

## ✨ Features

### 🏠 Dashboard/Home
- **Welcome Banner** with animated greeting
- **Stats Cards** displaying:
  - Total Stamps with monthly growth
  - Collection Value with trend indicators
  - Active Bids count
  - Budget remaining
- **Collections Grid** with hover effects and smooth transitions
- **Interactive Cards** with scale and elevation animations

### 📱 Social Feed
- **Post Cards** with user profiles
- **Interactive Actions**:
  - Like/Unlike with scale animations
  - Dislike with visual feedback
  - Comment counter
  - Save/Bookmark with fill animation
- **Smooth Scrolling** with staggered card animations

### 💰 Budget Tracking
- **Dual Tab System**:
  - Overview with spending analytics
  - My Purchases transaction list
- **Time Frame Selection**: Daily, Weekly, Monthly, Yearly
- **Animated Progress Bars** with smooth transitions
- **Spending Categories** with visual breakdowns
- **Recent Activity** feed

### 🔨 Auctions
- **eBay Integration** card with external link
- **Multiple Auction Sites**: Heritage, Delcampe, HipStamp
- **Three Tab Views**:
  - Browse active auctions
  - Scheduled bids with countdown
  - Selling items
- **Auction Cards** with:
  - Current bid display
  - Time remaining indicators
  - Auto-bid and Bid Now actions
  - Status badges (Ending, Active)

### ➕ Create Collection (Multi-Step Form)
- **3-Step Progress Indicator** with animations
- **Step 1: Collection Info**
  - Title and description
  - Country of origin selection
  - Catalogue details
  - Certification options
- **Step 2: Purchase Details**
  - Receipt upload option
  - Purchase price and valuation
  - Date and seller information
  - Payment method
- **Step 3: Upload Images**
  - Multiple image upload (up to 10)
  - Image preview grid
  - Drag and drop support

## 🎭 Animation System

### Micro-Interactions
- **Button Hover**: Scale 1.02-1.05 with 150-200ms duration
- **Button Tap**: Scale 0.95-0.98 for tactile feedback
- **Card Hover**: Scale 1.02-1.03 with -4px Y translation
- **Icon Rotation**: 360° on hover (600ms duration)
- **Ripple Effects**: Material design ripple on buttons

### Page Transitions
- **Fade & Slide**: Smooth page changes with 300ms duration
- **Staggered Children**: 100-150ms delay between items
- **Layout Animations**: Shared element transitions

### Component Animations
- **Stats Cards**: Fade-in with Y translation (20px)
- **Progress Bars**: Width animation with 500-1000ms easing
- **Tabs**: Sliding indicator with spring physics
- **Forms**: Step transitions with slide animations
- **Lists**: Staggered fade-in for items

### Timing & Easing
- **Fast Interactions**: 150-200ms (hovers, taps)
- **Medium Transitions**: 250-300ms (page changes)
- **Slow Animations**: 500-1000ms (progress bars, reveals)
- **Easing Functions**: 
  - `ease-in-out` for smooth transitions
  - `cubic-bezier(0.4, 0, 0.2, 1)` for custom curves
  - Spring physics for natural motion

## 🎨 Design System

### Color Palette
```css
Primary Brown: #6B3410 (buttons, active states)
Accent Orange: #C85A17 (highlights, prices)
Background Beige: #F5F1ED (main background)
Success Green: #4A7C59 (positive values)
Error Red: #C84A17 (negative values)
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headers**: 24-32px, Bold (700-800)
- **Body**: 14-16px, Regular (400-500)
- **Small**: 12-14px, Medium (500)

### Spacing
- **Card Padding**: 16-24px
- **Grid Gap**: 16px
- **Section Margin**: 24-32px

### Shadows
- **Card**: `0 2px 8px rgba(107, 52, 16, 0.08)`
- **Card Hover**: `0 4px 16px rgba(107, 52, 16, 0.12)`
- **Button**: `0 2px 4px rgba(107, 52, 16, 0.1)`

## 🎯 Interactive Elements

### Buttons
- **Primary**: Brown background with white text
- **Secondary**: White background with brown border
- **Ghost**: Transparent with brown text
- **States**: Default, Hover, Active, Disabled, Loading

### Cards
- **Default**: White background with subtle shadow
- **Interactive**: Hover scale and elevation
- **Variants**: Stat cards, Post cards, Auction cards

### Inputs
- **Text Fields**: Rounded corners with focus ring
- **Dropdowns**: Custom styled with arrow indicator
- **Checkboxes**: Animated check mark
- **States**: Default, Focus, Error, Disabled

### Navigation
- **Bottom Nav**: Fixed with 5 tabs
- **Center FAB**: Elevated add button with rotation
- **Active Indicator**: Sliding dot animation
- **Tab Icons**: Scale and color transitions

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm preview
```

## 📦 Tech Stack

- **React 18.3** - UI library
- **TypeScript 5.5** - Type safety
- **Vite 5.4** - Build tool
- **Tailwind CSS 3.4** - Styling
- **Framer Motion 11.x** - Animations
- **Lucide React** - Icons

## 🎨 Component Library

### Core Components
- `Button` - Multi-variant with ripple effect
- `Card` - Interactive with hover states
- `IconButton` - Circular with scale animation
- `Input` - Text fields with validation
- `Select` - Dropdown with custom styling
- `Tabs` - Animated tab switcher
- `Skeleton` - Loading placeholders

### Layout Components
- `Header` - Top navigation with logo
- `BottomNavigation` - Mobile-first navigation
- `StatCard` - Dashboard statistics

### Page Components
- `Dashboard` - Home screen
- `Feed` - Social feed
- `Budget` - Budget tracking
- `Auctions` - Auction listings
- `CreateCollection` - Multi-step form

## 🎭 Animation Patterns

### Entrance Animations
```typescript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}
```

### Hover Effects
```typescript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
transition={{ duration: 0.15 }}
```

### Staggered Lists
```typescript
variants={{
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}}
```

## 📱 Responsive Design

- **Mobile First**: Optimized for 375px+
- **Tablet**: Enhanced layout at 768px+
- **Desktop**: Full experience at 1024px+
- **Max Width**: 896px (2xl) for optimal reading

## ♿ Accessibility

- **ARIA Labels**: All interactive elements
- **Keyboard Navigation**: Full support
- **Focus Indicators**: Visible focus rings
- **Color Contrast**: WCAG AA compliant
- **Screen Reader**: Semantic HTML

## 🎯 Performance

- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: Automatic resizing
- **Animation Performance**: GPU-accelerated
- **Bundle Size**: Optimized with tree-shaking

## 📄 License

MIT License - feel free to use this project for learning or production!

## 🙏 Credits

Built with ❤️ using modern web technologies and best practices.