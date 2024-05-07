import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BotIcon, SendIcon, UserIcon } from "lucide-react";

const AIAssistant = () => {
  return (
    <div className="h-full border-r-2 flex flex-col gap-4 w-[400px] justify-between">
      <div className="h-full flex flex-col gap-4 py-4 px-2">
        <span className="text-lg font-bold">AI Assistant</span>

        <div className="w-full p-2 flex flex-col gap-2 border-t-2">
          <div className="flex items-center gap-2">
            <UserIcon className="w-4 h-4" />
            <span className="font-medium">You</span>
          </div>

          <span>whats wrong with this code and can you explain in hindi?</span>
        </div>

        <div className="w-full p-2 flex flex-col gap-2 border-t-2">
          <div className="flex items-center gap-2">
            <BotIcon className="w-4 h-4" />
            <span className="font-medium">Assistant</span>
          </div>

          <span>
            ज़रूर! ये तीन गलतियाँ HTML में आम होती हैं:
            <br />
            1. पहली गलती ये बता रही है कि <pre>`&lt;`</pre> का इस्तेमाल करते समय
            कुछ गलत हुआ। शायद आपने `&gt;` लगाना भूल गए जो कि एक टैग को बंद करता
            है।
            <br />
            2. दूसरी गलती में, एक स्लैश `/` के बाद तुरंत `&gt;` नहीं आया, जो कि
            एक सेल्फ-क्लोजिंग टैग के लिए जरूरी है।
            <br />
            3. तीसरी गलती कहती है कि एक एंड टैग में कुछ अतिरिक्त अट्रिब्यूट्स
            थे, जो नहीं होने चाहिए। एंड टैग में केवल नाम होना चाहिए, कोई
            अतिरिक्त जानकारी नहीं।
            <br />
            <br />
            बस, इन तीनों गलतियों का मतलब यही है।
          </span>
        </div>
      </div>

      <div className="flex gap-2 items-center px-2 py-4">
        <Input className="flex-1" placeholder="Ask me anything..." />
        <Button size="icon">
          <SendIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default AIAssistant;
