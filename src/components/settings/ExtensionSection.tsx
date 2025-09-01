import { Monitor, Zap, Shield, Globe, Clock, Ban, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ExtensionSection = () => {
  const [extension, setExtension] = useState({
    // Core settings
    extensionEnabled: true,
    autoStart: true,
    showEarningsPopup: true,
    soundNotifications: false,
    
    // Earning preferences
    adFrequency: [3], // ads per hour
    minEarningThreshold: [50], // minimum sats per action
    earnOnIdle: true,
    earnOnFocus: true,
    
    // Website preferences
    whitelistMode: false,
    blacklistEnabled: true,
    respectDoNotTrack: true,
    skipAdBlockerSites: true,
    
    // Performance
    batteryOptimization: true,
    reducedAnimations: false,
    lightMode: false,
    
    // Custom lists
    whitelist: "reddit.com\ntwitter.com\nstackoverflow.com",
    blacklist: "banking-site.com\npaypal.com\nstripe.com"
  });

  const updateExtension = (key: string, value: boolean | number[] | string) => {
    setExtension(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const extensionStats = {
    version: "2.1.3",
    lastUpdate: "2024-01-15",
    sitesVisited: 1234,
    totalEarnings: "1,250,000 sats",
    averageDaily: "12,500 sats"
  };

  return (
    <div className="space-y-6">
      {/* Extension Status */}
      <Card className="glass-card bg-gradient-to-br from-success/10 to-success/5 border-success/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-success/20">
              <Monitor className="w-5 h-5 text-success" />
            </div>
              <div>
                <CardTitle className="text-success">Extension Active</CardTitle>
                <p className="text-sm text-success/80">SatsSurf v{extensionStats.version}</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-success">
              Connected
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">{extensionStats.sitesVisited}</div>
              <div className="text-xs text-success/80">Sites Visited</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">{extensionStats.totalEarnings}</div>
              <div className="text-xs text-success/80">Total Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">{extensionStats.averageDaily}</div>
              <div className="text-xs text-success/80">Daily Average</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">98%</div>
              <div className="text-xs text-success/80">Uptime</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Settings */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Settings className="w-5 h-5 text-primary" />
            </div>
            <CardTitle>Extension Settings</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Enable Extension</h4>
              <p className="text-sm text-muted-foreground">Master toggle for all earning features</p>
            </div>
            <Switch 
              checked={extension.extensionEnabled}
              onCheckedChange={(checked) => updateExtension("extensionEnabled", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Auto-start on Browser Launch</h4>
              <p className="text-sm text-muted-foreground">Start earning when browser opens</p>
            </div>
            <Switch 
              checked={extension.autoStart}
              onCheckedChange={(checked) => updateExtension("autoStart", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Show Earning Popups</h4>
              <p className="text-sm text-muted-foreground">Display notifications when earning sats</p>
            </div>
            <Switch 
              checked={extension.showEarningsPopup}
              onCheckedChange={(checked) => updateExtension("showEarningsPopup", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Sound Notifications</h4>
              <p className="text-sm text-muted-foreground">Audio feedback for earnings</p>
            </div>
            <Switch 
              checked={extension.soundNotifications}
              onCheckedChange={(checked) => updateExtension("soundNotifications", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Earning Preferences */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-warning/10">
              <Zap className="w-5 h-5 text-warning" />
            </div>
            <CardTitle>Earning Preferences</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Ad Frequency</h4>
              <Badge variant="outline">
                {extension.adFrequency[0]} per hour
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Maximum number of rewarded ads per hour
            </p>
            <Slider
              value={extension.adFrequency}
              onValueChange={(value) => updateExtension("adFrequency", value)}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Minimum Earning Threshold</h4>
              <Badge variant="outline">
                {extension.minEarningThreshold[0]} sats
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Skip rewards below this amount
            </p>
            <Slider
              value={extension.minEarningThreshold}
              onValueChange={(value) => updateExtension("minEarningThreshold", value)}
              max={500}
              min={10}
              step={10}
              className="w-full"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Earn During Idle Time</h4>
              <p className="text-sm text-muted-foreground">Continue earning when tab is inactive</p>
            </div>
            <Switch 
              checked={extension.earnOnIdle}
              onCheckedChange={(checked) => updateExtension("earnOnIdle", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Earn Only on Active Tabs</h4>
              <p className="text-sm text-muted-foreground">Only earn when tab is focused</p>
            </div>
            <Switch 
              checked={extension.earnOnFocus}
              onCheckedChange={(checked) => updateExtension("earnOnFocus", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Website Management */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-destructive/10">
              <Ban className="w-5 h-5 text-destructive" />
            </div>
            <CardTitle>Website Management</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Whitelist Mode</h4>
              <p className="text-sm text-muted-foreground">Only earn on approved websites</p>
            </div>
            <Switch 
              checked={extension.whitelistMode}
              onCheckedChange={(checked) => updateExtension("whitelistMode", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Respect Do Not Track</h4>
              <p className="text-sm text-muted-foreground">Honor browser DNT settings</p>
            </div>
            <Switch 
              checked={extension.respectDoNotTrack}
              onCheckedChange={(checked) => updateExtension("respectDoNotTrack", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Skip Ad Blocker Sites</h4>
              <p className="text-sm text-muted-foreground">Don't earn on sites with ad blockers detected</p>
            </div>
            <Switch 
              checked={extension.skipAdBlockerSites}
              onCheckedChange={(checked) => updateExtension("skipAdBlockerSites", checked)}
            />
          </div>

          {/* Website Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="whitelist">Whitelist (one domain per line)</Label>
              <Textarea
                id="whitelist"
                placeholder="example.com"
                value={extension.whitelist}
                onChange={(e) => updateExtension("whitelist", e.target.value)}
                rows={4}
                disabled={!extension.whitelistMode}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="blacklist">Blacklist (one domain per line)</Label>
              <Textarea
                id="blacklist"
                placeholder="blocked-site.com"
                value={extension.blacklist}
                onChange={(e) => updateExtension("blacklist", e.target.value)}
                rows={4}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Settings */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <CardTitle>Performance & Battery</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Battery Optimization</h4>
              <p className="text-sm text-muted-foreground">Reduce power usage on battery</p>
            </div>
            <Switch 
              checked={extension.batteryOptimization}
              onCheckedChange={(checked) => updateExtension("batteryOptimization", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Reduced Animations</h4>
              <p className="text-sm text-muted-foreground">Minimize visual effects for performance</p>
            </div>
            <Switch 
              checked={extension.reducedAnimations}
              onCheckedChange={(checked) => updateExtension("reducedAnimations", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Light Mode Interface</h4>
              <p className="text-sm text-muted-foreground">Use lighter theme for extension popup</p>
            </div>
            <Switch 
              checked={extension.lightMode}
              onCheckedChange={(checked) => updateExtension("lightMode", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Extension Actions */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Extension Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button variant="outline" className="gap-2">
              <Globe className="w-4 h-4" />
              Reset to Defaults
            </Button>
            <Button variant="outline" className="gap-2">
              <Shield className="w-4 h-4" />
              Clear Cache
            </Button>
            <Button variant="outline" className="gap-2">
              <Monitor className="w-4 h-4" />
              Export Settings
            </Button>
            <Button variant="outline" className="gap-2">
              <Settings className="w-4 h-4" />
              Import Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExtensionSection;