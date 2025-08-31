import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { DollarSign, TrendingUp, Users } from "lucide-react";

const EarningsBreakdown = () => {
  const earningsData = [
    { name: "Personal Earnings", value: 9226, color: "#F7931A" },
    { name: "Referral Bonuses", value: 3621, color: "#0EA5E9" }
  ];

  const totalEarnings = earningsData.reduce((sum, item) => sum + item.value, 0);

  const renderTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      const data = props.payload[0].payload;
      return (
        <div className="bg-black/90 border border-white/20 rounded-lg p-3 shadow-lg">
          <p className="text-white font-medium">{data.name}</p>
          <p className="text-crypto-orange">
            {data.value.toLocaleString()} sats ({((data.value / totalEarnings) * 100).toFixed(1)}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-crypto-green" />
          Earnings Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Chart */}
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={earningsData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {earningsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={renderTooltip} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Stats */}
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-crypto-orange/10 rounded-lg border border-crypto-orange/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-crypto-orange"></div>
              <span className="text-sm text-muted-foreground">Personal Earnings</span>
            </div>
            <div className="text-right">
              <div className="font-bold text-crypto-orange">{earningsData[0].value.toLocaleString()} sats</div>
              <div className="text-xs text-muted-foreground">
                {((earningsData[0].value / totalEarnings) * 100).toFixed(1)}% of total
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-crypto-blue/10 rounded-lg border border-crypto-blue/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-crypto-blue"></div>
              <span className="text-sm text-muted-foreground">Referral Bonuses</span>
            </div>
            <div className="text-right">
              <div className="font-bold text-crypto-blue">{earningsData[1].value.toLocaleString()} sats</div>
              <div className="text-xs text-muted-foreground">
                {((earningsData[1].value / totalEarnings) * 100).toFixed(1)}% of total
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
            <TrendingUp className="w-5 h-5 text-crypto-green mx-auto mb-1" />
            <div className="text-sm text-muted-foreground">Avg. per Referral</div>
            <div className="font-bold text-crypto-green">158 sats</div>
          </div>

          <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
            <Users className="w-5 h-5 text-crypto-purple mx-auto mb-1" />
            <div className="text-sm text-muted-foreground">Conversion Rate</div>
            <div className="font-bold text-crypto-purple">78.3%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarningsBreakdown;