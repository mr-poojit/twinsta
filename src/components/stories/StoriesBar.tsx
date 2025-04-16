
import React from 'react';
import { PlusCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface Story {
  id: string;
  username: string;
  userImage: string;
  seen: boolean;
}

interface StoriesBarProps {
  stories: Story[];
}

const StoriesBar: React.FC<StoriesBarProps> = ({ stories }) => {
  return (
    <div className="mb-6">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 p-1">
          <StoryItem isAddStory={true} />
          {stories.map((story) => (
            <StoryItem
              key={story.id}
              username={story.username}
              userImage={story.userImage}
              seen={story.seen}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

interface StoryItemProps {
  isAddStory?: boolean;
  username?: string;
  userImage?: string;
  seen?: boolean;
}

const StoryItem: React.FC<StoryItemProps> = ({ 
  isAddStory = false, 
  username, 
  userImage, 
  seen = false 
}) => {
  if (isAddStory) {
    return (
      <div className="flex flex-col items-center space-y-1">
        <div className={`
          w-16 h-16 rounded-full flex items-center justify-center
          bg-retro-lightPurple border-2 border-dashed border-retro-purple
        `}>
          <PlusCircle className="h-6 w-6 text-retro-purple" />
        </div>
        <span className="text-xs text-center">Your Story</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className={`
        w-16 h-16 rounded-full p-[2px]
        ${seen ? 'border-2 border-retro-gray' : 'bg-gradient-to-tr from-retro-purple to-retro-darkPurple p-[3px]'}
      `}>
        <Avatar className="w-full h-full border-2 border-white">
          <AvatarImage src={userImage} />
          <AvatarFallback>{username?.[0].toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
      <span className="text-xs text-center">{username}</span>
    </div>
  );
};

export default StoriesBar;
