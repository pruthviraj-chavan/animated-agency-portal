import React, { useEffect, useState } from "react";
import { ArrowRight, Brain, Database, MessageSquare, Settings, Zap } from "lucide-react";

type Node = {
  id: string;
  x: number;
  y: number;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

const nodes: Node[] = [
  { id: "input", x: 10, y: 50, icon: MessageSquare, label: "Input Agent" },
  { id: "analyzer", x: 36, y: 22, icon: Brain, label: "Analyzer" },
  { id: "database", x: 36, y: 78, icon: Database, label: "Knowledge Base" },
  { id: "processor", x: 64, y: 34, icon: Settings, label: "Processor" },
  { id: "output", x: 90, y: 56, icon: Zap, label: "Output Agent" },
];

const connections = [
  { from: "input", to: "analyzer" },
  { from: "input", to: "database" },
  { from: "analyzer", to: "processor" },
  { from: "database", to: "processor" },
  { from: "processor", to: "output" },
];

const sequence = [
  { nodeIds: ["input"], connectionIds: [] },
  { nodeIds: ["input"], connectionIds: ["input-analyzer", "input-database"] },
  { nodeIds: ["input", "analyzer", "database"], connectionIds: ["input-analyzer", "input-database"] },
  { nodeIds: ["analyzer", "database"], connectionIds: ["analyzer-processor", "database-processor"] },
  { nodeIds: ["analyzer", "database", "processor"], connectionIds: ["analyzer-processor", "database-processor"] },
  { nodeIds: ["processor"], connectionIds: ["processor-output"] },
  { nodeIds: ["processor", "output"], connectionIds: ["processor-output"] },
];

export function AIWorkflowDiagram() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStep((prev) => (prev + 1) % sequence.length);
    }, 1150);
    return () => window.clearInterval(interval);
  }, []);

  const current = sequence[step];

  const getPos = (id: string) => {
    const found = nodes.find((n) => n.id === id);
    return found ? { x: found.x, y: found.y } : { x: 0, y: 0 };
  };

  const buildPath = (from: string, to: string) => {
    const a = getPos(from);
    const b = getPos(to);
    return `M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${(a.y + b.y) / 2 - 8} ${b.x} ${b.y}`;
  };

  return (
    <div className="relative w-full h-64 sm:h-80 rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] overflow-hidden shadow-sm">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map((conn) => {
          const id = `${conn.from}-${conn.to}`;
          const active = current.connectionIds.includes(id);
          const d = buildPath(conn.from, conn.to);
          return (
            <g key={id}>
              <path
                d={d}
                stroke={active ? "#FF5422" : "#E7D5CC"}
                strokeWidth={active ? "0.8" : "0.45"}
                fill="none"
                className="transition-all duration-300"
              />
              {active && (
                <circle r="0.9" fill="#FF5422">
                  <animateMotion dur="0.95s" repeatCount="1" path={d} />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {nodes.map((node) => {
        const active = current.nodeIds.includes(node.id);
        return (
          <div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: `translate(-50%, -50%) scale(${active ? 1.1 : 1})`,
            }}
          >
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${
                active
                  ? "bg-[#FF5422] text-white"
                  : "bg-white text-stone-700 border border-[#F5D6C8]"
              }`}
            >
              <node.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="mt-1.5 text-[10px] sm:text-xs font-semibold text-[#141210] whitespace-nowrap text-center">
              {node.label}
            </div>
          </div>
        );
      })}

      <div className="absolute top-3 left-4">
        <p className="text-xs font-bold text-[#141210]">AI Agent Collaboration</p>
        <p className="text-[11px] text-stone-500">Real-time workflow orchestration</p>
      </div>

      <div className="absolute bottom-3 left-4 flex items-center gap-2 text-[11px] text-stone-500">
        <span className="inline-flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#FF5422]" /> Data Flow
        </span>
        <ArrowRight className="h-3 w-3" />
        <span className="inline-flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#141210]" /> Action
        </span>
      </div>
    </div>
  );
}
