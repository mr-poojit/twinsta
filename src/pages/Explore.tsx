
import React from 'react';
import AppLayout from '@/components/layouts/AppLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Explore: React.FC = () => {
  // Mock data
  const trendingTopics = [
    "#RetroGaming", "#PixelArt", "#Y2K", "#Vaporwave", 
    "#Nostalgia", "#DigitalArt", "#RetroComputing", "#VintageVibes"
  ];

  const explorePosts = Array.from({ length: 15 }, (_, i) => ({
    id: `explore-${i}`,
    image: "/placeholder.svg",
  }));

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input 
            placeholder="Search for people, topics, or keywords..." 
            className="pl-10 retro-input"
          />
        </div>

        <Tabs defaultValue="foryou">
          <div className="border-b mb-6">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="foryou" className="font-typewriter">For You</TabsTrigger>
              <TabsTrigger value="trending" className="font-typewriter">Trending</TabsTrigger>
              <TabsTrigger value="news" className="font-typewriter">News</TabsTrigger>
              <TabsTrigger value="entertainment" className="font-typewriter">Entertainment</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="foryou" className="mt-0">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Trending Topics</h2>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic) => (
                  <span 
                    key={topic} 
                    className="bg-retro-lightPurple text-retro-darkPurple px-3 py-1 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Explore</h2>
              <div className="grid grid-cols-3 gap-1 md:gap-4">
                {explorePosts.map((post) => (
                  <div 
                    key={post.id}
                    className="aspect-square retro-border overflow-hidden"
                  >
                    <img 
                      src={post.image} 
                      alt="Explore content" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trending">
            <div className="retro-card">
              <h3 className="text-lg font-semibold mb-4">Trending Content</h3>
              <p>Discover what's trending right now...</p>
            </div>
          </TabsContent>

          <TabsContent value="news">
            <div className="retro-card">
              <h3 className="text-lg font-semibold mb-4">Latest News</h3>
              <p>Stay updated with the latest happenings...</p>
            </div>
          </TabsContent>

          <TabsContent value="entertainment">
            <div className="retro-card">
              <h3 className="text-lg font-semibold mb-4">Entertainment</h3>
              <p>Find fun and entertaining content...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Explore;
