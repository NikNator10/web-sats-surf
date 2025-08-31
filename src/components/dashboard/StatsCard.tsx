
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  description?: string;
}

const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon,
  description 
}: StatsCardProps) => {
  return (
    <Card className="glass-card hover:bg-white/5 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold animate-counter">{value}</p>
            {change && (
              <p className={`text-xs ${
                changeType === "positive" ? "text-success" : 
                changeType === "negative" ? "text-destructive" : 
                "text-muted-foreground"
              }`}>
                {change}
              </p>
            )}
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          <div className={`p-3 rounded-lg ${
            changeType === "positive" ? "bg-success/10" : 
            changeType === "negative" ? "bg-destructive/10" :
            "bg-primary/10"
          } group-hover:scale-110 transition-transform duration-200`}>
            <Icon className={`w-6 h-6 ${
              changeType === "positive" ? "text-success" :
              changeType === "negative" ? "text-destructive" :
              "text-primary"
            }`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
