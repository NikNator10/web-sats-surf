import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, MessageCircle, Send, Link } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const SocialSharing = () => {
  const referralLink = "https://satssurf.com/ref/usr_abc123xyz";
  
  const shareMessages = {
    twitter: `🚀 Earning Bitcoin while browsing the web with @SatsSurf! 

Join me and start earning sats passively. No mining, no investment - just browse and earn! ⚡

${referralLink}

#Bitcoin #EarnBitcoin #SatsSurf #CryptoBrowsing`,
    
    discord: `Hey everyone! 👋 

I've been earning Bitcoin just by browsing the web with SatsSurf! It's completely passive - just install the extension and earn sats while doing what you normally do online.

Join using my link and we both get bonuses: ${referralLink}

Pretty cool way to stack sats! ⚡🧡`,
    
    telegram: `🔥 Found an awesome way to earn Bitcoin passively!

SatsSurf lets you earn sats just by browsing the web - no mining, no investment needed.

Use my referral link and we both get bonuses: ${referralLink}

Easy sats! ⚡`
  };

  const handleShare = async (platform: string) => {
    const message = shareMessages[platform as keyof typeof shareMessages];
    
    try {
      switch (platform) {
        case 'twitter':
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`,
            '_blank',
            'width=600,height=400'
          );
          break;
        case 'discord':
          await navigator.clipboard.writeText(message);
          toast({
            title: "Message copied!",
            description: "Discord message copied to clipboard. Paste it in your server!",
          });
          break;
        case 'telegram':
          window.open(
            `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(message)}`,
            '_blank',
            'width=600,height=400'
          );
          break;
      }
    } catch (error) {
      toast({
        title: "Share failed",
        description: "Please try again or copy the link manually.",
        variant: "destructive",
      });
    }
  };

  const handleGenericShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SatsSurf - Earn Bitcoin Browsing',
          text: 'Join me on SatsSurf and earn Bitcoin while browsing the web!',
          url: referralLink,
        });
      } catch (error) {
        console.log('Share canceled or failed');
      }
    } else {
      await navigator.clipboard.writeText(referralLink);
      toast({
        title: "Link copied!",
        description: "Referral link copied to clipboard.",
      });
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Share2 className="w-5 h-5 text-crypto-green" />
          Share & Earn
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground mb-4">
          Share your referral link on social media and earn <span className="text-crypto-orange font-semibold">10% bonus</span> from every person who joins!
        </div>

        <div className="grid grid-cols-1 gap-3">
          <Button
            onClick={() => handleShare('twitter')}
            className="justify-start bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20"
            variant="outline"
          >
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
            Share on Twitter/X
          </Button>

          <Button
            onClick={() => handleShare('discord')}
            className="justify-start bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/20"
            variant="outline"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Share on Discord
          </Button>

          <Button
            onClick={() => handleShare('telegram')}
            className="justify-start bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/20"
            variant="outline"
          >
            <Send className="w-5 h-5 mr-3" />
            Share on Telegram
          </Button>

          <Button
            onClick={handleGenericShare}
            className="justify-start bg-crypto-purple/10 hover:bg-crypto-purple/20 text-crypto-purple border border-crypto-purple/20"
            variant="outline"
          >
            <Link className="w-5 h-5 mr-3" />
            Share Anywhere
          </Button>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-crypto-green/10 to-crypto-blue/10 rounded-lg border border-white/10">
          <div className="text-sm text-center text-muted-foreground">
            💡 <span className="text-crypto-green font-semibold">Pro tip:</span> Share in crypto communities for higher conversion rates!
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialSharing;