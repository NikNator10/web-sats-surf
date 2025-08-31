import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, UserPlus, Coins, TrendingUp } from "lucide-react";

const ReferralHistory = () => {
  const activities = [
    {
      id: 1,
      type: "referral_joined",
      user: "BitcoinBob",
      timestamp: "2 hours ago",
      amount: 0,
      status: "active"
    },
    {
      id: 2,
      type: "referral_earning",
      user: "CryptoAlice",
      timestamp: "5 hours ago", 
      amount: 127,
      status: "completed"
    },
    {
      id: 3,
      type: "referral_joined",
      user: "SatsHunter",
      timestamp: "1 day ago",
      amount: 0,
      status: "active"
    },
    {
      id: 4,
      type: "referral_earning",
      user: "WebMiner99",
      timestamp: "2 days ago",
      amount: 89,
      status: "completed"
    },
    {
      id: 5,
      type: "referral_earning",
      user: "LightningUser",
      timestamp: "3 days ago",
      amount: 156,
      status: "completed"
    },
    {
      id: 6,
      type: "referral_joined",
      user: "HodlMaster",
      timestamp: "1 week ago",
      amount: 0,
      status: "inactive"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "referral_joined":
        return <UserPlus className="w-4 h-4 text-crypto-blue" />;
      case "referral_earning":
        return <Coins className="w-4 h-4 text-crypto-green" />;
      default:
        return <TrendingUp className="w-4 h-4 text-crypto-orange" />;
    }
  };

  const getActivityText = (activity: any) => {
    switch (activity.type) {
      case "referral_joined":
        return `${activity.user} joined using your link`;
      case "referral_earning":
        return `Earned ${activity.amount} sats from ${activity.user}`;
      default:
        return "Unknown activity";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-crypto-green/20 text-crypto-green border-crypto-green/30">Active</Badge>;
      case "completed":
        return <Badge className="bg-crypto-blue/20 text-crypto-blue border-crypto-blue/30">Completed</Badge>;
      case "inactive":
        return <Badge className="bg-muted/20 text-muted-foreground border-muted/30">Inactive</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-crypto-purple" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              <div className="mt-1">
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground">
                  {getActivityText(activity)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {activity.timestamp}
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                {activity.amount > 0 && (
                  <div className="text-sm font-bold text-crypto-green">
                    +{activity.amount} sats
                  </div>
                )}
                {getStatusBadge(activity.status)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="text-sm text-crypto-blue hover:text-crypto-blue/80 transition-colors">
            View All Activity →
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralHistory;