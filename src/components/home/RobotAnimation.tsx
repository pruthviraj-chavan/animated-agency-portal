
import React, { useEffect, useState } from 'react';
import { Coffee, Laptop, Phone, Mail, MessageSquare, Calendar } from 'lucide-react';

interface RobotAction {
  id: string;
  icon: React.ComponentType<any>;
  action: string;
  description: string;
  position: { x: number; y: number };
  active: boolean;
}

const robotActions: RobotAction[] = [
  { 
    id: 'coffee', 
    icon: Coffee, 
    action: 'Making Coffee', 
    description: 'Brewing the perfect cup',
    position: { x: 15, y: 30 }, 
    active: false 
  },
  { 
    id: 'laptop', 
    icon: Laptop, 
    action: 'Coding', 
    description: 'Writing efficient algorithms',
    position: { x: 85, y: 25 }, 
    active: false 
  },
  { 
    id: 'phone', 
    icon: Phone, 
    action: 'Taking Calls', 
    description: 'Handling customer inquiries',
    position: { x: 20, y: 70 }, 
    active: false 
  },
  { 
    id: 'mail', 
    icon: Mail, 
    action: 'Sending Emails', 
    description: 'Managing correspondence',
    position: { x: 80, y: 75 }, 
    active: false 
  },
  { 
    id: 'chat', 
    icon: MessageSquare, 
    action: 'Chatting', 
    description: 'Engaging in conversations',
    position: { x: 50, y: 20 }, 
    active: false 
  },
  { 
    id: 'calendar', 
    icon: Calendar, 
    action: 'Scheduling', 
    description: 'Organizing appointments',
    position: { x: 45, y: 80 }, 
    active: false 
  }
];

export function RobotAnimation() {
  const [currentAction, setCurrentAction] = useState(0);
  const [animatedActions, setAnimatedActions] = useState(robotActions);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAction((prev) => (prev + 1) % robotActions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAnimatedActions(robotActions.map((action, index) => ({
      ...action,
      active: index === currentAction
    })));
  }, [currentAction]);

  return (
    <section className="py-20 bg-background/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/5 via-agency-blue/5 to-agency-pink/5"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            AI Doing Human Things
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our AI agents seamlessly handle everyday tasks with human-like intelligence and efficiency
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Robot */}
          <div className="relative w-full h-96 flex items-center justify-center">
            {/* Robot Body */}
            <div className="relative">
              <div className="w-24 h-32 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-xl relative overflow-hidden">
                {/* Robot Screen/Face */}
                <div className="w-16 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-md mx-auto mt-4 flex items-center justify-center">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
                
                {/* Robot Arms */}
                <div className="absolute -left-4 top-8 w-3 h-12 bg-gray-400 rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
                <div className="absolute -right-4 top-8 w-3 h-12 bg-gray-400 rounded-full animate-bounce" style={{ animationDuration: '2s', animationDelay: '1s' }}></div>
                
                {/* Status Light */}
                <div className={`absolute top-2 right-2 w-3 h-3 rounded-full transition-colors duration-500 ${
                  animatedActions[currentAction]?.active ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                }`}></div>
              </div>
              
              {/* Robot Base */}
              <div className="w-20 h-6 bg-gray-600 rounded-full mx-auto -mt-2 shadow-lg"></div>
            </div>

            {/* Action Icons */}
            {animatedActions.map((action, index) => {
              const ActionIcon = action.icon;
              return (
                <div
                  key={action.id}
                  className={`absolute transition-all duration-1000 ${
                    action.active ? 'scale-125 opacity-100' : 'scale-100 opacity-60'
                  }`}
                  style={{
                    left: `${action.position.x}%`,
                    top: `${action.position.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className={`relative p-4 rounded-full shadow-lg transition-all duration-500 ${
                    action.active 
                      ? 'bg-gradient-to-r from-primary to-purple-600 text-white animate-pulse shadow-xl' 
                      : 'bg-background/80 text-muted-foreground'
                  }`}>
                    <ActionIcon className="w-6 h-6" />
                    
                    {/* Connection Line */}
                    {action.active && (
                      <svg 
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        style={{
                          left: '50%',
                          top: '50%',
                          width: '200px',
                          height: '200px',
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        <line
                          x1="100"
                          y1="100"
                          x2={100 + (50 - action.position.x) * 2}
                          y2={100 + (48 - action.position.y) * 2}
                          stroke="url(#connectionGradient)"
                          strokeWidth="2"
                          className="animate-pulse"
                        />
                        <defs>
                          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.8"/>
                            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    )}
                  </div>
                  
                  {/* Action Label */}
                  <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 ${
                    action.active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>
                    <p className="text-sm font-semibold text-foreground whitespace-nowrap">{action.action}</p>
                    <p className="text-xs text-muted-foreground whitespace-nowrap">{action.description}</p>
                  </div>
                </div>
              );
            })}

            {/* Central Status Display */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-8">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-border/50 shadow-lg min-w-64">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Currently Active:</p>
                  <p className="text-lg font-semibold text-gradient">
                    {animatedActions[currentAction]?.action}
                  </p>
                  <div className="flex justify-center mt-2">
                    {robotActions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 transition-colors duration-300 ${
                          index === currentAction ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Human-like Efficiency</h3>
            <p className="text-muted-foreground text-sm">Our AI agents perform tasks with the same care and attention as human workers.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Laptop className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
            <p className="text-muted-foreground text-sm">Never sleep, never tire - our robots work around the clock to serve your needs.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Learning</h3>
            <p className="text-muted-foreground text-sm">Continuously improving through machine learning and adaptive algorithms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
