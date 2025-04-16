
import React from 'react';
import { Home, Search, PlusCircle, Heart, User, MessageCircle, Hash, Bookmark, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="w-64 border-r border-retro-pink bg-white hidden md:block p-4">
      <div className="space-y-6">
        <div className="pt-4">
          <SidebarItem 
            icon={<Home />} 
            label="Home" 
            to="/" 
            active={location.pathname === '/'} 
          />
          <SidebarItem 
            icon={<Search />} 
            label="Explore" 
            to="/explore" 
            active={location.pathname === '/explore'} 
          />
          <SidebarItem 
            icon={<Hash />} 
            label="Trending" 
            to="/trending" 
            active={location.pathname === '/trending'} 
          />
          <SidebarItem 
            icon={<MessageCircle />} 
            label="Messages" 
            to="/messages" 
            active={location.pathname === '/messages'} 
          />
          <SidebarItem 
            icon={<Heart />} 
            label="Notifications" 
            to="/notifications" 
            active={location.pathname === '/notifications'} 
          />
          <SidebarItem 
            icon={<Bookmark />} 
            label="Bookmarks" 
            to="/bookmarks" 
            active={location.pathname === '/bookmarks'} 
          />
          <SidebarItem 
            icon={<User />} 
            label="Profile" 
            to="/profile" 
            active={location.pathname === '/profile'} 
          />
          <SidebarItem 
            icon={<Settings />} 
            label="Settings" 
            to="/settings" 
            active={location.pathname === '/settings'} 
          />
        </div>
        
        <div className="px-2">
          <button className="retro-button w-full flex items-center justify-center space-x-2">
            <PlusCircle className="h-5 w-5" />
            <span>New Post</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, to, active }: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
        active 
          ? 'bg-retro-lightPink text-retro-hotpink font-medium' 
          : 'hover:bg-retro-lightPink text-retro-darkGray'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-typewriter">{label}</span>
    </Link>
  );
};

export default Sidebar;
