
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
import BlogPost from './pages/BlogPost'
import Agents from './pages/Agents'
import CustomWebsiteDevelopment from './pages/services/CustomWebsiteDevelopment'
import ECommerceSolutions from './pages/services/EcommerceSolutions'
import SEOOptimization from './pages/services/SeoOptimization'
import UIUXDesign from './pages/services/UiUxDesign'
import WebHosting from './pages/services/WebHosting'
import WordPressDevelopment from './pages/services/WordpressDevelopment'
import MobileAppDevelopment from './pages/services/MobileAppDevelopment'
import APIDevelopment from './pages/services/ApiDevelopment'
import Referral from './pages/services/Refer'
import AgenticAITraining from './pages/services/AgenticAITraining'
import { ThemeProvider } from "@/components/ThemeProvider"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { JotformChatbot } from "@/components/JotformChatbot"
import AIAgentsLibrary from "@/pages/AIAgentsLibrary";

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
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
            <Route path="/blog/:slug" element={<BlogPost />} />
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
            <Route path="/services/agentic-ai-training" element={<AgenticAITraining />} />

            <Route path="/ai-agents-library" element={<AIAgentsLibrary />} />
          </Routes>
          <JotformChatbot />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
