import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Fun from './pages/Fun'
import Jobs from './pages/Jobs'
import Projects from './pages/Projects'
import Products from './pages/Products'
import Blog from './pages/Blog'
import Agents from './pages/Agents'
import CustomWebsiteDevelopment from './pages/services/CustomWebsiteDevelopment'
import ECommerceSolutions from './pages/services/ECommerceSolutions'
import SEOOptimization from './pages/services/SEOOptimization'
import UIUXDesign from './pages/services/UIUXDesign'
import WebHosting from './pages/services/WebHosting'
import WordPressDevelopment from './pages/services/WordPressDevelopment'
import MobileAppDevelopment from './pages/services/MobileAppDevelopment'
import APIDevelopment from './pages/services/APIDevelopment'
import Referral from './pages/services/Referral'
import AgenticAIRevolutionAutonomousAgentsBusiness from './pages/blog/AgenticAIRevolutionAutonomousAgentsBusiness'
import AGIDevelopmentArtificialGeneralIntelligenceBusiness from './pages/blog/AGIDevelopmentArtificialGeneralIntelligenceBusiness'
import MultimodalAIFutureHumanComputerInteraction from './pages/blog/MultimodalAIFutureHumanComputerInteraction'
import EdgeAIComputingIntelligenceDataSources from './pages/blog/EdgeAIComputingIntelligenceDataSources'
import AIEthicsGovernanceResponsibleSystemsEnterprise from './pages/blog/AIEthicsGovernanceResponsibleSystemsEnterprise'
import QuantumComputingAIComputationalIntelligenceFrontier from './pages/blog/QuantumComputingAIComputationalIntelligenceFrontier'
import AIPoweredCybersecurityNextGenerationThreats from './pages/blog/AIPoweredCybersecurityNextGenerationThreats'
import DigitalTransformationAIReshapingBusinessModels from './pages/blog/DigitalTransformationAIReshapingBusinessModels'
import FutureWorkHumanAICollaborationModernWorkplace from './pages/blog/FutureWorkHumanAICollaborationModernWorkplace'
import AIDrivenInnovationDievektorAcceleratesRDProductDevelopment from './pages/blog/AIDrivenInnovationDievektorAcceleratesRDProductDevelopment'
import { ThemeProvider } from "@/components/theme-provider"
import { QueryClient } from '@tanstack/react-query'
import AIAgentsLibrary from "@/pages/AIAgentsLibrary";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <QueryClient>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/agents" element={<Agents />} />

            {/* Subpages under Services */}
            <Route path="/services/custom-website-development" element={<CustomWebsiteDevelopment />} />
            <Route path="/services/ecommerce-solutions" element={<ECommerceSolutions />} />
            <Route path="/services/seo-optimization" element={<SEOOptimization />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/web-hosting" element={<WebHosting />} />
            <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/api-development" element={<APIDevelopment />} />
            <Route path="/services/refer" element={<Referral />} />

            {/* Blog Posts */}
            <Route path="/blog/agentic-ai-revolution-autonomous-agents-business" element={<AgenticAIRevolutionAutonomousAgentsBusiness />} />
            <Route path="/blog/agi-development-artificial-general-intelligence-business" element={<AGIDevelopmentArtificialGeneralIntelligenceBusiness />} />
            <Route path="/blog/multimodal-ai-future-human-computer-interaction" element={<MultimodalAIFutureHumanComputerInteraction />} />
            <Route path="/blog/edge-ai-computing-intelligence-data-sources" element={<EdgeAIComputingIntelligenceDataSources />} />
            <Route path="/blog/ai-ethics-governance-responsible-systems-enterprise" element={<AIEthicsGovernanceResponsibleSystemsEnterprise />} />
            <Route path="/blog/quantum-computing-ai-computational-intelligence-frontier" element={<QuantumComputingAIComputationalIntelligenceFrontier />} />
            <Route path="/blog/ai-powered-cybersecurity-next-generation-threats" element={<AIPoweredCybersecurityNextGenerationThreats />} />
            <Route path="/blog/digital-transformation-ai-reshaping-business-models" element={<DigitalTransformationAIReshapingBusinessModels />} />
            <Route path="/blog/future-work-human-ai-collaboration-modern-workplace" element={<FutureWorkHumanAICollaborationModernWorkplace />} />
            <Route path="/blog/ai-driven-innovation-dievektor-accelerates-rd-product-development" element={<AIDrivenInnovationDievektorAcceleratesRDProductDevelopment />} />
            <Route path="/ai-agents-library" element={<AIAgentsLibrary />} />
          </Routes>
        </QueryClient>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
