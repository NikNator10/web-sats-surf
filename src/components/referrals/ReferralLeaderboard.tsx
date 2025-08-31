import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Medal, Trophy, Award } from "lucide-react";

const ReferralLeaderboard = () => {
  const leaderboardData = [
    { rank: 1, username: "CryptoMaster", referrals: 127, earnings: "45,230 sats", tier: "Diamond" },
    { rank: 2, username: "BitcoinPro", referrals: 89, earnings: "32,156 sats", tier: "Diamond" },
    { rank: 3, username: "SatsCollector", referrals: 76, earnings: "28,943 sats", tier: "Diamond" },
    { rank: 4, username: "WebMiner", referrals: 45, earnings: "16,785 sats", tier: "Gold" },
    { rank: 5, username: "You", referrals: 23, earnings: "3,621 sats", tier: "Silver", isCurrentUser: true },
    { rank: 6, username: "Hodler2024", referrals: 19, earnings: "2,847 sats", tier: "Silver" },
    { rank: 7, username: "LightningFast", referrals: 15, earnings: "2,156 sats", tier: "Silver" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 2: return <Medal className="w-5 h-5 text-slate-300" />;  
      case 3: return <Award className="w-5 h-5 text-orange-400" />;
      default: return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Diamond": return "bg-crypto-blue/20 text-crypto-blue border-crypto-blue/30";
      case "Gold": return "bg-yellow-400/20 text-yellow-400 border-yellow-400/30";
      case "Silver": return "bg-slate-300/20 text-slate-300 border-slate-300/30";
      default: return "bg-orange-400/20 text-orange-400 border-orange-400/30";
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-crypto-green" />
          Referral Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaderboardData.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 hover:bg-white/5 ${
                user.isCurrentUser
                  ? "bg-crypto-orange/10 border-crypto-orange/30 shadow-md shadow-crypto-orange/20"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div className="flex items-center gap-4">
                {getRankIcon(user.rank)}
                <div>
                  <div className={`font-semibold ${user.isCurrentUser ? "text-crypto-orange" : "text-foreground"}`}>
                    {user.username}
                    {user.isCurrentUser && (
                      <span className="ml-2 px-2 py-1 text-xs bg-crypto-orange/20 text-crypto-orange rounded-full">
                        YOU
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{user.referrals} referrals</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge variant="outline" className={getTierColor(user.tier)}>
                  {user.tier}
                </Badge>
                <div className="text-right">
                  <div className="font-bold text-crypto-green">{user.earnings}</div>
                  <div className="text-xs text-muted-foreground">earned</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-crypto-orange/10 to-crypto-blue/10 rounded-lg border border-white/10">
          <div className="text-sm text-center text-muted-foreground">
            Climb the leaderboard and earn <span className="text-crypto-orange font-semibold">exclusive bonuses</span> for top performers!
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralLeaderboard;