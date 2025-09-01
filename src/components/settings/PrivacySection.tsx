import { Eye, Shield, BarChart3, Cookie, Download, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const PrivacySection = () => {
  const [privacy, setPrivacy] = useState({
    // Data collection
    analyticsTracking: true,
    performanceData: true,
    crashReports: true,
    usageStatistics: false,
    
    // Profile visibility
    publicProfile: false,
    showEarnings: false,
    showReferrals: true,
    showActivity: false,
    
    // Data sharing
    thirdPartySharing: false,
    marketingData: false,
    researchData: true,
    
    // Cookies & tracking
    functionalCookies: true, // Required
    analyticsCookies: true,
    marketingCookies: false
  });

  const updatePrivacy = (key: string, value: boolean) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const dataCategories = [
    {
      name: "Browsing Data",
      description: "Websites visited, time spent, ads viewed",
      size: "2.3 MB",
      retention: "90 days"
    },
    {
      name: "Earnings History",
      description: "All earning transactions and referral bonuses",
      size: "1.1 MB", 
      retention: "Permanent"
    },
    {
      name: "Profile Information",
      description: "Username, email, preferences, settings",
      size: "0.5 MB",
      retention: "Until deletion"
    },
    {
      name: "Usage Analytics",
      description: "Feature usage, performance metrics",
      size: "0.8 MB",
      retention: "12 months"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Data Collection */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <CardTitle>Data Collection</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Your browsing data is processed locally and only earnings data is transmitted. 
              We never share your personal browsing habits.
            </AlertDescription>
          </Alert>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Anonymous Analytics</h4>
              <p className="text-sm text-muted-foreground">Help improve SatsSurf with usage data</p>
            </div>
            <Switch 
              checked={privacy.analyticsTracking}
              onCheckedChange={(checked) => updatePrivacy("analyticsTracking", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Performance Monitoring</h4>
              <p className="text-sm text-muted-foreground">Extension performance and error tracking</p>
            </div>
            <Switch 
              checked={privacy.performanceData}
              onCheckedChange={(checked) => updatePrivacy("performanceData", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Crash Reports</h4>
              <p className="text-sm text-muted-foreground">Automatic error reports for bug fixes</p>
            </div>
            <Switch 
              checked={privacy.crashReports}
              onCheckedChange={(checked) => updatePrivacy("crashReports", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Usage Statistics</h4>
              <p className="text-sm text-muted-foreground">Detailed feature usage analytics</p>
            </div>
            <Switch 
              checked={privacy.usageStatistics}
              onCheckedChange={(checked) => updatePrivacy("usageStatistics", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Profile Privacy */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-success/10">
              <Eye className="w-5 h-5 text-success" />
            </div>
            <CardTitle>Profile Visibility</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Public Profile</h4>
              <p className="text-sm text-muted-foreground">Show your profile on leaderboards</p>
            </div>
            <Switch 
              checked={privacy.publicProfile}
              onCheckedChange={(checked) => updatePrivacy("publicProfile", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Show Earnings</h4>
              <p className="text-sm text-muted-foreground">Display your total earnings publicly</p>
            </div>
            <Switch 
              checked={privacy.showEarnings}
              onCheckedChange={(checked) => updatePrivacy("showEarnings", checked)}
              disabled={!privacy.publicProfile}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Show Referral Count</h4>
              <p className="text-sm text-muted-foreground">Display number of successful referrals</p>
            </div>
            <Switch 
              checked={privacy.showReferrals}
              onCheckedChange={(checked) => updatePrivacy("showReferrals", checked)}
              disabled={!privacy.publicProfile}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Show Activity Status</h4>
              <p className="text-sm text-muted-foreground">Display when you were last active</p>
            </div>
            <Switch 
              checked={privacy.showActivity}
              onCheckedChange={(checked) => updatePrivacy("showActivity", checked)}
              disabled={!privacy.publicProfile}
            />
          </div>
        </CardContent>
      </Card>

      {/* Cookie Preferences */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-warning/10">
              <Cookie className="w-5 h-5 text-warning" />
            </div>
            <CardTitle>Cookie Preferences</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h4 className="font-medium">Essential Cookies</h4>
              <Badge variant="secondary" className="text-xs">Required</Badge>
            </div>
            <Switch checked={true} disabled />
          </div>
          <p className="text-sm text-muted-foreground -mt-2">
            Required for basic functionality and security
          </p>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Analytics Cookies</h4>
              <p className="text-sm text-muted-foreground">Help us improve the experience</p>
            </div>
            <Switch 
              checked={privacy.analyticsCookies}
              onCheckedChange={(checked) => updatePrivacy("analyticsCookies", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Marketing Cookies</h4>
              <p className="text-sm text-muted-foreground">Personalized promotions and offers</p>
            </div>
            <Switch 
              checked={privacy.marketingCookies}
              onCheckedChange={(checked) => updatePrivacy("marketingCookies", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Data Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Your Data Categories</h4>
            {dataCategories.map((category, index) => (
              <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                <div>
                  <h5 className="font-medium text-sm">{category.name}</h5>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>
                <div className="text-right text-sm">
                  <div className="font-semibold">{category.size}</div>
                  <div className="text-xs text-muted-foreground">{category.retention}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1 gap-2">
              <Download className="w-4 h-4" />
              Download My Data
            </Button>
            <Button variant="outline" className="flex-1 gap-2 text-destructive hover:text-destructive">
              <Trash2 className="w-4 h-4" />
              Delete All Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacySection;