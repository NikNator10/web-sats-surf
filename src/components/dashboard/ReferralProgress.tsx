
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, Trophy, Target } from "lucide-react";

const ReferralProgress = () => {
  const referrals = 7;
  const nextTierTarget = 10;
  const progress = (referrals / nextTierTarget) * 100;
  
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Users className="w-5 h-5 text-accent" />
          Referral Program
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Active Referrals</span>
          <span className="text-2xl font-bold text-accent">{referrals}</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress to Silver Tier</span>
            <span className="text-foreground">{referrals}/{nextTierTarget}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Trophy className="w-4 h-4 text-warning" />
            <span className="text-muted-foreground">Current Tier: Bronze</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Target className="w-4 h-4 text-success" />
            <span className="text-muted-foreground">Next Reward: +5% Bonus</span>
          </div>
        </div>
        
        <div className="pt-2 border-t border-white/10">
          <div className="text-xs text-muted-foreground">
            Referral Earnings: <span className="text-success font-semibold">1,247 sats</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralProgress;
