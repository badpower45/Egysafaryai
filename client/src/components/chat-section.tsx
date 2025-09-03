import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Shield } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export default function ChatSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "مرحباً! أنا مساعدك إيجي سفاري AI. أنا هنا لمساعدتك في اكتشاف أفضل ما في بورسعيد. ماذا تريد أن تعرف؟",
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest('POST', '/api/chat', {
        message,
        chatHistory: messages
      });
      return response.json();
    },
    onSuccess: (data) => {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: data.response,
        timestamp: data.timestamp
      }]);
    },
    onError: (error) => {
      toast({
        title: "Connection Error",
        description: error instanceof Error ? error.message : "Failed to get response from AI",
        variant: "destructive"
      });
    }
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = () => {
    const message = inputValue.trim();
    if (!message) return;

    // Add user message
    const userMessage: ChatMessage = {
      role: "user",
      content: message,
      timestamp: Date.now()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Send to AI
    chatMutation.mutate(message);
  };

  const handleExamplePrompt = (prompt: string) => {
    setInputValue(prompt);
  };

  const examplePrompts = [
    "إيه أحسن مطاعم سمك في بورسعيد؟",
    "عرفني على حديقة فريال",
    "أي الأماكن التاريخية اللي لازم أزورها؟",
    "عملي برنامج يومين في بورسعيد"
  ];

  return (
    <section id="chat" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">يلا نتكلم مع إيجي سفاري AI</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتب سؤالك هنا تحت وخلي الذكاء الاصطناعي يوديك في أحلى أماكن بورسعيد.
          </p>
        </div>
        
        {/* Chat Interface */}
        <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
          {/* Chat Header */}
          <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="text-lg" size={20} />
              </div>
              <div>
                <h3 className="font-semibold">مساعد إيجي سفاري AI</h3>
                <p className="text-sm text-primary-foreground/80">موجود • جاهز أساعدك</p>
              </div>
            </div>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          </div>
          
          {/* Chat Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4" data-testid="chat-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`chat-message flex items-start space-x-3 ${message.role === 'user' ? 'justify-end' : ''}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="text-primary text-sm" size={16} />
                  </div>
                )}
                <div className={`${
                  message.role === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                } rounded-lg px-4 py-3 max-w-md`}>
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 bg-secondary/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="text-secondary-foreground text-sm" size={16} />
                  </div>
                )}
              </div>
            ))}
            {chatMutation.isPending && (
              <div className="typing-indicator flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="text-primary text-sm" size={16} />
                </div>
                <div className="bg-muted rounded-lg px-4 py-3">
                  <p className="text-sm">يكتب الذكاء الاصطناعي...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Example Prompts */}
          <div className="px-6 py-4 bg-muted/50 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">جرب أن تسأل عن:</p>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  size="sm"
                  onClick={() => handleExamplePrompt(prompt)}
                  className={`${
                    index % 4 === 0 ? 'bg-secondary/20 text-secondary-foreground hover:bg-secondary/30' :
                    index % 4 === 1 ? 'bg-accent/20 text-accent-foreground hover:bg-accent/30' :
                    index % 4 === 2 ? 'bg-primary/20 text-primary-foreground hover:bg-primary/30' :
                    'bg-secondary/20 text-secondary-foreground hover:bg-secondary/30'
                  } text-sm px-3 py-1 rounded-full transition-colors`}
                  data-testid={`example-prompt-${index}`}
                >
                  {prompt.length > 30 ? `${prompt.substring(0, 30)}...` : prompt}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Chat Input */}
          <div className="p-6 border-t border-border">
            <div className="flex space-x-3">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                placeholder="اسألني أي شيء عن بورسعيد..."
                className="flex-1"
                disabled={chatMutation.isPending}
                data-testid="input-chat-message"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || chatMutation.isPending}
                className="px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
                data-testid="button-send-message"
              >
                <span>إرسال</span>
                <Send className="text-sm" size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Chat Disclaimer */}
        <p className="text-sm text-muted-foreground text-center mt-4 flex items-center justify-center">
          <Shield className="mr-1" size={16} />
          جميع المحادثات يتم التعامل معها بأمان وسرية. ذكاؤنا الاصطناعي يقدم المعلومات والتوصيات فقط.
        </p>
      </div>
    </section>
  );
}
