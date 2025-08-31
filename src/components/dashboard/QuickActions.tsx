
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Share, Zap, ExternalLink } from "lucide-react";

const QuickActions = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button variant="default" className="w-full crypto-gradient text-black font-semibold group">
          <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
          Withdraw Sats
        </Button>
        
        <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
          <Share className="w-4 h-4 mr-2" />
          Share Referral Link
        </Button>
        
        <Button variant="outline" className="w-full border-accent/20 hover:bg-accent/5">
          <Download className="w-4 h-4 mr-2" />
          Download Extension
        </Button>
        
        <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Leaderboard
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
