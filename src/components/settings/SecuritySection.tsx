import { Shield, Key, Smartphone, Eye, Lock, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

const SecuritySection = () => {
  const [security, setSecurity] = useState({
    twoFactorEnabled: true,
    passwordChangeRequired: false,
    sessionTimeout: true,
    loginNotifications: true,
    deviceTrust: true,
    withdrawalPin: false,
    
    // Password requirements
    requireStrongPassword: true,
    passwordExpiry: false,
    preventReuse: true
  });

  const [showPasswords, setShowPasswords] = useState(false);

  const updateSecurity = (key: string, value: boolean) => {
    setSecurity(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const loginSessions = [
    {
      device: "Chrome on Windows",
      location: "New York, US",
      ip: "192.168.1.100",
      lastActive: "2024-01-15T10:30:00Z",
      current: true
    },
    {
      device: "Safari on iPhone",
      location: "New York, US", 
      ip: "10.0.0.1",
      lastActive: "2024-01-14T22:15:00Z",
      current: false
    },
    {
      device: "Firefox on macOS",
      location: "California, US",
      ip: "172.16.0.1",
      lastActive: "2024-01-12T14:20:00Z",
      current: false
    }
  ];

  const securityScore = 85; // Mock security score

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="space-y-6">
      {/* Security Overview */}
      <Card className="glass-card bg-gradient-to-br from-success/10 to-success/5 border-success/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/20">
                <Shield className="w-5 h-5 text-success" />
              </div>
              <div>
                <CardTitle className="text-success">Security Score</CardTitle>
                <p className="text-sm text-success/80">Your account security rating</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-success">{securityScore}%</div>
              <Badge variant="secondary" className="text-success">
                Strong
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">2FA Enabled</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">Strong Password</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-warning" />
              <span className="text-sm">No Backup Codes</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Authentication Settings */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Key className="w-5 h-5 text-primary" />
            </div>
            <CardTitle>Authentication</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Two-Factor Authentication */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <p className="text-sm text-muted-foreground">TOTP authenticator app</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-success">Active</Badge>
                <Switch checked={security.twoFactorEnabled} />
              </div>
            </div>
            
            {security.twoFactorEnabled && (
              <Alert>
                <CheckCircle className="h-4 w-4 text-success" />
                <AlertDescription className="text-success">
                  2FA is protecting your account. Make sure to keep your backup codes safe.
                </AlertDescription>
              </Alert>
            )}

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                View Backup Codes
              </Button>
              <Button variant="outline" size="sm">
                Regenerate Codes
              </Button>
              <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                Disable 2FA
              </Button>
            </div>
          </div>

          {/* Password Settings */}
          <div className="space-y-4 border-t pt-4">
            <h4 className="font-medium flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Password Security
            </h4>

            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showPasswords ? "text" : "password"}
                  placeholder="Enter current password"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPasswords(!showPasswords)}
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type={showPasswords ? "text" : "password"}
                  placeholder="Enter new password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type={showPasswords ? "text" : "password"}
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <Button className="w-full md:w-auto">
              Update Password
            </Button>
          </div>

          {/* Security Preferences */}
          <div className="space-y-4 border-t pt-4">
            <h4 className="font-medium">Security Preferences</h4>
            
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium">Require Strong Passwords</h5>
                <p className="text-sm text-muted-foreground">Enforce complex password requirements</p>
              </div>
              <Switch 
                checked={security.requireStrongPassword}
                onCheckedChange={(checked) => updateSecurity("requireStrongPassword", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium">Session Timeout</h5>
                <p className="text-sm text-muted-foreground">Auto-logout after 30 minutes of inactivity</p>
              </div>
              <Switch 
                checked={security.sessionTimeout}
                onCheckedChange={(checked) => updateSecurity("sessionTimeout", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium">Login Notifications</h5>
                <p className="text-sm text-muted-foreground">Email alerts for new login attempts</p>
              </div>
              <Switch 
                checked={security.loginNotifications}
                onCheckedChange={(checked) => updateSecurity("loginNotifications", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium">Withdrawal PIN</h5>
                <p className="text-sm text-muted-foreground">Require PIN for withdrawals</p>
              </div>
              <Switch 
                checked={security.withdrawalPin}
                onCheckedChange={(checked) => updateSecurity("withdrawalPin", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Sessions */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            Active Sessions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {loginSessions.map((session, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-white/5"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h5 className="font-medium">{session.device}</h5>
                  {session.current && (
                    <Badge variant="secondary" className="text-xs">Current</Badge>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  <div>{session.location} • {session.ip}</div>
                  <div>Last active: {formatDate(session.lastActive)}</div>
                </div>
              </div>
              {!session.current && (
                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                  Revoke
                </Button>
              )}
            </div>
          ))}

          <Button variant="destructive" className="w-full">
            Revoke All Other Sessions
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecuritySection;