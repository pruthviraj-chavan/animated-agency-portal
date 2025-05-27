
import React, { useEffect, useState } from 'react';
import { Brain, MessageSquare, Zap, Database, Settings, ArrowRight } from 'lucide-react';

interface Node {
  id: string;
  x: number;
  y: number;
  icon: React.ComponentType<any>;
  label: string;
  color: string;
  active: boolean;
}

interface Connection {
  from: string;
  to: string;
  active: boolean;
  progress: number;
}

const nodes: Node[] = [
  { id: 'input', x: 10, y: 50, icon: MessageSquare, label: 'Input Agent', color: 'from-blue-500 to-cyan-600', active: false },
  { id: 'analyzer', x: 35, y: 20, icon: Brain, label: 'Analyzer', color: 'from-purple-500 to-indigo-600', active: false },
  { id: 'processor', x: 65, y: 30, icon: Settings, label: 'Processor', color: 'from-orange-500 to-red-600', active: false },
  { id: 'database', x: 35, y: 80, icon: Database, label: 'Knowledge Base', color: 'from-green-500 to-emerald-600', active: false },
  { id: 'output', x: 90, y: 60, icon: Zap, label: 'Output Agent', color: 'from-pink-500 to-rose-600', active: false },
];

const connections: Connection[] = [
  { from: 'input', to: 'analyzer', active: false, progress: 0 },
  { from: 'input', to: 'database', active: false, progress: 0 },
  { from: 'analyzer', to: 'processor', active: false, progress: 0 },
  { from: 'database', to: 'processor', active: false, progress: 0 },
  { from: 'processor', to: 'output', active: false, progress: 0 },
];

export function AIWorkflowAnimation() {
  const [animatedNodes, setAnimatedNodes] = useState(nodes);
  const [animatedConnections, setAnimatedConnections] = useState(connections);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const sequence = [
      { nodeIds: ['input'], connectionIds: [] },
      { nodeIds: ['input'], connectionIds: ['input-analyzer', 'input-database'] },
      { nodeIds: ['input', 'analyzer', 'database'], connectionIds: ['input-analyzer', 'input-database'] },
      { nodeIds: ['analyzer', 'database'], connectionIds: ['analyzer-processor', 'database-processor'] },
      { nodeIds: ['analyzer', 'database', 'processor'], connectionIds: ['analyzer-processor', 'database-processor'] },
      { nodeIds: ['processor'], connectionIds: ['processor-output'] },
      { nodeIds: ['processor', 'output'], connectionIds: ['processor-output'] },
      { nodeIds: [], connectionIds: [] },
    ];

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % sequence.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sequence = [
      { nodeIds: ['input'], connectionIds: [] },
      { nodeIds: ['input'], connectionIds: ['input-analyzer', 'input-database'] },
      { nodeIds: ['input', 'analyzer', 'database'], connectionIds: ['input-analyzer', 'input-database'] },
      { nodeIds: ['analyzer', 'database'], connectionIds: ['analyzer-processor', 'database-processor'] },
      { nodeIds: ['analyzer', 'database', 'processor'], connectionIds: ['analyzer-processor', 'database-processor'] },
      { nodeIds: ['processor'], connectionIds: ['processor-output'] },
      { nodeIds: ['processor', 'output'], connectionIds: ['processor-output'] },
      { nodeIds: [], connectionIds: [] },
    ];

    const currentSequence = sequence[currentStep];

    setAnimatedNodes(nodes.map(node => ({
      ...node,
      active: currentSequence.nodeIds.includes(node.id)
    })));

    setAnimatedConnections(connections.map(conn => {
      const connectionId = `${conn.from}-${conn.to}`;
      return {
        ...conn,
        active: currentSequence.connectionIds.includes(connectionId),
        progress: currentSequence.connectionIds.includes(connectionId) ? 100 : 0
      };
    }));
  }, [currentStep]);

  const getNodePosition = (nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  const generatePath = (from: string, to: string) => {
    const fromPos = getNodePosition(from);
    const toPos = getNodePosition(to);
    
    const midX = (fromPos.x + toPos.x) / 2;
    const midY = (fromPos.y + toPos.y) / 2 - 10;
    
    return `M ${fromPos.x} ${fromPos.y} Q ${midX} ${midY} ${toPos.x} ${toPos.y}`;
  };

  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-background/60 to-muted/30 rounded-xl border border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/5 via-agency-blue/5 to-agency-pink/5"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.8"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {animatedConnections.map((connection, index) => (
          <g key={`${connection.from}-${connection.to}`}>
            <path
              d={generatePath(connection.from, connection.to)}
              stroke="url(#connectionGradient)"
              strokeWidth="0.5"
              fill="none"
              opacity={connection.active ? 1 : 0.2}
              filter={connection.active ? "url(#glow)" : "none"}
              className="transition-all duration-500"
            />
            {connection.active && (
              <circle r="0.8" fill="rgb(59, 130, 246)" filter="url(#glow)">
                <animateMotion
                  dur="1s"
                  repeatCount="1"
                  path={generatePath(connection.from, connection.to)}
                />
              </circle>
            )}
          </g>
        ))}
      </svg>

      {/* Nodes */}
      {animatedNodes.map((node) => (
        <div
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
            node.active ? 'scale-110' : 'scale-100'
          }`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        >
          <div
            className={`relative w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-500 bg-gradient-to-r ${node.color} ${
              node.active ? 'animate-pulse shadow-xl' : ''
            }`}
          >
            <node.icon size={20} />
            {node.active && (
              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
            )}
          </div>
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-xs font-medium text-muted-foreground whitespace-nowrap">
            {node.label}
          </div>
        </div>
      ))}

      {/* Flow indicators */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-xs text-muted-foreground">Data Flow</span>
        </div>
        <ArrowRight className="w-3 h-3 text-muted-foreground" />
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <span className="text-xs text-muted-foreground">Processing</span>
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute top-4 left-4">
        <h3 className="text-sm font-semibold text-foreground">AI Agent Collaboration</h3>
        <p className="text-xs text-muted-foreground">Real-time workflow automation</p>
      </div>
    </div>
  );
}
