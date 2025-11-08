import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Users, TrendingUp, BookOpen, Calendar, MessageCircle } from "lucide-react";

export default function ClubBenefits() {
  const benefits = [
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Exclusive Market Insights",
      description: "Weekly research reports and real-time market analysis from our CFA team"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Pre-IPO & Block Trade Access",
      description: "Early access to institutional-grade investment opportunities"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Private Events & Webinars",
      description: "Quarterly member-only sessions with industry leaders and portfolio managers"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Elite Community Access",
      description: "Join our private Slack workspace with 500+ sophisticated investors"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "1-on-1 Portfolio Review",
      description: "Bi-annual personalized consultation with Jenna Ryan CFA"
    },
    {
      icon: <Check className="h-5 w-5" />,
      title: "Priority Support",
      description: "Direct WhatsApp line for urgent market questions and trade execution"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Alpha Wealth Capital Elite Club
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join an exclusive community of sophisticated investors who demand more than just market data. 
            Gain access to institutional-grade research, pre-IPO opportunities, and a network that moves markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="gap-2"
            onClick={() => window.open('https://wa.me/message/YOUR_WHATSAPP_NUMBER', '_blank')}
          >
            <MessageCircle className="h-5 w-5" />
            Apply for Membership
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open('mailto:elite@alphawealthcapital.com', '_blank')}
          >
            Request Information
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Membership is selective.</strong> We maintain a high bar to ensure quality discourse and deal flow. 
            Annual membership: $12,000 | Quarterly: $3,500
          </p>
        </div>
      </div>
    </div>
  );
}
