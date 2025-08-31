
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", earnings: 0.00012, impressions: 450 },
  { name: "Tue", earnings: 0.00018, impressions: 680 },
  { name: "Wed", earnings: 0.00025, impressions: 890 },
  { name: "Thu", earnings: 0.00031, impressions: 1200 },
  { name: "Fri", earnings: 0.00028, impressions: 980 },
  { name: "Sat", earnings: 0.00035, impressions: 1350 },
  { name: "Sun", earnings: 0.00042, impressions: 1580 },
];

const EarningsChart = () => {
  return (
    <div className="glass-card p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Weekly Earnings</h3>
        <p className="text-sm text-muted-foreground">Your satoshi earnings over the last 7 days</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(25 95% 53%)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(25 95% 53%)" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 25% 18%)" />
          <XAxis 
            dataKey="name" 
            stroke="hsl(210 15% 65%)"
            tick={{ fill: "hsl(210 15% 65%)" }}
          />
          <YAxis 
            stroke="hsl(210 15% 65%)"
            tick={{ fill: "hsl(210 15% 65%)" }}
            tickFormatter={(value) => `${(value * 100000).toFixed(0)}sat`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(220 25% 12%)",
              border: "1px solid hsl(220 25% 18%)",
              borderRadius: "8px",
              color: "hsl(210 15% 98%)"
            }}
            formatter={(value: number, name: string) => [
              name === "earnings" ? `${(value * 100000).toFixed(0)} sats` : value,
              name === "earnings" ? "Earnings" : "Impressions"
            ]}
          />
          <Area 
            type="monotone" 
            dataKey="earnings" 
            stroke="hsl(25 95% 53%)" 
            fillOpacity={1} 
            fill="url(#earningsGradient)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
