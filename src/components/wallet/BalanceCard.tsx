import { Bitcoin, DollarSign, TrendingUp, Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const BalanceCard = () => {
  const [showBalance, setShowBalance] = useState(true);
  
  // Mock data
  const balance = 1250000; // sats
  const usdValue = 312.50;
  const change24h = 2.4;

  const formatSats = (sats: number) => {
    return new Intl.NumberFormat().format(sats);
  };

  return (
    <Card className="glass-card bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Balance */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Bitcoin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Total Balance</h2>
                  <p className="text-muted-foreground">Available for withdrawal</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowBalance(!showBalance)}
                className="hover:bg-white/10"
              >
                {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </Button>
            </div>

            {showBalance ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold crypto-gradient animate-counter">
                      {formatSats(balance)}
                    </span>
                    <span className="text-xl text-primary font-semibold">sats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-2xl font-semibold">${usdValue.toFixed(2)}</span>
                    <div className="flex items-center gap-1 text-success">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">+{change24h}% 24h</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">••••••</span>
                    <span className="text-xl text-muted-foreground font-semibold">sats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-2xl font-semibold">$•••••</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                <span className="text-sm text-muted-foreground">Today's Earnings</span>
                <span className="font-semibold text-success">+2,450 sats</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                <span className="text-sm text-muted-foreground">This Week</span>
                <span className="font-semibold text-success">+18,750 sats</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                <span className="text-sm text-muted-foreground">Total Withdrawn</span>
                <span className="font-semibold">850,000 sats</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;