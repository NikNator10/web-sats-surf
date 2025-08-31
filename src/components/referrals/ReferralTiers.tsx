import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Crown, Gem } from "lucide-react";

const ReferralTiers = () => {
  const tiers = [
    {
      name: "Bronze",
      icon: Star,
      requirement: "0-9 referrals",
      bonus: "5%",
      color: "text-orange-400",
      completed: true
    },
    {
      name: "Silver", 
      icon: Trophy,
      requirement: "10-24 referrals",
      bonus: "10%",
      color: "text-slate-300",
      completed: true,
      current: true
    },
    {
      name: "Gold",
      icon: Crown,
      requirement: "25-49 referrals", 
      bonus: "15%",
      color: "text-yellow-400",
      completed: false
    },
    {
      name: "Diamond",
      icon: Gem,
      requirement: "50+ referrals",
      bonus: "20%",
      color: "text-crypto-blue",
      completed: false
    }
  ];

  const currentReferrals = 23;
  const nextTier = tiers.find(tier => !tier.completed);
  const progressToNext = nextTier ? (currentReferrals / 25) * 100 : 100;

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Trophy className="w-5 h-5 text-crypto-purple" />
          Referral Tiers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Progress */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress to Gold Tier</span>
            <span className="text-foreground">{currentReferrals}/25</span>
          </div>
          <Progress value={progressToNext} className="h-3" />
          <div className="text-xs text-center text-muted-foreground">
            {25 - currentReferrals} more referrals needed for 15% bonus
          </div>
        </div>

        {/* Tier List */}
        <div className="space-y-3">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                  tier.current
                    ? "bg-crypto-purple/10 border-crypto-purple/30 shadow-md shadow-crypto-purple/20"
                    : tier.completed
                    ? "bg-success/10 border-success/30"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${tier.color}`} />
                  <div>
                    <div className={`font-semibold ${tier.color}`}>
                      {tier.name}
                      {tier.current && (
                        <span className="ml-2 px-2 py-1 text-xs bg-crypto-purple/20 text-crypto-purple rounded-full">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">{tier.requirement}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-bold ${tier.color}`}>+{tier.bonus}</div>
                  <div className="text-xs text-muted-foreground">bonus</div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralTiers;