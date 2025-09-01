import { Settings, User, Bell, Shield, Globe, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSection from "@/components/settings/ProfileSection";
import NotificationSection from "@/components/settings/NotificationSection";
import PrivacySection from "@/components/settings/PrivacySection";
import ExtensionSection from "@/components/settings/ExtensionSection";
import SecuritySection from "@/components/settings/SecuritySection";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/10">
              <Settings className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold crypto-gradient">Settings</h1>
              <p className="text-muted-foreground">Customize your SatsSurf experience</p>
            </div>
          </div>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 glass-card">
            <TabsTrigger value="profile" className="gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="gap-2">
              <Eye className="w-4 h-4" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="extension" className="gap-2">
              <Globe className="w-4 h-4" />
              Extension
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Shield className="w-4 h-4" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <ProfileSection />
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <NotificationSection />
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <PrivacySection />
          </TabsContent>

          <TabsContent value="extension" className="space-y-6">
            <ExtensionSection />
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <SecuritySection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsPage;