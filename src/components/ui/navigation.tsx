
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, BarChart3, Users, Settings, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { href: "/", label: "Dashboard", icon: BarChart3 },
    { href: "/referrals", label: "Referrals", icon: Users },
    { href: "/wallet", label: "Wallet", icon: Wallet },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="glass-card sticky top-4 z-50 mx-4 mb-8">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 crypto-gradient rounded-lg flex items-center justify-center animate-glow">
            <span className="text-black font-bold text-sm">₿</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-crypto-orange to-crypto-blue bg-clip-text text-transparent">
            SatsSurf
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              to={href}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 text-muted-foreground hover:text-foreground"
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Link>
          ))}
          <Button variant="default" size="sm" className="crypto-gradient text-black font-semibold">
            Connect Extension
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 p-4 space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              to={href}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 text-muted-foreground hover:text-foreground w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Link>
          ))}
          <Button variant="default" size="sm" className="crypto-gradient text-black font-semibold w-full mt-4">
            Connect Extension
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
