import { useState } from "react";
import { Zap, QrCode, Wallet, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const WithdrawalForm = () => {
  const [withdrawalType, setWithdrawalType] = useState<"lightning" | "onchain">("lightning");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data
  const availableBalance = 1250000; // sats
  const minWithdrawal = 1000; // sats
  const lightningFee = 0.1; // %
  const onchainFee = 500; // sats

  const handleWithdraw = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form or show success
  };

  const calculateFee = () => {
    const withdrawalAmount = parseInt(amount) || 0;
    if (withdrawalType === "lightning") {
      return Math.ceil(withdrawalAmount * (lightningFee / 100));
    }
    return onchainFee;
  };

  const totalAmount = () => {
    const withdrawalAmount = parseInt(amount) || 0;
    return withdrawalAmount + calculateFee();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Withdrawal Form */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Wallet className="w-5 h-5 text-primary" />
            </div>
            <CardTitle>Withdraw Funds</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Withdrawal Type Selection */}
          <div className="space-y-3">
            <Label>Withdrawal Method</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant={withdrawalType === "lightning" ? "default" : "outline"}
                onClick={() => setWithdrawalType("lightning")}
                className="justify-start gap-2 h-auto p-4"
              >
                <Zap className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold">Lightning</div>
                  <div className="text-xs opacity-70">Instant & cheap</div>
                </div>
              </Button>
              <Button
                variant={withdrawalType === "onchain" ? "default" : "outline"}
                onClick={() => setWithdrawalType("onchain")}
                className="justify-start gap-2 h-auto p-4"
              >
                <QrCode className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold">On-chain</div>
                  <div className="text-xs opacity-70">Bitcoin address</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="amount">Amount (sats)</Label>
              <Badge variant="outline">
                Available: {new Intl.NumberFormat().format(availableBalance)}
              </Badge>
            </div>
            <div className="relative">
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount in satoshis"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min={minWithdrawal}
                max={availableBalance}
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs"
                onClick={() => setAmount(availableBalance.toString())}
              >
                MAX
              </Button>
            </div>
          </div>

          {/* Address Input */}
          <div className="space-y-3">
            <Label htmlFor="address">
              {withdrawalType === "lightning" ? "Lightning Invoice" : "Bitcoin Address"}
            </Label>
            {withdrawalType === "lightning" ? (
              <Textarea
                id="address"
                placeholder="lnbc1500u1p..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
              />
            ) : (
              <Input
                id="address"
                placeholder="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            )}
          </div>

          {/* Fee Information */}
          {amount && parseInt(amount) > 0 && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Withdrawal amount:</span>
                    <span>{new Intl.NumberFormat().format(parseInt(amount))} sats</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Network fee:</span>
                    <span>{new Intl.NumberFormat().format(calculateFee())} sats</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-1">
                    <span>Total:</span>
                    <span>{new Intl.NumberFormat().format(totalAmount())} sats</span>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button 
            onClick={handleWithdraw}
            disabled={!amount || !address || isSubmitting || totalAmount() > availableBalance}
            className="w-full gap-2"
          >
            {isSubmitting ? (
              <>Processing...</>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                Withdraw {withdrawalType === "lightning" ? "via Lightning" : "On-chain"}
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Withdrawal Limits & Info */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success" />
            Withdrawal Info
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <h3 className="font-semibold text-success mb-2">Lightning Network</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Instant payments</li>
                <li>• Low fees ({lightningFee}%)</li>
                <li>• Minimum: {new Intl.NumberFormat().format(minWithdrawal)} sats</li>
                <li>• Maximum: {new Intl.NumberFormat().format(1000000)} sats</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <h3 className="font-semibold text-primary mb-2">On-chain Bitcoin</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 10-60 minute confirmation</li>
                <li>• Fixed fee: {new Intl.NumberFormat().format(onchainFee)} sats</li>
                <li>• Minimum: {new Intl.NumberFormat().format(10000)} sats</li>
                <li>• No maximum limit</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Recent Withdrawals</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-success" />
                  <span className="text-sm">Lightning</span>
                </div>
                <div className="text-right text-sm">
                  <div className="font-semibold">50,000 sats</div>
                  <div className="text-muted-foreground">2 hours ago</div>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                <div className="flex items-center gap-2">
                  <QrCode className="w-4 h-4 text-primary" />
                  <span className="text-sm">On-chain</span>
                </div>
                <div className="text-right text-sm">
                  <div className="font-semibold">100,000 sats</div>
                  <div className="text-muted-foreground">1 day ago</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WithdrawalForm;