
import React from 'react';
import Post from './Post';

interface FeedProps {
  posts: Array<{
    id: string;
    username: string;
    userImage: string;
    timePosted: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    isLiked?: boolean;
    isBookmarked?: boolean;
  }>;
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImage={post.userImage}
          timePosted={post.timePosted}
          content={post.content}
          image={post.image}
          likes={post.likes}
          comments={post.comments}
          isLiked={post.isLiked}
          isBookmarked={post.isBookmarked}
        />
      ))}
    </div>
  );
};

export default Feed;
