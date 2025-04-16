
import React from 'react';
import Navbar from '../navigation/Navbar';
import Sidebar from '../navigation/Sidebar';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { Home, Search, PlusCircle, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-retro-texture">
      <Navbar />
      <div className="flex flex-1">
        {!isMobile && <Sidebar />}
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
      <Footer />
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-retro-pink p-2 flex justify-around items-center z-20">
          <MobileNavItem icon={<Home size={20} />} label="Home" to="/" />
          <MobileNavItem icon={<Search size={20} />} label="Explore" to="/explore" />
          <MobileNavItem icon={<PlusCircle size={20} />} label="New" to="/new" />
          <MobileNavItem icon={<Bell size={20} />} label="Alerts" to="/notifications" />
          <MobileNavItem icon={<User size={20} />} label="Profile" to="/profile" />
        </nav>
      )}
    </div>
  );
};

const MobileNavItem = ({ icon, label, to }: { icon: React.ReactNode, label: string, to: string }) => {
  return (
    <Link to={to} className="flex flex-col items-center">
      <span className="text-retro-pink">{icon}</span>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default AppLayout;
