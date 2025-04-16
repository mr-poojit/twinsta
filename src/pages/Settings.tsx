
import React from 'react';
import AppLayout from '@/components/layouts/AppLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Settings, User, Bell, Shield, Palette } from 'lucide-react';

const SettingsPage: React.FC = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-retro text-retro-purple mb-8">Settings</h1>
        
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="account" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Account</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center space-x-2">
              <Palette className="h-4 w-4" />
              <span>Appearance</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Privacy</span>
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Advanced</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="account">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account information and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="username">Username</Label>
                    <div className="flex items-center space-x-2">
                      <span className="text-muted-foreground">retro_user</span>
                      <Button variant="outline" size="sm">Change</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="flex items-center space-x-2">
                      <span className="text-muted-foreground">user@example.com</span>
                      <Button variant="outline" size="sm">Change</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button variant="outline" size="sm">Change Password</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize how Twinsta looks for you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="theme">Dark Mode</Label>
                  <Switch id="theme" />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="animations">Show Animations</Label>
                  <Switch id="animations" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="retro-filter">Extra Retro Filter</Label>
                  <Switch id="retro-filter" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Manage how you receive notifications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="push">Push Notifications</Label>
                  <Switch id="push" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifs">Email Notifications</Label>
                  <Switch id="email-notifs" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="mentions">Only Notify on Mentions</Label>
                  <Switch id="mentions" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>
                  Control your privacy preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="private-account">Private Account</Label>
                  <Switch id="private-account" />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="activity-status">Show Activity Status</Label>
                  <Switch id="activity-status" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="read-receipts">Show Read Receipts</Label>
                  <Switch id="read-receipts" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="advanced">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle>Advanced Settings</CardTitle>
                <CardDescription>
                  Manage advanced account options.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="data-saving">Data Saving Mode</Label>
                  <Switch id="data-saving" />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="autoplay">Autoplay Videos</Label>
                  <Switch id="autoplay" defaultChecked />
                </div>
                
                <div className="flex justify-end space-x-4 mt-8">
                  <Button variant="outline">Deactivate Account</Button>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
