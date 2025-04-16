
import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PostProps {
  username: string;
  userImage: string;
  timePosted: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
}

const Post: React.FC<PostProps> = ({
  username,
  userImage,
  timePosted,
  content,
  image,
  likes,
  comments,
  isLiked = false,
  isBookmarked = false
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="retro-card mb-4 animation-fade-in">
      <div className="flex justify-between items-start">
        <div className="flex space-x-3">
          <Avatar>
            <AvatarImage src={userImage} />
            <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <Link to={`/profile/${username}`} className="font-semibold hover:underline">
              @{username}
            </Link>
            <p className="text-xs text-retro-gray">{timePosted}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="my-3">
        <p className="whitespace-pre-line">{content}</p>
      </div>
      
      {image && (
        <div className="my-3 overflow-hidden retro-border">
          <img 
            src={image} 
            alt="Post content" 
            className="w-full h-auto rounded object-cover"
          />
        </div>
      )}
      
      <div className="flex justify-between items-center mt-4 pt-2 border-t">
        <div className="flex space-x-6">
          <button 
            className="flex items-center space-x-1 text-sm"
            onClick={handleLike}
          >
            <Heart 
              className={`h-5 w-5 ${liked ? 'fill-red-500 text-red-500' : ''}`} 
            />
            <span>{likeCount}</span>
          </button>
          <button className="flex items-center space-x-1 text-sm">
            <MessageCircle className="h-5 w-5" />
            <span>{comments}</span>
          </button>
          <button className="flex items-center space-x-1 text-sm">
            <Share className="h-5 w-5" />
          </button>
        </div>
        <button onClick={handleBookmark}>
          <Bookmark 
            className={`h-5 w-5 ${bookmarked ? 'fill-retro-purple text-retro-purple' : ''}`} 
          />
        </button>
      </div>
    </div>
  );
};

export default Post;
