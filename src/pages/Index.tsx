
import Navigation from "@/components/ui/navigation";
import StatsCard from "@/components/dashboard/StatsCard";
import EarningsChart from "@/components/dashboard/EarningsChart";
import QuickActions from "@/components/dashboard/QuickActions";
import ReferralProgress from "@/components/dashboard/ReferralProgress";
import { Wallet, Eye, MousePointer, Users, TrendingUp } from "lucide-react";

const Index = () => {
  const mockStats = {
    totalBalance: "0.00171 BTC",
    totalBalanceSats: "17,100 sats",
    dailyEarnings: "+420 sats",
    totalImpressions: "12,450",
    totalClicks: "234",
    activeReferrals: "7"
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pb-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-crypto-orange via-crypto-blue to-crypto-purple bg-clip-text text-transparent">
              Earn Crypto
            </span>
            <br />
            <span className="text-foreground">While You Browse</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn your daily browsing into Bitcoin rewards. No mining, no staking - just browse and earn satoshis passively.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Balance"
            value={mockStats.totalBalanceSats}
            change="+5.2% this week"
            changeType="positive"
            icon={Wallet}
            description={`≈ ${mockStats.totalBalance}`}
          />
          <StatsCard
            title="Daily Earnings"
            value={mockStats.dailyEarnings}
            change="+12.3% vs yesterday"
            changeType="positive"
            icon={TrendingUp}
          />
          <StatsCard
            title="Impressions"
            value={mockStats.totalImpressions}
            change="+8.7% this week"
            changeType="positive"
            icon={Eye}
          />
          <StatsCard
            title="Referrals"
            value={mockStats.activeReferrals}
            change="2 new this month"
            changeType="positive"
            icon={Users}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <EarningsChart />
          </div>
          
          <div className="space-y-6">
            <QuickActions />
            <ReferralProgress />
          </div>
        </div>

        {/* Extension Status */}
        <div className="mt-8">
          <div className="glass-card p-6 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Extension Status</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Extension Not Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Install the SatsSurf extension to start earning satoshis while browsing the web.
            </p>
            <button className="crypto-gradient px-6 py-2 rounded-lg text-black font-semibold hover:scale-105 transition-transform">
              Download Extension
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
