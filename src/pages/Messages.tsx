
import React from 'react';
import AppLayout from '@/components/layouts/AppLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Send, Image, PlusCircle, Smile } from 'lucide-react';

const Messages: React.FC = () => {
  // Mock data
  const conversations = [
    {
      id: '1',
      name: 'Alex Johnson',
      avatar: '/placeholder.svg',
      lastMessage: 'Did you see that new retro game?',
      time: '12m',
      unread: true,
    },
    {
      id: '2',
      name: 'Sam Wilson',
      avatar: '/placeholder.svg',
      lastMessage: 'I love the new filters!',
      time: '1h',
      unread: false,
    },
    {
      id: '3',
      name: 'Jamie Smith',
      avatar: '/placeholder.svg',
      lastMessage: 'Let\'s catch up soon!',
      time: '3h',
      unread: false,
    },
    {
      id: '4',
      name: 'Taylor Moore',
      avatar: '/placeholder.svg',
      lastMessage: 'Check out my new post!',
      time: '1d',
      unread: false,
    }
  ];

  const messages = [
    {
      id: 'm1',
      sender: 'them',
      content: 'Hey there! How are you doing?',
      time: '10:30 AM'
    },
    {
      id: 'm2',
      sender: 'me',
      content: 'Hi! I\'m doing great, thanks for asking! Just checking out this new retro social app. The design is so nostalgic!',
      time: '10:32 AM'
    },
    {
      id: 'm3',
      sender: 'them',
      content: 'Yeah, it really takes me back to the early internet days. Love the pixel art details!',
      time: '10:35 AM'
    },
    {
      id: 'm4',
      sender: 'me',
      content: 'Absolutely! Are you going to post anything soon?',
      time: '10:36 AM'
    },
    {
      id: 'm5',
      sender: 'them',
      content: 'I was thinking of sharing some of my digital art later today. Did you see that new retro game that just came out?',
      time: '10:38 AM'
    }
  ];
  
  return (
    <AppLayout>
      <div className="h-[calc(100vh-8rem)] max-w-6xl mx-auto flex overflow-hidden retro-card">
        {/* Conversations list */}
        <div className="w-1/3 border-r">
          <div className="p-3 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search messages..." 
                className="pl-10 h-9 retro-input text-sm"
              />
            </div>
          </div>
          
          <div className="overflow-y-auto h-[calc(100%-56px)]">
            {conversations.map((convo) => (
              <div 
                key={convo.id}
                className={`
                  flex items-center p-3 hover:bg-retro-lightPurple cursor-pointer
                  ${convo.id === '1' ? 'bg-retro-lightPurple' : ''}
                `}
              >
                <Avatar className="h-12 w-12 mr-3">
                  <AvatarImage src={convo.avatar} />
                  <AvatarFallback>{convo.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-semibold truncate">{convo.name}</h4>
                    <span className="text-xs text-retro-gray">{convo.time}</span>
                  </div>
                  <p className="text-sm truncate text-retro-gray">
                    {convo.lastMessage}
                  </p>
                </div>
                {convo.unread && (
                  <div className="w-2 h-2 rounded-full bg-retro-purple ml-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="p-3 border-b flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">Alex Johnson</h3>
              <p className="text-xs text-retro-gray">Online</p>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`
                  flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}
                `}
              >
                <div 
                  className={`
                    max-w-[80%] p-3 rounded-lg
                    ${message.sender === 'me' 
                      ? 'bg-retro-purple text-white retro-border' 
                      : 'bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}
                  `}
                >
                  <p>{message.content}</p>
                  <p className={`
                    text-xs mt-1 text-right
                    ${message.sender === 'me' ? 'text-white/70' : 'text-retro-gray'}
                  `}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Message input */}
          <div className="p-3 border-t flex items-center">
            <Button variant="ghost" size="icon" className="text-retro-gray">
              <PlusCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-retro-gray">
              <Image className="h-5 w-5" />
            </Button>
            <Input 
              placeholder="Type a message..." 
              className="mx-2 retro-input"
            />
            <Button variant="ghost" size="icon" className="text-retro-gray">
              <Smile className="h-5 w-5" />
            </Button>
            <Button size="icon" className="bg-retro-purple text-white hover:bg-retro-darkPurple">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Messages;
