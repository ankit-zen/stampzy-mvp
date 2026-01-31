import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import { BottomNavigation } from './components/BottomNavigation';
import { Dashboard } from './pages/Dashboard';
import { Feed } from './pages/Feed';
import { Budget } from './pages/Budget';
import { Auctions } from './pages/Auctions';
import { CreateCollection } from './pages/CreateCollection';
import { ScheduleAutoBid } from './pages/ScheduleAutoBid';

type Page = 'home' | 'feed' | 'add' | 'budget' | 'auctions' | 'schedule-autobid';

const pageVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.3,
};

function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Dashboard />;
      case 'feed':
        return <Feed />;
      case 'budget':
        return <Budget />;
      case 'auctions':
        return <Auctions onNavigate={(page) => setActivePage(page as Page)} />;
      case 'add':
        return <CreateCollection />;
      case 'schedule-autobid':
        return <ScheduleAutoBid onBack={() => setActivePage('auctions')} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={activePage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="min-h-screen"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      <BottomNavigation
        activeTab={activePage}
        onTabChange={(tab) => setActivePage(tab as Page)}
      />
    </div>
  );
}

export default App;
