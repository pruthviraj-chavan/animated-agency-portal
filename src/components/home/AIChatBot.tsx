
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bot, SendHorizontal, User, X, Minimize2, Maximize2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// Predefined responses for the AI chatbot
const AI_RESPONSES = [
  {
    question: "what is digital agency",
    answer: "A digital agency is a business that specializes in creating, designing, and managing digital solutions for clients. We offer services like web development, app creation, UI/UX design, and digital marketing to help businesses establish and grow their online presence."
  },
  {
    question: "services",
    answer: "We offer a comprehensive range of digital services including: \n• Custom web and application development\n• UI/UX design and prototyping\n• Digital marketing and SEO\n• E-commerce solutions\n• Content creation and management\n• Cloud hosting and maintenance"
  },
  {
    question: "tech stack",
    answer: "Our technology stack includes modern frameworks and tools like:\n• Frontend: React, Vue.js, Next.js\n• Backend: Node.js, Python, Go\n• Mobile: React Native, Flutter\n• Databases: MongoDB, PostgreSQL\n• Cloud: AWS, Google Cloud, Azure\n• CMS: WordPress, Strapi, Contentful"
  },
  {
    question: "contact",
    answer: "You can reach our team through our contact page or by emailing hello@digitalagency.com. We're also available via phone at (555) 123-4567 during regular business hours. We'd love to discuss your project requirements!"
  },
  {
    question: "pricing",
    answer: "Our pricing varies based on project requirements and scope. We offer customized quotes after an initial consultation to understand your specific needs. We also have monthly service packages starting at $1,000/month for ongoing support and maintenance."
  },
  {
    question: "portfolio",
    answer: "Our portfolio includes successful projects across various industries including e-commerce, healthcare, finance, and education. Some of our recent work includes responsive websites, enterprise applications, and mobile apps. You can view case studies on our portfolio page."
  },
  {
    question: "timeline",
    answer: "Project timelines depend on complexity and scope. Typically, simple websites take 2-4 weeks, while complex applications might take 2-3 months. We'll provide a detailed timeline during our project planning phase after understanding your specific requirements."
  }
];

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

export function AIChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus on input when chat is opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Add welcome message when chat is first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 'welcome',
        content: "👋 Hi there! I'm your digital agency assistant. How can I help you today?",
        sender: 'ai',
        timestamp: new Date()
      }]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      // Find a response that matches keywords in the user's query
      const userQuery = inputValue.toLowerCase();
      let aiResponse = "I'm not sure how to help with that specific query. Please try asking about our services, tech stack, contact information, or portfolio.";
      
      for (const response of AI_RESPONSES) {
        if (userQuery.includes(response.question)) {
          aiResponse = response.answer;
          break;
        }
      }
      
      // Add AI response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 
                     bg-gradient-to-r from-agency-purple to-agency-blue hover:opacity-90"
          aria-label="Open chat"
        >
          <Bot className="w-7 h-7" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div 
          className={cn(
            "fixed bottom-6 right-6 z-50 bg-background border border-border shadow-xl rounded-lg overflow-hidden transition-all duration-300 ease-in-out",
            isMinimized ? "w-72 h-12" : "w-80 sm:w-96 h-[500px]"
          )}
        >
          {/* Chat header */}
          <div className="bg-gradient-to-r from-agency-purple to-agency-blue p-3 flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="text-white mr-2 h-5 w-5" />
              <h3 className="text-white font-semibold">AI Assistant</h3>
            </div>
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 text-white hover:bg-white/10"
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat messages */}
              <div className="flex-1 p-3 h-[400px] overflow-y-auto bg-background">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={cn(
                      "flex mb-3", 
                      message.sender === 'user' ? "justify-end" : "justify-start"
                    )}
                  >
                    {message.sender === 'ai' && (
                      <Avatar className="h-8 w-8 mr-2 mt-1">
                        <AvatarFallback className="bg-gradient-to-r from-agency-purple to-agency-blue text-white">AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div 
                      className={cn(
                        "max-w-[80%] rounded-lg p-3",
                        message.sender === 'user' 
                          ? "bg-agency-purple/10 border border-agency-purple/20" 
                          : "bg-agency-blue/10 border border-agency-blue/20"
                      )}
                    >
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                    </div>
                    {message.sender === 'user' && (
                      <Avatar className="h-8 w-8 ml-2 mt-1">
                        <AvatarFallback className="bg-muted text-foreground">U</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex mb-3 justify-start">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback className="bg-gradient-to-r from-agency-purple to-agency-blue text-white">AI</AvatarFallback>
                    </Avatar>
                    <div className="bg-agency-blue/10 border border-agency-blue/20 max-w-[80%] rounded-lg p-3">
                      <div className="flex items-center space-x-1">
                        <div className="h-2 w-2 rounded-full bg-agency-blue animate-pulse"></div>
                        <div className="h-2 w-2 rounded-full bg-agency-blue animate-pulse delay-150"></div>
                        <div className="h-2 w-2 rounded-full bg-agency-blue animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat input */}
              <div className="p-3 border-t border-border">
                <div className="flex items-center">
                  <Input
                    ref={inputRef}
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                  />
                  <Button 
                    size="icon"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="ml-2 rounded-full bg-gradient-to-r from-agency-purple to-agency-blue hover:opacity-90"
                  >
                    <SendHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
