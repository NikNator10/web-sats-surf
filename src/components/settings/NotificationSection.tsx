import { Bell, Mail, Smartphone, DollarSign, Users, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const NotificationSection = () => {
  const [notifications, setNotifications] = useState({
    // Email notifications
    emailEarnings: true,
    emailWithdrawals: true,
    emailReferrals: true,
    emailWeeklyReport: false,
    emailPromotions: false,
    
    // Push notifications
    pushEarnings: true,
    pushWithdrawals: true,
    pushReferrals: true,
    pushMilestones: true,
    
    // Earning thresholds
    earningThreshold: [1000], // sats
    referralThreshold: [5000], // sats
    
    // Frequency settings
    digestFrequency: "daily", // daily, weekly, monthly
    quietHours: true
  });

  const updateNotification = (key: string, value: boolean | string | number[]) => {
    setNotifications(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Email Notifications */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <CardTitle>Email Notifications</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DollarSign className="w-4 h-4 text-success" />
              <div>
                <h4 className="font-medium">Earnings Updates</h4>
                <p className="text-sm text-muted-foreground">When you earn sats from browsing</p>
              </div>
            </div>
            <Switch 
              checked={notifications.emailEarnings}
              onCheckedChange={(checked) => updateNotification("emailEarnings", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-purple-400" />
              <div>
                <h4 className="font-medium">Referral Activity</h4>
                <p className="text-sm text-muted-foreground">New referrals and bonuses</p>
              </div>
            </div>
            <Switch 
              checked={notifications.emailReferrals}
              onCheckedChange={(checked) => updateNotification("emailReferrals", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-blue-400" />
              <div>
                <h4 className="font-medium">Withdrawal Confirmations</h4>
                <p className="text-sm text-muted-foreground">Payment processing updates</p>
              </div>
            </div>
            <Switch 
              checked={notifications.emailWithdrawals}
              onCheckedChange={(checked) => updateNotification("emailWithdrawals", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-4 h-4 text-warning" />
              <div>
                <h4 className="font-medium">Weekly Summary</h4>
                <p className="text-sm text-muted-foreground">Weekly earnings report</p>
              </div>
            </div>
            <Switch 
              checked={notifications.emailWeeklyReport}
              onCheckedChange={(checked) => updateNotification("emailWeeklyReport", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Promotions & Tips</h4>
                <p className="text-sm text-muted-foreground">Product updates and earning tips</p>
              </div>
            </div>
            <Switch 
              checked={notifications.emailPromotions}
              onCheckedChange={(checked) => updateNotification("emailPromotions", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Push Notifications */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-success/10">
              <Smartphone className="w-5 h-5 text-success" />
            </div>
            <CardTitle>Browser Notifications</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Real-time Earnings</h4>
              <p className="text-sm text-muted-foreground">Instant notification for each earning</p>
            </div>
            <Switch 
              checked={notifications.pushEarnings}
              onCheckedChange={(checked) => updateNotification("pushEarnings", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Milestone Achievements</h4>
              <p className="text-sm text-muted-foreground">Level ups and earning milestones</p>
            </div>
            <Switch 
              checked={notifications.pushMilestones}
              onCheckedChange={(checked) => updateNotification("pushMilestones", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Referral Notifications</h4>
              <p className="text-sm text-muted-foreground">When someone uses your referral link</p>
            </div>
            <Switch 
              checked={notifications.pushReferrals}
              onCheckedChange={(checked) => updateNotification("pushReferrals", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Withdrawal Updates</h4>
              <p className="text-sm text-muted-foreground">Payment status changes</p>
            </div>
            <Switch 
              checked={notifications.pushWithdrawals}
              onCheckedChange={(checked) => updateNotification("pushWithdrawals", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Notification Thresholds */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Notification Thresholds</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Minimum Earning Amount</h4>
              <Badge variant="outline">
                {notifications.earningThreshold[0]} sats
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Only notify when single earning is above this amount
            </p>
            <Slider
              value={notifications.earningThreshold}
              onValueChange={(value) => updateNotification("earningThreshold", value)}
              max={10000}
              min={100}
              step={100}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Referral Bonus Threshold</h4>
              <Badge variant="outline">
                {notifications.referralThreshold[0]} sats
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Notify for referral bonuses above this amount
            </p>
            <Slider
              value={notifications.referralThreshold}
              onValueChange={(value) => updateNotification("referralThreshold", value)}
              max={50000}
              min={1000}
              step={1000}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quiet Hours & Frequency */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Notification Schedule</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Quiet Hours (11PM - 7AM)</h4>
              <p className="text-sm text-muted-foreground">Pause notifications during sleep hours</p>
            </div>
            <Switch 
              checked={notifications.quietHours}
              onCheckedChange={(checked) => updateNotification("quietHours", checked)}
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Email Digest Frequency</h4>
            <div className="grid grid-cols-3 gap-2">
              {["daily", "weekly", "monthly"].map((freq) => (
                <Button
                  key={freq}
                  variant={notifications.digestFrequency === freq ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateNotification("digestFrequency", freq)}
                  className="capitalize"
                >
                  {freq}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationSection;