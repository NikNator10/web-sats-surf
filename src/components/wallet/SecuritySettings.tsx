import { Shield, Lock, Smartphone, Key, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SecuritySettings = () => {
  // Mock security settings state
  const securitySettings = {
    twoFactorEnabled: true,
    withdrawalLimits: true,
    emailNotifications: true,
    smsNotifications: false,
    whitelistAddresses: false
  };

  const recentActivity = [
    {
      action: "Withdrawal",
      amount: "50,000 sats",
      timestamp: "2024-01-15T10:30:00Z",
      ip: "192.168.1.1",
      location: "New York, US"
    },
    {
      action: "Login",
      timestamp: "2024-01-15T08:15:00Z",
      ip: "192.168.1.1",
      location: "New York, US"
    },
    {
      action: "Settings Changed",
      timestamp: "2024-01-14T16:20:00Z",
      ip: "10.0.0.1",
      location: "California, US"
    }
  ];

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Security Settings */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-success/10">
              <Shield className="w-5 h-5 text-success" />
            </div>
            <CardTitle>Security Settings</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Two-Factor Authentication */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground">Secure your account with 2FA</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {securitySettings.twoFactorEnabled && (
                  <Badge variant="secondary" className="text-success">Enabled</Badge>
                )}
                <Switch checked={securitySettings.twoFactorEnabled} />
              </div>
            </div>
            {securitySettings.twoFactorEnabled && (
              <Alert>
                <CheckCircle className="h-4 w-4 text-success" />
                <AlertDescription className="text-success">
                  2FA is active. Your account is protected with authenticator app verification.
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Withdrawal Security */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Withdrawal Limits</h3>
                  <p className="text-sm text-muted-foreground">Daily withdrawal protection</p>
                </div>
              </div>
              <Switch checked={securitySettings.withdrawalLimits} />
            </div>
            {securitySettings.withdrawalLimits && (
              <div className="p-3 rounded-lg bg-white/5">
                <div className="flex justify-between text-sm">
                  <span>Daily limit:</span>
                  <span className="font-semibold">500,000 sats</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Used today:</span>
                  <span className="font-semibold text-success">50,000 sats</span>
                </div>
              </div>
            )}
          </div>

          {/* Notification Settings */}
          <div className="space-y-3">
            <h3 className="font-semibold">Security Notifications</h3>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Email Alerts</h4>
                <p className="text-sm text-muted-foreground">Withdrawals and logins</p>
              </div>
              <Switch checked={securitySettings.emailNotifications} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">SMS Alerts</h4>
                <p className="text-sm text-muted-foreground">High-value transactions</p>
              </div>
              <Switch checked={securitySettings.smsNotifications} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Address Whitelist</h4>
                <p className="text-sm text-muted-foreground">Pre-approved addresses only</p>
              </div>
              <Switch checked={securitySettings.whitelistAddresses} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t">
            <Button variant="outline" className="w-full gap-2">
              <Key className="w-4 h-4" />
              Change Password
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Smartphone className="w-4 h-4" />
              Manage 2FA Devices
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Security Activity */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{activity.action}</span>
                  {activity.amount && (
                    <Badge variant="outline" className="text-xs">
                      {activity.amount}
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  <div>{formatDate(activity.timestamp)}</div>
                  <div className="flex items-center gap-1">
                    <span>{activity.ip}</span>
                    <span>•</span>
                    <span>{activity.location}</span>
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs">
                Verified
              </Badge>
            </div>
          ))}

          <div className="pt-4">
            <Button variant="outline" className="w-full">
              View Full Security Log
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecuritySettings;