import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, QrCode, ExternalLink, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ReferralLink = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://satssurf.com/ref/usr_abc123xyz";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Your referral link has been copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-crypto-blue" />
          Your Referral Link
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-black/20 rounded-lg border border-white/10">
          <div className="text-sm text-muted-foreground mb-2">Share this link to earn rewards:</div>
          <div className="text-crypto-blue font-mono text-sm break-all">
            {referralLink}
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleCopy}
            className="flex-1 bg-crypto-blue/10 hover:bg-crypto-blue/20 text-crypto-blue border border-crypto-blue/20"
            variant="outline"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </>
            )}
          </Button>

          <Button
            className="bg-crypto-purple/10 hover:bg-crypto-purple/20 text-crypto-purple border border-crypto-purple/20"
            variant="outline"
          >
            <QrCode className="w-4 h-4 mr-2" />
            QR Code
          </Button>
        </div>

        <div className="pt-4 border-t border-white/10">
          <div className="text-xs text-muted-foreground">
            <span className="text-crypto-orange font-semibold">10% bonus</span> on all referred user earnings
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralLink;