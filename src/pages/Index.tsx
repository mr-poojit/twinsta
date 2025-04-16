
import React, { useState } from 'react';
import AuthForm from '../components/auth/AuthForm';
import AppLayout from '../components/layouts/AppLayout';
import StoriesBar from '../components/stories/StoriesBar';
import Feed from '../components/feed/Feed';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock data
  const stories = [
    { id: '1', username: 'alex_retro', userImage: '/placeholder.svg', seen: false },
    { id: '2', username: 'pixel_art', userImage: '/placeholder.svg', seen: false },
    { id: '3', username: 'vintage_vibes', userImage: '/placeholder.svg', seen: true },
    { id: '4', username: 'retro_gaming', userImage: '/placeholder.svg', seen: false },
    { id: '5', username: 'y2k_style', userImage: '/placeholder.svg', seen: true },
    { id: '6', username: 'nostalgia_90s', userImage: '/placeholder.svg', seen: true },
    { id: '7', username: 'vaporwave', userImage: '/placeholder.svg', seen: false },
  ];

  const posts = [
    {
      id: '1',
      username: 'retro_enthusiast',
      userImage: '/placeholder.svg',
      timePosted: '2 hours ago',
      content: 'Just found my old Game Boy Color! Who remembers spending hours playing Pokémon on these? #RetroGaming #Nostalgia',
      image: '/placeholder.svg',
      likes: 256,
      comments: 42,
      isLiked: true,
    },
    {
      id: '2',
      username: 'pixel_artist',
      userImage: '/placeholder.svg',
      timePosted: '5 hours ago',
      content: 'Finished my latest pixel art project! Took me about 2 weeks to complete. What do you think?',
      image: '/placeholder.svg',
      likes: 189,
      comments: 34,
    },
    {
      id: '3',
      username: 'y2k_lover',
      userImage: '/placeholder.svg',
      timePosted: '1 day ago',
      content: 'The Y2K aesthetic never gets old. Butterfly clips, platform shoes, and frosted tips forever! 💖✨ Who else misses the early 2000s?',
      likes: 421,
      comments: 78,
    },
  ];

  const handleAuthenticate = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-retro-texture p-4">
        <div className="mb-8 text-center">
          <h1 className="font-retro text-6xl text-retro-purple mb-2">Twinsta</h1>
          <p className="text-retro-darkGray italic">Where retro vibes meet social media</p>
        </div>
        <AuthForm onAuthenticate={handleAuthenticate} />
      </div>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-xl mx-auto">
        <StoriesBar stories={stories} />
        <Feed posts={posts} />
        
        <div className="mt-8 p-4 text-center">
          <h2 className="font-retro text-xl mb-4">Explore Other Pages</h2>
          <div className="flex justify-center gap-4">
            <Link to="/explore" className="retro-button">Explore</Link>
            <Link to="/messages" className="retro-button">Messages</Link>
            <Link to="/profile" className="retro-button">Profile</Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
