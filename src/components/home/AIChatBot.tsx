
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
    question: "what is dievektor",
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
    answer: "You can reach our team through our contact page or by emailing dievektor@gmail.com. We're also available via phone at +919404895667 during regular business hours. We'd love to discuss your project requirements!"
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
  },
  {
    "question": "What services do you offer?",
    "answer": "We offer a wide range of digital solutions, including custom website development, e-commerce solutions, SEO optimization, UI/UX design, web hosting, WordPress development, mobile app development, and API integration."
  },
  {
    "question": "What is your technology stack?",
    "answer": "Our technology stack includes modern frameworks and tools such as:\n• Frontend: React, Vue.js, Next.js\n• Backend: Node.js, Python, Go\n• Mobile: React Native, Flutter\n• Databases: MongoDB, PostgreSQL\n• Cloud: AWS, Google Cloud, Azure\n• CMS: WordPress, Strapi, Contentful"
  },
  {
    "question": "How long does it take to build a website?",
    "answer": "The timeline depends on the complexity of the website. A simple website takes 2-4 weeks, while complex applications can take 2-3 months. We provide a detailed timeline after understanding your requirements."
  },
  {
    "question": "Do you offer e-commerce development?",
    "answer": "Yes, we specialize in e-commerce solutions, creating online stores with secure payment processing, inventory management, and a seamless shopping experience."
  },
  {
    "question": "Can you improve my website's SEO?",
    "answer": "Absolutely! We offer comprehensive SEO services, including on-page optimization, keyword research, technical SEO, and link-building strategies to improve your search rankings."
  },
  {
    "question": "What industries do you serve?",
    "answer": "We have worked with clients from various industries, including finance, healthcare, education, retail, and technology."
  },
  {
    "question": "Do you provide ongoing maintenance?",
    "answer": "Yes, we offer web hosting and ongoing maintenance services to ensure your website remains secure, fast, and up to date with the latest technologies."
  },
  {
    "question": "What is your approach to UI/UX design?",
    "answer": "Our design approach is user-centered, focusing on intuitive, engaging, and conversion-optimized interfaces that provide a seamless user experience."
  },
  {
    "question": "Do you develop custom WordPress websites?",
    "answer": "Yes, we build custom WordPress solutions, from blogs to complex applications and e-commerce stores, using tailored themes and plugins."
  },
  {
    "question": "Can you build a mobile app for my business?",
    "answer": "Yes, we develop native and cross-platform mobile applications that provide seamless experiences on iOS and Android devices."
  },
  {
    "question": "Do you offer API development and integration?",
    "answer": "Yes, we develop custom APIs and integrate third-party services to enhance your system's functionality and improve efficiency."
  },
  {
    "question": "What is your project development process?",
    "answer": "Our process includes discovery, strategy, design, development, testing, launch, and ongoing support to ensure the best results."
  },
  {
    "question": "Do you provide cloud solutions?",
    "answer": "Yes, we offer cloud-based solutions using AWS, Google Cloud, and Azure for scalability and performance."
  },
  {
    "question": "How do you ensure website security?",
    "answer": "We implement best security practices, including SSL encryption, firewalls, regular updates, and secure coding techniques."
  },
  {
    "question": "Can I update my website content myself?",
    "answer": "Yes, we can integrate a CMS like WordPress or Strapi, allowing you to manage and update your website content easily."
  },
  {
    "question": "Do you provide analytics and tracking?",
    "answer": "Yes, we set up Google Analytics and other tracking tools to monitor website performance and user behavior."
  },
  {
    "question": "How much does a website cost?",
    "answer": "Pricing depends on the complexity and features required. We provide customized quotes based on your specific needs."
  },
  {
    "question": "Do you offer website redesign services?",
    "answer": "Yes, we offer website redesign services to improve aesthetics, performance, and user experience while maintaining your brand identity."
  },
  {
    "question": "What is your approach to responsive design?",
    "answer": "We ensure that all our websites are fully responsive, providing an optimal user experience on desktops, tablets, and mobile devices."
  },
  {
    "question": "Do you work with startups?",
    "answer": "Yes, we love working with startups, helping them build their digital presence with innovative solutions and cost-effective strategies."
  },
  {
    "question": "Can you help with branding?",
    "answer": "Yes, we offer branding services, including logo design, brand identity, and digital strategy to enhance your online presence."
  },
  {
    "question": "What payment gateways do you integrate?",
    "answer": "We integrate popular payment gateways like PayPal, Stripe, Razorpay, and others for secure and seamless transactions."
  },
  {
    "question": "Do you offer hosting services?",
    "answer": "Yes, we provide reliable web hosting services to ensure your website runs smoothly with high uptime and security."
  },
  {
    "question": "What is your experience with AI/ML?",
    "answer": "We integrate AI-powered solutions, including chatbots, recommendation systems, and data analytics, to enhance digital experiences."
  },
  {
    "question": "How do you handle website scalability?",
    "answer": "We use scalable architectures and cloud services like AWS and Azure to ensure your website can handle growing traffic demands."
  },
  {
    "question": "What coding standards do you follow?",
    "answer": "We follow industry best practices, including clean code, modular development, and security standards for high-quality software."
  },
  {
    "question": "Can you integrate third-party tools?",
    "answer": "Yes, we can integrate various third-party tools, such as CRMs, marketing automation, and analytics tools, to enhance functionality."
  },
  {
    "question": "How do you handle project communication?",
    "answer": "We maintain transparent communication via emails, video calls, and project management tools like Trello, Slack, and Jira."
  },
  {
    "question": "Do you offer performance optimization?",
    "answer": "Yes, we optimize websites for speed, including caching, image optimization, and code minification to ensure fast load times."
  },
  {
    "question": "What is your refund policy?",
    "answer": "Our refund policy depends on project milestones and agreements. We ensure fair terms and customer satisfaction in every engagement."
  },
  {
    "question": "How do I get started?",
    "answer": "Simply contact us via our website, email, or phone, and we'll discuss your project requirements and get started!"
  },
  {
    "question": "Who is the founder of dieVektor?",
    "answer": "dieVektor was founded by Pruthviraj Chavan with  team of passionate tech enthusiasts with a vision to revolutionize digital experiences through innovative and scalable solutions."
  },
  {
    "question": "When was dieVektor founded?",
    "answer": "dieVektor was established in [Year], with a mission to provide high-quality digital solutions to businesses of all sizes."
  },
  {
    "question": "What is the vision of dieVektor?",
    "answer": "Our vision is to empower businesses with cutting-edge digital solutions, driving growth and innovation through technology."
  },
  {
    "question": "What industries does dieVektor serve?",
    "answer": "We serve a diverse range of industries, including finance, healthcare, e-commerce, education, and technology."
  },
  {
    "question": "Where is dieVektor located?",
    "answer": "dieVektor is headquartered in [Location], but we work with clients globally, providing digital solutions tailored to their needs."
  },
  {
    "question": "What makes dieVektor unique?",
    "answer": "Our commitment to innovation, user-centric design, and cutting-edge technology sets us apart in the digital solutions industry."
  },
  {
    "question": "What services does dieVektor provide?",
    "answer": "We offer web development, mobile app development, UI/UX design, SEO optimization, cloud solutions, and API integrations."
  },
  {
    "question": "What is the mission of dieVektor?",
    "answer": "Our mission is to deliver high-quality, scalable, and secure digital solutions that help businesses thrive in the digital landscape."
  },
  {
    "question": "What technologies does dieVektor specialize in?",
    "answer": "We specialize in React, Next.js, Node.js, Python, Go, Flutter, AWS, Google Cloud, and WordPress for custom digital solutions."
  },
  {
    "question": "How does dieVektor ensure project quality?",
    "answer": "We follow industry best practices, rigorous testing, and agile methodologies to ensure the highest quality in every project."
  },
  {
    "question": "Does dieVektor work with startups?",
    "answer": "Yes, we love working with startups, helping them build a strong digital foundation with innovative and cost-effective solutions."
  },
  {
    "question": "How does dieVektor approach customer satisfaction?",
    "answer": "We prioritize transparent communication, personalized solutions, and ongoing support to ensure complete customer satisfaction."
  },
  {
    "question": "How can I contact dieVektor?",
    "answer": "You can reach us through our website, email, or phone. Visit our contact page for more details."
  },
  {
    "question": "What is dieVektor’s work culture like?",
    "answer": "Our work culture is innovation-driven, collaborative, and focused on continuous learning and growth."
  },
  {
    "question": "Does dieVektor offer remote services?",
    "answer": "Yes, we work with clients worldwide and provide remote digital solutions tailored to their needs."
  },
  {
    "question": "What is dieVektor’s approach to problem-solving?",
    "answer": "We use a strategic and data-driven approach, ensuring that our solutions are efficient, scalable, and future-proof."
  },
  {
    "question": "What kind of clients does dieVektor work with?",
    "answer": "We work with startups, SMEs, and enterprises across various industries, providing tailored digital solutions."
  },
  {
    "question": "What values does dieVektor stand for?",
    "answer": "We stand for innovation, transparency, excellence, and customer-centric solutions that drive real business impact."
  },
  {
    "question": "Does dieVektor have any partnerships?",
    "answer": "Yes, we collaborate with leading technology providers, cloud platforms, and industry experts to deliver the best solutions."
  },
  {
    "question": "What is dieVektor’s future goal?",
    "answer": "Our goal is to continue pushing the boundaries of technology, helping businesses succeed in an ever-evolving digital world."
  },
  {
    "question": "Founder",
    "answer": "dieVektor was founded by Pruthviraj Chavan a team of passionate tech enthusiasts with a vision to revolutionize digital experiences."
  },
  {
    "question": "Established",
    "answer": "dieVektor was established in 2024 with a mission to provide high-quality digital solutions."
  },
  {
    "question": "Vision",
    "answer": "Our vision is to empower businesses with cutting-edge digital solutions, driving growth and innovation through technology."
  },
  {
    "question": "Industries",
    "answer": "We serve finance, healthcare, e-commerce, education, and technology industries."
  },
  {
    "question": "Location",
    "answer": "dieVektor is headquartered in Kolhapur but works with global clients."
  },
  {
    "question": "Uniqueness",
    "answer": "Our commitment to innovation, user-centric design, and advanced technology makes us unique."
  },
  {
    "question": "Services",
    "answer": "We offer web development, mobile apps, UI/UX design, SEO, cloud solutions, and API integrations."
  },
  {
    "question": "Mission",
    "answer": "We aim to deliver high-quality, scalable, and secure digital solutions for businesses."
  },
  {
    "question": "Technologies",
    "answer": "We specialize in React, Next.js, Node.js, Python, Go, Flutter, AWS, and Google Cloud."
  },
  {
    "question": "Quality",
    "answer": "We ensure high quality through agile methodologies, rigorous testing, and industry best practices."
  },
  {
    "question": "Startups",
    "answer": "Yes, we work with startups to build strong digital foundations with cost-effective solutions."
  },
  {
    "question": "Satisfaction",
    "answer": "We prioritize transparency, personalized solutions, and ongoing support for complete client satisfaction."
  },
  {
    "question": "Contact",
    "answer": "Reach us via our website, email, or phone. Visit our contact page for details."
  },
  {
    "question": "Culture",
    "answer": "Our work culture is innovation-driven, collaborative, and focused on continuous learning."
  },
  {
    "question": "Remote",
    "answer": "Yes, we provide remote digital solutions for clients worldwide."
  },
  {
    "question": "Problem-solving",
    "answer": "We use strategic, data-driven approaches for scalable and efficient solutions."
  },
  {
    "question": "Clients",
    "answer": "We work with startups, SMEs, and enterprises across various industries."
  },
  {
    "question": "Values",
    "answer": "We stand for innovation, transparency, excellence, and customer-centric solutions."
  },
  {
    "question": "Partnerships",
    "answer": "We collaborate with top technology providers, cloud platforms, and industry experts."
  },
  {
    "question": "Future",
    "answer": "Our goal is to push technological boundaries and help businesses thrive in the digital world."
  },
    {
    "question": "Founder | CEO",
    "answer": "dieVektor was founded by Pruthviraj Chavan"
  },
  {
    "question": "Established | Year",
    "answer": "dieVektor was established in 2024 with a mission to provide high-quality digital solutions."
  },
  {
    "question": "Vision | Goal",
    "answer": "Our vision is to empower businesses with cutting-edge digital solutions, driving growth and innovation through technology."
  },
  {
    "question": "Industries | Sectors",
    "answer": "We serve finance, healthcare, e-commerce, education, and technology industries."
  },
  {
    "question": "Location | Office",
    "answer": "dieVektor is headquartered in kolhapur but works with global clients."
  },
  {
    "question": "Uniqueness | Speciality",
    "answer": "Our commitment to innovation, user-centric design, and advanced technology makes us unique."
  },
  {
    "question": "Services | Offerings",
    "answer": "We offer web development, mobile apps, UI/UX design, SEO, cloud solutions, and API integrations."
  },
  {
    "question": "Mission | Purpose",
    "answer": "We aim to deliver high-quality, scalable, and secure digital solutions for businesses."
  },
  {
    "question": "Tech | Tech Stack",
    "answer": "We specialize in React, Next.js, Node.js, Python, Go, Flutter, AWS, and Google Cloud."
  },
  {
    "question": "Quality | Standards",
    "answer": "We ensure high quality through agile methodologies, rigorous testing, and industry best practices."
  },
  {
    "question": "Startups | New Business",
    "answer": "Yes, we work with startups to build strong digital foundations with cost-effective solutions."
  },
  {
    "question": "Satisfaction | Customer Care",
    "answer": "We prioritize transparency, personalized solutions, and ongoing support for complete client satisfaction."
  },
  {
    "question": "Contact | Reach Us",
    "answer": "Reach us via our website, email, or phone. Visit our contact page for details."
  },
  {
    "question": "Culture | Environment",
    "answer": "Our work culture is innovation-driven, collaborative, and focused on continuous learning."
  },
  {
    "question": "Remote | Work From Home",
    "answer": "Yes, we provide remote digital solutions for clients worldwide."
  },
  {
    "question": "Problem-solving | Solutions",
    "answer": "We use strategic, data-driven approaches for scalable and efficient solutions."
  },
  {
    "question": "Clients | Customers",
    "answer": "We work with startups, SMEs, and enterprises across various industries."
  },
  {
    "question": "Values | Principles",
    "answer": "We stand for innovation, transparency, excellence, and customer-centric solutions."
  },
  {
    "question": "Partnerships | Collaborations",
    "answer": "We collaborate with top technology providers, cloud platforms, and industry experts."
  },
  {
    "question": "Future | Roadmap",
    "answer": "Our goal is to push technological boundaries and help businesses thrive in the digital world."
  },
  {
    "question": "Security | Data Protection",
    "answer": "We implement top-tier security measures, including encryption, compliance, and best practices."
  },
  {
    "question": "Speed | Performance",
    "answer": "Our solutions are optimized for high performance, scalability, and efficiency."
  },
  {
    "question": "Cost | Pricing",
    "answer": "Pricing depends on project complexity and requirements. Contact us for a custom quote."
  },
  {
    "question": "Support | Maintenance",
    "answer": "We provide ongoing support, maintenance, and updates to ensure smooth operation."
  },
  {
    "question": "Integration | Compatibility",
    "answer": "We ensure seamless integration with existing tools, APIs, and platforms."
  },
  {
    "question": "Scalability | Growth",
    "answer": "Our solutions are built to scale with your business needs."
  },
  {
    "question": "AI | Machine Learning",
    "answer": "We implement AI-driven solutions, including automation, recommendation engines, and predictive analytics."
  },
  {
    "question": "Cloud | Hosting",
    "answer": "We work with AWS, Google Cloud, and Azure for cloud solutions and hosting."
  },
  {
    "question": "Database | Storage",
    "answer": "We use MySQL, PostgreSQL, MongoDB, and Firebase for data storage solutions."
  },
  {
    "question": "Framework | Libraries",
    "answer": "We use frameworks like React, Angular, Vue, and backend tools like Django, Flask, and .NET."
  },
  {
    "question": "UI/UX | Design",
    "answer": "We prioritize user-friendly, modern, and responsive designs for the best user experience."
  },
  {
    "question": "APIs | Development",
    "answer": "We develop secure and scalable RESTful and GraphQL APIs."
  },
  {
    "question": "Testing | QA",
    "answer": "We follow rigorous testing processes including unit, integration, and automated testing."
  },
  {
    "question": "Blockchain | Web3",
    "answer": "We provide blockchain and smart contract development for secure transactions."
  },
  {
    "question": "Automation | DevOps",
    "answer": "We offer CI/CD, automated deployments, and DevOps solutions."
  },
    {
    "question": "AI | Artificial Intelligence",
    "answer": "We develop AI-driven solutions including automation, predictive analytics, and intelligent decision-making systems."
  },
  {
    "question": "ML | Machine Learning",
    "answer": "Our ML solutions include recommendation systems, fraud detection, and pattern recognition using supervised and unsupervised learning."
  },
  {
    "question": "Deep Learning | Neural Networks",
    "answer": "We use deep learning techniques like CNNs and RNNs for image processing, NLP, and AI-driven applications."
  },
  {
    "question": "NLP | Natural Language Processing",
    "answer": "We develop NLP solutions for text analysis, sentiment detection, chatbots, and automated translations."
  },
  {
    "question": "AI Models | Training",
    "answer": "We train AI models using TensorFlow, PyTorch, and Scikit-learn, ensuring optimized performance and accuracy."
  },
  {
    "question": "Computer Vision | Image Processing",
    "answer": "Our computer vision solutions include facial recognition, object detection, and image classification."
  },
  {
    "question": "AI Ethics | Responsible AI",
    "answer": "We follow ethical AI practices, ensuring fairness, transparency, and bias mitigation in AI systems."
  },
  {
    "question": "Reinforcement Learning | RL",
    "answer": "We implement reinforcement learning for robotics, game AI, and decision-making models."
  },
  {
    "question": "Algorithms | Optimization",
    "answer": "We design and optimize algorithms for data processing, automation, and AI model efficiency."
  },
  {
    "question": "Recommendation | Personalization",
    "answer": "We build AI-powered recommendation engines for e-commerce, content platforms, and personalized user experiences."
  },
  {
    "question": "AI in Healthcare | MedTech",
    "answer": "Our AI solutions assist in medical diagnosis, drug discovery, and patient monitoring."
  },
  {
    "question": "AI in Finance | FinTech",
    "answer": "We provide AI-powered fraud detection, risk assessment, and automated trading strategies."
  },
  {
    "question": "Chatbots | Virtual Assistants",
    "answer": "We develop AI chatbots using NLP for customer service, automation, and support systems."
  },
  {
    "question": "Data Science | Analytics",
    "answer": "We apply AI-driven analytics for business intelligence, forecasting, and trend detection."
  },
  {
    "question": "Big Data | AI Scalability",
    "answer": "We use AI to process large datasets efficiently, leveraging cloud computing and distributed computing techniques."
  },
  {
    "question": "GANs | Generative AI",
    "answer": "We work with Generative Adversarial Networks (GANs) for AI-generated images, videos, and text."
  },
  {
    "question": "AI Security | Threat Detection",
    "answer": "We develop AI-powered cybersecurity solutions for anomaly detection and threat prevention."
  },
  {
    "question": "AI in Robotics | Automation",
    "answer": "We implement AI in robotics for autonomous systems, smart automation, and industrial applications."
  },
  {
    "question": "Speech Recognition | Voice AI",
    "answer": "We develop voice-enabled applications using AI-powered speech recognition and synthesis."
  },
  {
    "question": "Anomaly Detection | Fraud Prevention",
    "answer": "We build AI-driven fraud detection systems for finance, cybersecurity, and anomaly detection."
  },
  {
    "question": "Predictive Analytics | Forecasting",
    "answer": "Our AI models analyze data to forecast trends, demand, and risks for businesses."
  },
  {
    "question": "AI Edge Computing | IoT",
    "answer": "We integrate AI with edge computing and IoT for real-time decision-making and automation."
  },
  {
    "question": "Explainable AI | Model Interpretability",
    "answer": "We ensure AI transparency by implementing explainable AI techniques for decision interpretation."
  },
  {
    "question": "AI Deployment | MLOps",
    "answer": "We streamline AI model deployment using MLOps, CI/CD pipelines, and cloud integration."
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
        content: "👋 Hi there! I'm your dievektor assistant. How can I help you today?",
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
