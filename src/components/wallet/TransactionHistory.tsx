import { ArrowUpRight, ArrowDownLeft, Users, Globe, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TransactionHistory = () => {
  // Mock transaction data
  const transactions = [
    {
      id: 1,
      type: "earning",
      description: "Ad view reward - reddit.com",
      amount: 125,
      timestamp: "2024-01-15T10:30:00Z",
      status: "completed",
      category: "ads"
    },
    {
      id: 2,
      type: "withdrawal",
      description: "Lightning withdrawal",
      amount: -50000,
      timestamp: "2024-01-15T09:15:00Z",
      status: "completed",
      txHash: "lnbc50u1..."
    },
    {
      id: 3,
      type: "referral",
      description: "Referral bonus - User joined",
      amount: 5000,
      timestamp: "2024-01-14T16:20:00Z",
      status: "completed",
      category: "referral"
    },
    {
      id: 4,
      type: "earning",
      description: "Browse reward - 15 minutes",
      amount: 875,
      timestamp: "2024-01-14T14:45:00Z",
      status: "completed",
      category: "browsing"
    },
    {
      id: 5,
      type: "withdrawal",
      description: "Lightning withdrawal",
      amount: -25000,
      timestamp: "2024-01-13T11:30:00Z",
      status: "pending",
      txHash: "lnbc25u1..."
    }
  ];

  const getTransactionIcon = (type: string, category?: string) => {
    if (type === "withdrawal") return <ArrowDownLeft className="w-4 h-4" />;
    if (type === "referral") return <Users className="w-4 h-4" />;
    return <Globe className="w-4 h-4" />;
  };

  const getTransactionColor = (type: string) => {
    if (type === "withdrawal") return "text-destructive";
    if (type === "referral") return "text-purple-400";
    return "text-success";
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const formatAmount = (amount: number) => {
    const sign = amount >= 0 ? "+" : "";
    return `${sign}${new Intl.NumberFormat().format(amount)} sats`;
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <ArrowUpRight className="w-5 h-5 text-primary" />
            </div>
            <CardTitle>Transaction History</CardTitle>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((tx) => (
          <div 
            key={tx.id}
            className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg ${
                tx.type === "withdrawal" ? "bg-destructive/10" :
                tx.type === "referral" ? "bg-purple-500/10" :
                "bg-success/10"
              }`}>
                {getTransactionIcon(tx.type, tx.category)}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{tx.description}</span>
                  <Badge 
                    variant={tx.status === "completed" ? "secondary" : "destructive"}
                    className="text-xs"
                  >
                    {tx.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{formatDate(tx.timestamp)}</span>
                  {tx.txHash && (
                    <>
                      <span>•</span>
                      <span className="font-mono">{tx.txHash}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className={`font-semibold ${getTransactionColor(tx.type)}`}>
                {formatAmount(tx.amount)}
              </span>
            </div>
          </div>
        ))}

        <div className="flex justify-center pt-4">
          <Button variant="outline" className="w-full">
            Load More Transactions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;