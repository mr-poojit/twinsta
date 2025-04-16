
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Heart } from 'lucide-react';

interface PostData {
  id: string;
  image: string;
  likes: number;
  comments: number;
}

interface ProfileGridProps {
  posts: PostData[];
}

const ProfileGrid: React.FC<ProfileGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-4">
      {posts.map((post) => (
        <Link 
          key={post.id}
          to={`/post/${post.id}`}
          className="aspect-square relative group retro-border overflow-hidden"
        >
          <img 
            src={post.image} 
            alt="Post" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex space-x-4 text-white">
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-1" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-1" />
                <span>{post.comments}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProfileGrid;
