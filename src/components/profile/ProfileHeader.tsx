
import React from 'react';
import { UserPlus, Settings, Grid, Bookmark, Heart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProfileHeaderProps {
  username: string;
  displayName: string;
  bio: string;
  avatar: string;
  postCount: number;
  followerCount: number;
  followingCount: number;
  isOwnProfile?: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  displayName,
  bio,
  avatar,
  postCount,
  followerCount,
  followingCount,
  isOwnProfile = false
}) => {
  return (
    <div className="retro-card mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <Avatar className="w-24 h-24 border-2 border-retro-purple">
          <AvatarImage src={avatar} />
          <AvatarFallback>{displayName[0]}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <div>
              <h2 className="text-xl font-semibold">{displayName}</h2>
              <p className="text-sm text-retro-gray">@{username}</p>
            </div>
            
            {isOwnProfile ? (
              <Button variant="outline" size="sm" className="flex gap-2 retro-button">
                <Settings className="h-4 w-4" />
                Edit Profile
              </Button>
            ) : (
              <Button size="sm" className="flex gap-2 retro-button">
                <UserPlus className="h-4 w-4" />
                Follow
              </Button>
            )}
          </div>
          
          <p className="text-sm mb-4">{bio}</p>
          
          <div className="flex gap-6 text-sm">
            <div>
              <span className="font-semibold">{postCount}</span> posts
            </div>
            <div>
              <span className="font-semibold">{followerCount}</span> followers
            </div>
            <div>
              <span className="font-semibold">{followingCount}</span> following
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 border-t pt-4">
        <Tabs defaultValue="posts">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="posts" className="font-typewriter">
              <Grid className="h-4 w-4 mr-2" />
              Posts
            </TabsTrigger>
            <TabsTrigger value="saved" className="font-typewriter">
              <Bookmark className="h-4 w-4 mr-2" />
              Saved
            </TabsTrigger>
            <TabsTrigger value="liked" className="font-typewriter">
              <Heart className="h-4 w-4 mr-2" />
              Liked
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileHeader;
