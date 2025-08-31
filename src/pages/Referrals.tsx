import Navigation from "@/components/ui/navigation";
import ReferralLink from "@/components/referrals/ReferralLink";
import ReferralTiers from "@/components/referrals/ReferralTiers";
import ReferralLeaderboard from "@/components/referrals/ReferralLeaderboard";
import ReferralHistory from "@/components/referrals/ReferralHistory";
import EarningsBreakdown from "@/components/referrals/EarningsBreakdown";
import SocialSharing from "@/components/referrals/SocialSharing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Target, Award } from "lucide-react";

const Referrals = () => {
  const referralStats = {
    totalReferrals: 23,
    activeReferrals: 18,
    conversionRate: 78.3,
    totalEarnings: 12847,
    referralEarnings: 3621,
    currentTier: "Silver"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 pb-8 space-y-8">
        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4 text-crypto-blue" />
                Total Referrals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{referralStats.totalReferrals}</div>
              <div className="text-xs text-success">+3 this week</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-crypto-green" />
                Active Referrals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{referralStats.activeReferrals}</div>
              <div className="text-xs text-success">{referralStats.conversionRate}% active rate</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2 text-muted-foreground">
                <Target className="w-4 h-4 text-crypto-orange" />
                Referral Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-crypto-orange">{referralStats.referralEarnings.toLocaleString()} sats</div>
              <div className="text-xs text-muted-foreground">29% of total earnings</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2 text-muted-foreground">
                <Award className="w-4 h-4 text-crypto-purple" />
                Current Tier
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-crypto-purple">{referralStats.currentTier}</div>
              <div className="text-xs text-success">7 more for Gold</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <ReferralLink />
            <ReferralTiers />
            <SocialSharing />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <EarningsBreakdown />
            <ReferralHistory />
          </div>
        </div>

        {/* Full Width Leaderboard */}
        <ReferralLeaderboard />
      </div>
    </div>
  );
};

export default Referrals;