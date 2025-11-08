import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Mail, Phone } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      action: () => window.open('https://wa.me/message/YOUR_WHATSAPP_NUMBER', '_blank'),
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      action: () => window.open('mailto:elite@alphawealthcapital.com', '_blank'),
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Schedule Call",
      action: () => window.open('https://calendly.com/jenna-ryan-cfa', '_blank'),
      color: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print">
      {/* Contact Options */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2 animate-in slide-in-from-bottom-2 fade-in duration-200">
          {contactOptions.map((option, index) => (
            <Button
              key={index}
              onClick={option.action}
              className={`${option.color} text-white shadow-lg flex items-center gap-2 px-4 py-2`}
            >
              {option.icon}
              <span className="font-medium">{option.label}</span>
            </Button>
          ))}
        </div>
      )}

      {/* Main Button */}
      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full w-16 h-16 shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-foreground text-background text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Contact Us
        </div>
      )}
    </div>
  );
}
