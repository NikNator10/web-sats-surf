import { Wallet, ArrowUpRight, ArrowDownLeft, Shield, QrCode } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BalanceCard from "@/components/wallet/BalanceCard";
import TransactionHistory from "@/components/wallet/TransactionHistory";
import WithdrawalForm from "@/components/wallet/WithdrawalForm";
import SecuritySettings from "@/components/wallet/SecuritySettings";

const WalletPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/10">
              <Wallet className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold crypto-gradient">Wallet</h1>
              <p className="text-muted-foreground">Manage your Bitcoin earnings and withdrawals</p>
            </div>
          </div>
        </div>

        {/* Balance Overview */}
        <BalanceCard />

        {/* Main Content Tabs */}
        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 glass-card">
            <TabsTrigger value="transactions" className="gap-2">
              <ArrowUpRight className="w-4 h-4" />
              Transactions
            </TabsTrigger>
            <TabsTrigger value="withdraw" className="gap-2">
              <ArrowDownLeft className="w-4 h-4" />
              Withdraw
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Shield className="w-4 h-4" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-6">
            <TransactionHistory />
          </TabsContent>

          <TabsContent value="withdraw" className="space-y-6">
            <WithdrawalForm />
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <SecuritySettings />
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-card hover:bg-white/5 transition-all duration-300 group cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-success/10 group-hover:bg-success/20 transition-colors">
                  <QrCode className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold">Generate QR Code</h3>
                  <p className="text-sm text-muted-foreground">Share your Lightning address</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card hover:bg-white/5 transition-all duration-300 group cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <ArrowDownLeft className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Quick Withdraw</h3>
                  <p className="text-sm text-muted-foreground">Lightning instant payout</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;