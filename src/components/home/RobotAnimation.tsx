
import React, { useEffect, useState } from 'react';
import { Coffee, Laptop, Phone, Mail, MessageSquare, Calendar, Bot, Sparkles, Zap, Brain, Clock, CheckCircle } from 'lucide-react';

interface RobotAction {
  id: string;
  icon: React.ComponentType<any>;
  action: string;
  description: string;
  position: { x: number; y: number };
  active: boolean;
  color: string;
}

const robotActions: RobotAction[] = [
  { 
    id: 'coffee', 
    icon: Coffee, 
    action: 'Making Coffee', 
    description: 'Brewing the perfect cup',
    position: { x: 15, y: 25 }, 
    active: false,
    color: 'from-amber-500 to-orange-600'
  },
  { 
    id: 'laptop', 
    icon: Laptop, 
    action: 'Coding Projects', 
    description: 'Writing efficient algorithms',
    position: { x: 85, y: 30 }, 
    active: false,
    color: 'from-blue-500 to-cyan-600'
  },
  { 
    id: 'phone', 
    icon: Phone, 
    action: 'Taking Calls', 
    description: 'Handling customer inquiries',
    position: { x: 20, y: 75 }, 
    active: false,
    color: 'from-green-500 to-emerald-600'
  },
  { 
    id: 'mail', 
    icon: Mail, 
    action: 'Managing Emails', 
    description: 'Smart correspondence handling',
    position: { x: 80, y: 70 }, 
    active: false,
    color: 'from-purple-500 to-violet-600'
  },
  { 
    id: 'chat', 
    icon: MessageSquare, 
    action: 'Customer Support', 
    description: 'Engaging in conversations',
    position: { x: 50, y: 15 }, 
    active: false,
    color: 'from-pink-500 to-rose-600'
  },
  { 
    id: 'calendar', 
    icon: Calendar, 
    action: 'Scheduling Tasks', 
    description: 'Organizing appointments',
    position: { x: 50, y: 85 }, 
    active: false,
    color: 'from-indigo-500 to-blue-600'
  }
];

export function RobotAnimation() {
  const [currentAction, setCurrentAction] = useState(0);
  const [animatedActions, setAnimatedActions] = useState(robotActions);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAction((prev) => (prev + 1) % robotActions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAnimatedActions(robotActions.map((action, index) => ({
      ...action,
      active: index === currentAction
    })));
  }, [currentAction]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 animate-pulse"></div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-pulse rounded-full ${
              i % 5 === 0 ? 'bg-blue-400 w-2 h-2' :
              i % 5 === 1 ? 'bg-purple-400 w-3 h-3' :
              i % 5 === 2 ? 'bg-cyan-400 w-1 h-1' :
              i % 5 === 3 ? 'bg-pink-400 w-4 h-4' :
              'bg-indigo-400 w-1.5 h-1.5'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Dynamic orbs */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-bounce opacity-60"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute top-1/3 right-32 w-32 h-32 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 rounded-full blur-xl animate-ping opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 backdrop-blur-sm mb-6">
            <Bot className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">
              AI-Powered Automation
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white block mb-2">AI Doing</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Human Things
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch our AI agents seamlessly handle everyday tasks with human-like intelligence 
            and efficiency, revolutionizing how work gets done.
          </p>
        </div>

        {/* Main Animation Section */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Central Device */}
            <div className="relative z-20">
              {/* Phone/Device Body */}
              <div className="w-32 h-56 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-2xl relative overflow-hidden border border-slate-600/50">
                {/* Screen */}
                <div className="w-28 h-48 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-xl mx-auto mt-2 relative overflow-hidden">
                  {/* Screen Content */}
                  <div className="absolute inset-2 bg-slate-900/80 rounded-lg flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-2 animate-pulse">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xs text-blue-300 font-medium">
                      {animatedActions[currentAction]?.action}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 text-center">
                      {animatedActions[currentAction]?.description}
                    </div>
                  </div>
                  
                  {/* Screen glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-400/10 to-purple-400/10 animate-pulse"></div>
                </div>
                
                {/* Device Details */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-slate-600 rounded-full"></div>
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-slate-700 rounded-full"></div>
              </div>
            </div>

            {/* Action Icons with Enhanced Animation */}
            {animatedActions.map((action, index) => {
              const ActionIcon = action.icon;
              const isActive = action.active;
              
              return (
                <div
                  key={action.id}
                  className={`absolute transition-all duration-1000 ${
                    isActive ? 'scale-125 z-30' : 'scale-100 z-10'
                  }`}
                  style={{
                    left: `${action.position.x}%`,
                    top: `${action.position.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {/* Connection Line */}
                  {isActive && (
                    <svg 
                      className="absolute pointer-events-none"
                      style={{
                        left: '50%',
                        top: '50%',
                        width: '400px',
                        height: '400px',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1
                      }}
                    >
                      <defs>
                        <linearGradient id={`gradient-${action.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8"/>
                          <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.8"/>
                        </linearGradient>
                      </defs>
                      <line
                        x1="200"
                        y1="200"
                        x2={200 + (50 - action.position.x) * 3}
                        y2={200 + (50 - action.position.y) * 3}
                        stroke={`url(#gradient-${action.id})`}
                        strokeWidth="3"
                        className="animate-pulse"
                        strokeDasharray="5,5"
                      />
                    </svg>
                  )}

                  {/* Icon Container */}
                  <div className={`relative p-4 rounded-2xl shadow-2xl transition-all duration-500 backdrop-blur-sm border ${
                    isActive 
                      ? `bg-gradient-to-r ${action.color} text-white animate-pulse shadow-2xl border-white/20` 
                      : 'bg-slate-800/60 text-slate-400 border-slate-600/30 hover:bg-slate-700/60'
                  }`}>
                    <ActionIcon className="w-8 h-8" />
                    
                    {/* Floating indicators */}
                    {isActive && (
                      <>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
                      </>
                    )}
                  </div>
                  
                  {/* Action Label with enhanced styling */}
                  <div className={`absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 ${
                    isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-70 scale-90 translate-y-2'
                  }`}>
                    <div className={`backdrop-blur-sm rounded-lg px-3 py-2 border ${
                      isActive 
                        ? 'bg-white/10 border-white/20 text-white' 
                        : 'bg-slate-800/40 border-slate-600/30 text-slate-300'
                    }`}>
                      <p className="text-sm font-semibold whitespace-nowrap">{action.action}</p>
                      <p className="text-xs opacity-80 whitespace-nowrap">{action.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Central Status Display */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-12">
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-2xl min-w-80">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-sm text-slate-400">Currently Active:</p>
                  </div>
                  <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                    {animatedActions[currentAction]?.action}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="flex justify-center gap-2 mb-4">
                    {robotActions.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === currentAction ? 'w-8 bg-blue-400' : 'w-2 bg-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-400">99.9%</div>
                      <div className="text-xs text-slate-500">Uptime</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-400">24/7</div>
                      <div className="text-xs text-slate-500">Available</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-400">∞</div>
                      <div className="text-xs text-slate-500">Scalable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group text-center p-8 rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Human-like Efficiency</h3>
            <p className="text-slate-300 leading-relaxed">Our AI agents perform tasks with the same care and attention as human workers, but with superhuman consistency and speed.</p>
          </div>
          
          <div className="group text-center p-8 rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-slate-700/30 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">24/7 Availability</h3>
            <p className="text-slate-300 leading-relaxed">Never sleep, never tire - our robots work around the clock to serve your needs, ensuring continuous productivity.</p>
          </div>
          
          <div className="group text-center p-8 rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-slate-700/30 hover:border-pink-500/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Smart Learning</h3>
            <p className="text-slate-300 leading-relaxed">Continuously improving through machine learning and adaptive algorithms, becoming smarter with every interaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
