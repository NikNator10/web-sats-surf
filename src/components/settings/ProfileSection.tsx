import { User, Mail, MapPin, Calendar, Camera, Edit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock profile data
  const [profile, setProfile] = useState({
    username: "satoshi_surfer",
    email: "user@example.com",
    displayName: "Bitcoin Enthusiast",
    location: "New York, US",
    timezone: "America/New_York",
    joinDate: "2024-01-01",
    referralCode: "SURF2024",
    avatar: "/placeholder-avatar.png"
  });

  const stats = {
    totalEarned: "1,250,000 sats",
    referralsCount: 12,
    daysActive: 45,
    level: "Gold Surfer"
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Profile Card */}
      <Card className="glass-card lg:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <User className="w-5 h-5 text-primary" />
              </div>
              <CardTitle>Profile Information</CardTitle>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsEditing(!isEditing)}
              className="gap-2"
            >
              <Edit className="w-4 h-4" />
              {isEditing ? "Cancel" : "Edit"}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="w-20 h-20">
                <AvatarImage src={profile.avatar} alt={profile.displayName} />
                <AvatarFallback className="text-xl">
                  {profile.displayName.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              )}
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">{profile.displayName}</h3>
              <p className="text-muted-foreground">@{profile.username}</p>
              <Badge variant="secondary" className="text-xs">
                {stats.level}
              </Badge>
            </div>
          </div>

          {/* Profile Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={profile.username}
                disabled={!isEditing}
                onChange={(e) => setProfile({...profile, username: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                value={profile.displayName}
                disabled={!isEditing}
                onChange={(e) => setProfile({...profile, displayName: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  disabled={!isEditing}
                  className="pl-10"
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="location"
                  value={profile.location}
                  disabled={!isEditing}
                  className="pl-10"
                  onChange={(e) => setProfile({...profile, location: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="referralCode">Referral Code</Label>
              <Input
                id="referralCode"
                value={profile.referralCode}
                disabled={!isEditing}
                onChange={(e) => setProfile({...profile, referralCode: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="joinDate">Member Since</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="joinDate"
                  value={new Date(profile.joinDate).toLocaleDateString()}
                  disabled
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="flex gap-3 pt-4">
              <Button onClick={handleSave} className="flex-1">
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats Card */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Profile Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
              <span className="text-sm text-muted-foreground">Total Earned</span>
              <span className="font-semibold text-success">{stats.totalEarned}</span>
            </div>
            
            <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
              <span className="text-sm text-muted-foreground">Referrals</span>
              <span className="font-semibold text-purple-400">{stats.referralsCount}</span>
            </div>
            
            <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
              <span className="text-sm text-muted-foreground">Days Active</span>
              <span className="font-semibold">{stats.daysActive}</span>
            </div>
            
            <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
              <span className="text-sm text-muted-foreground">Current Level</span>
              <Badge variant="secondary">{stats.level}</Badge>
            </div>
          </div>

          <div className="pt-4 space-y-3">
            <Button variant="outline" className="w-full text-sm">
              Download Profile Data
            </Button>
            <Button variant="outline" className="w-full text-sm text-destructive hover:text-destructive">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSection;