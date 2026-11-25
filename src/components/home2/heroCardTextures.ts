export interface HeroCardMeta {
  id: string;
  label: string;
  to: string;
}

export const HERO_CARDS: HeroCardMeta[] = [
  { id: "ai-agents", label: "AI Agents · Voice & Chat", to: "/services/ai-agents" },
  { id: "website-dev", label: "Website Development", to: "/services/website-development" },
  { id: "app-dev", label: "App Development · iOS & Android", to: "/services/mobile-app-development" },
  {
    id: "abroad-study",
    label: "Abroad Study Consultation",
    to: "/study-abroad",
  },
  { id: "automation", label: "Workflow & CRM Automation", to: "/services/business-automation" },
  { id: "ui-ux", label: "UI / UX & Brand Systems", to: "/services/ui-ux-design" },
  { id: "voice-bots", label: "Multilingual Voice Bots", to: "/services/ai-agents" },
  { id: "ai-labs", label: "AI Workshops · 20+ Schools", to: "/services/ai-training-workshops" },
  { id: "client-work", label: "Live Client Websites", to: "/projects" },
  { id: "retail-ai", label: "Retail & Billing AI", to: "/products" },
  { id: "api-cloud", label: "APIs, Cloud & SEO", to: "/services/api-integration" },
  { id: "dievekter", label: "Dievekter Tech Studio", to: "/about" },
];

// Near-square ratio matching the curved panels in the reference
const W = 760;
const H = 800;
const R = 48;

function clipRoundedCard(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.roundRect(4, 4, W - 8, H - 8, R);
  ctx.clip();
}

function drawCardBorder(ctx: CanvasRenderingContext2D, stroke = "rgba(255,255,255,0.8)") {
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(5, 5, W - 10, H - 10, R - 1);
  ctx.lineWidth = 4;
  ctx.strokeStyle = stroke;
  ctx.stroke();
  ctx.restore();
}

function drawDotMatrix(ctx: CanvasRenderingContext2D, color: string, step = 18, r = 1.6) {
  ctx.save();
  ctx.fillStyle = color;
  for (let y = 14; y < H; y += step) {
    for (let x = 14; x < W; x += step) {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawAiAgents(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#F6F3EE";
  ctx.fillRect(0, 0, W, H);

  // Concentric neural signal rings
  ctx.strokeStyle = "rgba(255, 84, 34, 0.45)";
  ctx.lineWidth = 2.5;
  const cx = W * 0.56;
  const cy = H * 0.36;
  [62, 110, 162, 218, 274].forEach((r) => {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  });

  ctx.fillStyle = "#FF5422";
  ctx.beginPath();
  ctx.arc(cx, cy, 36, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#78716C";
  ctx.font = "700 15px system-ui, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText("HINDI · MARATHI · ENGLISH", W - 48, 52);
  ctx.textAlign = "left";

  ctx.fillStyle = "#141210";
  ctx.font = "900 108px system-ui, sans-serif";
  ctx.textBaseline = "bottom";
  ctx.fillText("AI", 44, H - 134);
  ctx.fillText("Agents.", 44, H - 42);
  ctx.textBaseline = "top";
  drawCardBorder(ctx, "rgba(20,18,16,0.12)");
}

function drawWebsiteDev(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#FF5422";
  ctx.fillRect(0, 0, W, H);
  drawDotMatrix(ctx, "rgba(20, 18, 16, 0.2)", 15, 1.5);

  ctx.fillStyle = "#141210";
  ctx.font = "900 118px system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.textBaseline = "top";
  ctx.fillText("WEB", 42, 46);
  ctx.fillText("SITE", 42, 168);
  ctx.fillText("DEV.", 42, 290);

  ctx.fillStyle = "#141210";
  ctx.font = "700 20px system-ui, sans-serif";
  ctx.fillText("CUSTOM REACT & FAST PLATFORMS", 46, 444);

  // Dark seal bottom-right
  ctx.beginPath();
  ctx.arc(W - 146, H - 150, 88, 0, Math.PI * 2);
  ctx.fillStyle = "#141210";
  ctx.fill();

  ctx.fillStyle = "#FF5422";
  ctx.textAlign = "center";
  ctx.font = "700 22px system-ui, sans-serif";
  ctx.fillText("9+ LIVE", W - 146, H - 186);
  ctx.fillText("CLIENT", W - 146, H - 156);
  ctx.fillText("SITES", W - 146, H - 126);
  ctx.textAlign = "left";

  drawCardBorder(ctx, "rgba(255,255,255,0.75)");
}

function drawAppDev(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#F3EFE9";
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#141210";
  ctx.font = "700 116px Georgia, 'Times New Roman', serif";
  ctx.textBaseline = "top";
  ctx.fillText("Mobile", 44, 46);
  ctx.fillText("App Dev", 44, 158);

  ctx.fillStyle = "#78716C";
  ctx.font = "600 15px system-ui, sans-serif";
  ctx.fillText("iOS · ANDROID · CROSS-PLATFORM", 48, 300);

  ctx.save();
  ctx.strokeStyle = "rgba(20, 18, 16, 0.28)";
  ctx.lineWidth = 2;
  const cx = 520;
  const cy = 355;
  [48, 86, 128, 174].forEach((rad) => {
    ctx.beginPath();
    ctx.ellipse(cx, cy, rad * 1.15, rad * 0.56, 0, 0, Math.PI * 2);
    ctx.stroke();
  });

  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    const y0 = 475 + i * 44;
    ctx.moveTo(0, y0);
    ctx.bezierCurveTo(220, y0 - 42, 480, y0 + 50, W, y0 - 18);
    ctx.stroke();
  }

  ctx.strokeStyle = "#FF5422";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(W - 48, cy - 82);
  ctx.stroke();

  ctx.fillStyle = "#FF5422";
  ctx.beginPath();
  ctx.arc(cx, cy, 11, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.fillStyle = "#57534E";
  ctx.font = "600 16px monospace";
  ctx.textAlign = "right";
  ctx.fillText("FLUTTER · REACT NATIVE", W - 44, H - 72);
  ctx.fillText("APP STORE · PLAY STORE", W - 44, H - 48);
  ctx.textAlign = "left";
  drawCardBorder(ctx, "rgba(20,18,16,0.12)");
}

function drawAbroadStudy(ctx: CanvasRenderingContext2D) {
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#120602");
  bg.addColorStop(0.55, "#4E1706");
  bg.addColorStop(1, "#FF5422");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "800 78px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("ABROAD", W / 2, 122);
  ctx.font = "700 62px system-ui, sans-serif";
  ctx.fillText("STUDY", W / 2, 192);

  ctx.fillStyle = "rgba(255,255,255,0.78)";
  ctx.font = "600 16px system-ui, sans-serif";
  ctx.fillText("GLOBAL ADMISSIONS CONSULTATION", W / 2, 240);

  // Glowing horizon globe orb
  const orb = ctx.createRadialGradient(W / 2 - 42, 445, 20, W / 2, 480, 190);
  orb.addColorStop(0, "#FFD4BF");
  orb.addColorStop(0.35, "#FF7A4D");
  orb.addColorStop(0.75, "#D93D0B");
  orb.addColorStop(1, "rgba(80, 18, 4, 0)");
  ctx.fillStyle = orb;
  ctx.beginPath();
  ctx.arc(W / 2, 480, 190, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(255, 255, 255, 0.55)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 565);
  ctx.lineTo(W, 565);
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.font = "700 19px system-ui, sans-serif";
  ctx.fillText("UNIVERSITIES · VISAS · COUNSELLING", W / 2, H - 56);
  ctx.textAlign = "left";
  drawCardBorder(ctx, "rgba(255,255,255,0.45)");
}

function drawAutomation(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#F5EFE6";
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#141210";
  ctx.font = "800 66px system-ui, sans-serif";
  ctx.textBaseline = "top";
  ctx.fillText("Workflow", 48, 48);
  ctx.fillText("automation.", 48, 114);

  ctx.fillStyle = "#78716C";
  ctx.font = "600 14px system-ui, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText("OPS STACK", W - 48, 56);
  ctx.textAlign = "left";

  const bars = [
    { name: "WHATSAPP API", code: "LIVE", bg: "#6E4427", tc: "#FFFFFF" },
    { name: "CRM PIPELINES", code: "AUTO", bg: "#94633D", tc: "#FFFFFF" },
    { name: "N8N & WEBHOOKS", code: "SYNC", bg: "#CCA06B", tc: "#141210" },
    { name: "VOICE TRIGGERS", code: "24/7", bg: "#FF5422", tc: "#FFFFFF" },
    { name: "RAG KNOWLEDGE", code: "CORE", bg: "#141210", tc: "#FFFFFF" },
  ];

  bars.forEach((b, i) => {
    const y = 236 + i * 102;
    ctx.fillStyle = b.bg;
    ctx.beginPath();
    ctx.roundRect(48, y, W - 96, 82, 18);
    ctx.fill();

    ctx.fillStyle = b.tc;
    ctx.font = "700 16px system-ui, sans-serif";
    ctx.fillText(b.name, 74, y + 32);

    ctx.textAlign = "right";
    ctx.font = "700 15px monospace";
    ctx.fillText(b.code, W - 74, y + 32);
    ctx.textAlign = "left";
  });
  drawCardBorder(ctx, "rgba(20,18,16,0.1)");
}

function drawUiUx(ctx: CanvasRenderingContext2D) {
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "#FF8559");
  grad.addColorStop(0.55, "#FF5422");
  grad.addColorStop(1, "#D83809");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "rgba(255,255,255,0.88)";
  ctx.font = "700 15px system-ui, sans-serif";
  ctx.fillText("PRODUCT UI / UX DESIGN", 48, 52);

  ctx.save();
  ctx.fillStyle = "rgba(255, 210, 190, 0.36)";
  ctx.strokeStyle = "rgba(255, 255, 255, 0.55)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(W * 0.44, H * 0.48, 175, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.translate(W * 0.62, H * 0.62);
  ctx.rotate(0.45);
  ctx.fillStyle = "rgba(255, 160, 125, 0.42)";
  ctx.beginPath();
  ctx.roundRect(-125, -125, 250, 250, 46);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "800 54px system-ui, sans-serif";
  ctx.fillText("Interfaces", 48, H - 144);
  ctx.fillText("that convert.", 48, H - 84);

  drawCardBorder(ctx, "rgba(255,255,255,0.6)");
}

function drawVoiceBots(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#F5ECE6";
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#78716C";
  ctx.font = "700 15px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("MULTILINGUAL VOICE BOTS · 24/7", W / 2, 62);

  // Coral arch emblem
  ctx.strokeStyle = "#FF6B42";
  ctx.lineWidth = 54;
  ctx.lineCap = "butt";
  ctx.beginPath();
  ctx.arc(W / 2, 415, 185, Math.PI, 0);
  ctx.lineTo(W / 2 + 185, 635);
  ctx.moveTo(W / 2 - 185, 415);
  ctx.lineTo(W / 2 - 185, 635);
  ctx.stroke();

  ctx.fillStyle = "#FF6B42";
  ctx.beginPath();
  ctx.arc(W / 2, 455, 86, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#141210";
  ctx.font = "italic 60px Georgia, serif";
  ctx.fillText("Voice AI", W / 2, H - 76);
  ctx.textAlign = "left";
  drawCardBorder(ctx, "rgba(20,18,16,0.08)");
}

function drawAiLabs(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#FF5422";
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "#4A1506";
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  [305, 380, 455].forEach((x, idx) => {
    ctx.beginPath();
    ctx.moveTo(x, 82 + idx * 8);
    ctx.bezierCurveTo(x - 26, 128, x + 26, 165, x - 4, 212);
    ctx.stroke();
  });

  ctx.save();
  ctx.shadowColor = "rgba(40, 10, 2, 0.35)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 22;

  ctx.fillStyle = "#FAF7F2";
  ctx.beginPath();
  ctx.roundRect(175, 255, 410, 365, [18, 18, 60, 60]);
  ctx.fill();
  ctx.restore();

  ctx.fillStyle = "#141210";
  ctx.beginPath();
  ctx.roundRect(158, 240, 444, 34, 17);
  ctx.fill();

  ctx.fillStyle = "#141210";
  ctx.textAlign = "center";
  ctx.font = "800 62px system-ui, sans-serif";
  ctx.fillText("AI Labs.", W / 2, 432);
  ctx.fillStyle = "#78716C";
  ctx.font = "700 15px system-ui, sans-serif";
  ctx.fillText("20+ SCHOOLS · 2,000+ STUDENTS", W / 2, 496);
  ctx.textAlign = "left";
  drawCardBorder(ctx, "rgba(255,255,255,0.65)");
}

function drawClientWork(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#141210";
  ctx.fillRect(0, 0, W, H);
  drawDotMatrix(ctx, "rgba(255, 255, 255, 0.06)", 24, 1.5);

  ctx.fillStyle = "#A8A29E";
  ctx.font = "700 15px system-ui, sans-serif";
  ctx.fillText("BHRIGU · VFA · PHONDA · EVENTORS", 44, 52);

  ctx.strokeStyle = "rgba(255, 84, 34, 0.35)";
  ctx.lineWidth = 2;
  [260, 305, 345].forEach((y) => {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  });

  ctx.strokeStyle = "#FF5422";
  ctx.lineWidth = 8;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(0, 305);
  ctx.lineTo(145, 305);
  ctx.lineTo(210, 175);
  ctx.lineTo(270, 420);
  ctx.lineTo(330, 285);
  ctx.lineTo(380, 305);
  ctx.lineTo(450, 95);
  ctx.lineTo(515, 455);
  ctx.lineTo(575, 305);
  ctx.lineTo(W, 305);
  ctx.stroke();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "italic 900 96px system-ui, sans-serif";
  ctx.fillText("CLIENT", 48, 575);
  ctx.fillStyle = "#FF5422";
  ctx.fillText("BUILDS", 48, 678);
  drawCardBorder(ctx, "rgba(255,255,255,0.3)");
}

function drawRetailAi(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#FED7C6";
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#1D130E";
  ctx.font = "italic 82px Georgia, serif";
  ctx.textBaseline = "top";
  ctx.fillText("Retail", 52, 52);
  ctx.fillText("Billing AI", 52, 134);

  ctx.fillStyle = "rgba(29, 19, 14, 0.65)";
  ctx.font = "700 14px system-ui, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText("POS · GST · STOCK", W - 50, 58);
  ctx.textAlign = "left";

  const modules = [
    { x: 155, y: 345, w: 120, h: 365, body: "#FFFFFF", cap: "#141210", label: "POS" },
    { x: 318, y: 425, w: 125, h: 285, body: "#FF5422", cap: "#141210", label: "STOCK" },
    { x: 482, y: 505, w: 105, h: 205, body: "#141210", cap: "#FF5422", label: "AI" },
  ];

  modules.forEach((m) => {
    ctx.fillStyle = m.cap;
    ctx.beginPath();
    ctx.roundRect(m.x + m.w * 0.28, m.y - 44, m.w * 0.44, 50, 12);
    ctx.fill();

    ctx.fillStyle = m.body;
    ctx.beginPath();
    ctx.roundRect(m.x, m.y, m.w, m.h, 24);
    ctx.fill();

    ctx.fillStyle = m.body === "#FFFFFF" ? "#141210" : "#FFFFFF";
    ctx.font = "700 16px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(m.label, m.x + m.w / 2, m.y + m.h * 0.56);
    ctx.textAlign = "left";
  });
  drawCardBorder(ctx, "rgba(255,255,255,0.75)");
}

function drawApiCloud(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#141210";
  ctx.fillRect(0, 0, W, H);

  ctx.font = "900 104px system-ui, sans-serif";
  ctx.textBaseline = "top";
  const rows = [
    { text: "APIS &", color: "#FF5422" },
    { text: "CLOUD", color: "#FF5422" },
    { text: "BACKEND", color: "rgba(255, 84, 34, 0.72)" },
    { text: "DEVOPS", color: "rgba(255, 84, 34, 0.46)" },
    { text: "SEO", color: "rgba(255, 84, 34, 0.25)" },
  ];

  rows.forEach((row, i) => {
    ctx.fillStyle = row.color;
    ctx.fillText(row.text, 44, 72 + i * 124);
  });
  drawCardBorder(ctx, "rgba(255,255,255,0.28)");
}

function drawDievekter(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#2E0A0C";
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(232, 184, 120, 0.35)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(36, 36, W - 72, H - 72, 24);
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(232, 184, 120, 0.78)";
  ctx.font = "600 14px system-ui, sans-serif";
  ctx.fillText("DIEVEKTER · MSME INDIA", W / 2, 108);

  ctx.fillStyle = "#E8B878";
  ctx.font = "600 176px Georgia, serif";
  ctx.fillText("DV", W / 2, 430);

  ctx.font = "700 22px system-ui, sans-serif";
  ctx.fillText("DIEVEKTER TECH", W / 2, 540);

  ctx.fillStyle = "rgba(232, 184, 120, 0.68)";
  ctx.font = "italic 22px Georgia, serif";
  ctx.fillText("ai · software · web · consulting", W / 2, 590);
  ctx.textAlign = "left";
  drawCardBorder(ctx, "rgba(255,255,255,0.32)");
}

const painters: Record<string, (ctx: CanvasRenderingContext2D) => void> = {
  "ai-agents": drawAiAgents,
  "website-dev": drawWebsiteDev,
  "app-dev": drawAppDev,
  "abroad-study": drawAbroadStudy,
  automation: drawAutomation,
  "ui-ux": drawUiUx,
  "voice-bots": drawVoiceBots,
  "ai-labs": drawAiLabs,
  "client-work": drawClientWork,
  "retail-ai": drawRetailAi,
  "api-cloud": drawApiCloud,
  dievekter: drawDievekter,
};

function renderCardCanvas(id: string): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, W, H);

  ctx.save();
  clipRoundedCard(ctx);
  const paint = painters[id] || drawWebsiteDev;
  paint(ctx);
  ctx.restore();
  return canvas;
}

export function createCardDataUrl(id: string): string {
  return renderCardCanvas(id).toDataURL("image/png");
}
