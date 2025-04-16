
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthFormProps {
  onAuthenticate: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onAuthenticate }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      onAuthenticate();
    }, 1000);
  };

  return (
    <Card className="w-[380px] retro-card animate-fade-in">
      <CardHeader className="text-center">
        <CardTitle className="font-retro text-4xl">Twinsta</CardTitle>
        <CardDescription className="italic">A retro social experience</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login" className="font-typewriter">Login</TabsTrigger>
            <TabsTrigger value="register" className="font-typewriter">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm">Email</label>
                  <Input id="email" type="email" placeholder="you@example.com" required className="retro-input" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm">Password</label>
                  <Input id="password" type="password" placeholder="••••••••" required className="retro-input" />
                </div>
                <Button type="submit" className="w-full retro-button" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="username" className="block text-sm">Username</label>
                  <Input id="username" type="text" placeholder="@username" required className="retro-input" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm">Email</label>
                  <Input id="email" type="email" placeholder="you@example.com" required className="retro-input" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm">Password</label>
                  <Input id="password" type="password" placeholder="••••••••" required className="retro-input" />
                </div>
                <Button type="submit" className="w-full retro-button" disabled={loading}>
                  {loading ? 'Creating account...' : 'Create Account'}
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center text-xs text-muted-foreground">
        By continuing, you agree to our Terms of Service & Privacy Policy
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
