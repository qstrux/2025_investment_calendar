import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Users } from "lucide-react";

export default function CommunityLinks() {
  const communities = [
    {
      name: "Slack Workspace",
      icon: <Users className="h-5 w-5" />,
      description: "Join 500+ elite investors",
      link: "https://join.slack.com/t/alphawealthcapital/shared_invite/YOUR_INVITE_CODE",
      color: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20"
    },
    {
      name: "WhatsApp Group",
      icon: <MessageCircle className="h-5 w-5" />,
      description: "Real-time market alerts",
      link: "https://chat.whatsapp.com/YOUR_GROUP_INVITE",
      color: "bg-green-500/10 text-green-500 hover:bg-green-500/20"
    },
    {
      name: "Telegram Channel",
      icon: <Send className="h-5 w-5" />,
      description: "Daily research updates",
      link: "https://t.me/alphawealthcapital",
      color: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
    }
  ];

  return (
    <div className="py-12 px-4 bg-card/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Connect with Our Community
          </h3>
          <p className="text-muted-foreground">
            Stay informed and connected with fellow members across multiple platforms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {communities.map((community, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-auto flex-col items-start p-6 gap-3 ${community.color}`}
              onClick={() => window.open(community.link, '_blank')}
            >
              <div className="flex items-center gap-2">
                {community.icon}
                <span className="font-semibold">{community.name}</span>
              </div>
              <span className="text-sm opacity-80">{community.description}</span>
            </Button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            <strong>Members Only:</strong> Community access is exclusive to Alpha Wealth Capital Elite Club members. 
            <a href="#benefits" className="text-primary hover:underline ml-1">Learn more about membership</a>
          </p>
        </div>
      </div>
    </div>
  );
}
