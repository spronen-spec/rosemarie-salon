import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/services";

const WhatsAppFab = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppFab;
