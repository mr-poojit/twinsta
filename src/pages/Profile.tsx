
import React from 'react';
import AppLayout from '@/components/layouts/AppLayout';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileGrid from '@/components/profile/ProfileGrid';

const Profile: React.FC = () => {
  // Mock data
  const profileData = {
    username: "retro_user",
    displayName: "Retro User",
    bio: "Living in the digital nostalgia. Designer & photographer. Sharing retro vibes and pixel dreams ✨",
    avatar: "/placeholder.svg",
    postCount: 42,
    followerCount: 1337,
    followingCount: 256,
    isOwnProfile: true,
  };

  const posts = Array.from({ length: 9 }, (_, i) => ({
    id: `post-${i}`,
    image: "/placeholder.svg",
    likes: Math.floor(Math.random() * 100) + 10,
    comments: Math.floor(Math.random() * 20) + 1,
  }));

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <ProfileHeader {...profileData} />
        <ProfileGrid posts={posts} />
      </div>
    </AppLayout>
  );
};

export default Profile;
