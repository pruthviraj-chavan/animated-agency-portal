import type { ComponentType } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { JotformChatbot } from "@/components/JotformChatbot";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Portfolio from "@/pages/Portfolio";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Agents from "@/pages/Agents";
import TechServicePage from "@/pages/services/TechServicePage";
import AgenticAITraining from "@/pages/services/AgenticAITraining";
import AITrainingWorkshops from "@/pages/services/AITrainingWorkshops";
import Referral from "@/pages/services/Refer";
import StudyAbroadHub from "@/pages/studyAbroad/StudyAbroadHub";
import StudyInGermany from "@/pages/studyAbroad/StudyInGermany";
import StudyAbroadSubPage from "@/pages/studyAbroad/StudyAbroadSubPage";
import Solutions from "@/pages/Solutions";
import AISolutions from "@/pages/solutions/AISolutions";
import SoftwareSolutions from "@/pages/solutions/SoftwareSolutions";
import AutomationSolutions from "@/pages/solutions/AutomationSolutions";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

export interface UtilityRouteRegistry {
  Products: ComponentType;
  Jobs: ComponentType;
  Internship: ComponentType;
  Fun: ComponentType;
  AIAgentsLibrary: ComponentType;
  DevelopmentKit: ComponentType;
}

export function AppRoutes({
  utilities,
  includeClientEffects = true,
}: {
  utilities: UtilityRouteRegistry;
  includeClientEffects?: boolean;
}) {
  const {
    Products: ProductsPage,
    Jobs: JobsPage,
    Internship: InternshipPage,
    Fun: FunPage,
    AIAgentsLibrary: AIAgentsLibraryPage,
    DevelopmentKit: DevelopmentKitPage,
  } = utilities;

  return (
    <>
      {includeClientEffects && <CanonicalUrl />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/fun" element={<FunPage />} />
        <Route path="/ai-agents-library" element={<AIAgentsLibraryPage />} />
        <Route path="/development-kit" element={<DevelopmentKitPage />} />

        {/* Canonical Technology Service Routes */}
        <Route
          path="/services/website-development"
          element={<TechServicePage serviceKey="website-development" />}
        />
        <Route
          path="/services/mobile-app-development"
          element={<TechServicePage serviceKey="mobile-app-development" />}
        />
        <Route
          path="/services/custom-software-development"
          element={<TechServicePage serviceKey="custom-software-development" />}
        />
        <Route
          path="/services/ecommerce-development"
          element={<TechServicePage serviceKey="ecommerce-development" />}
        />
        <Route
          path="/services/ai-agents"
          element={<TechServicePage serviceKey="ai-agents" />}
        />
        <Route
          path="/services/ai-chatbots"
          element={<TechServicePage serviceKey="ai-chatbots" />}
        />
        <Route
          path="/services/business-automation"
          element={<TechServicePage serviceKey="business-automation" />}
        />
        <Route
          path="/services/crm-automation"
          element={<TechServicePage serviceKey="crm-automation" />}
        />
        <Route
          path="/services/api-integration"
          element={<TechServicePage serviceKey="api-integration" />}
        />
        <Route
          path="/services/cloud-solutions"
          element={<TechServicePage serviceKey="cloud-solutions" />}
        />
        <Route
          path="/services/ui-ux-design"
          element={<TechServicePage serviceKey="ui-ux-design" />}
        />
        <Route
          path="/services/seo-optimization"
          element={<TechServicePage serviceKey="seo-optimization" />}
        />
        <Route
          path="/services/wordpress-development"
          element={<TechServicePage serviceKey="wordpress-development" />}
        />
        <Route path="/services/agentic-ai-training" element={<AgenticAITraining />} />
        <Route path="/services/ai-training-workshops" element={<AITrainingWorkshops />} />
        <Route path="/services/refer" element={<Referral />} />

        {/* Client-side redirects mirroring vercel.json permanent 301s */}
        <Route
          path="/services/custom-website-development"
          element={<Navigate to="/services/website-development" replace />}
        />
        <Route
          path="/services/ecommerce-solutions"
          element={<Navigate to="/services/ecommerce-development" replace />}
        />
        <Route
          path="/services/api-development"
          element={<Navigate to="/services/api-integration" replace />}
        />
        <Route
          path="/services/web-hosting"
          element={<Navigate to="/services/cloud-solutions" replace />}
        />
        <Route path="/about-us" element={<Navigate to="/about" replace />} />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />

        {/* Study Abroad Consultancy Hub */}
        <Route path="/study-abroad" element={<StudyAbroadHub />} />
        <Route path="/study-abroad/germany" element={<StudyInGermany />} />
        <Route
          path="/study-abroad/university-selection"
          element={<StudyAbroadSubPage subKey="university-selection" />}
        />
        <Route
          path="/study-abroad/admission-assistance"
          element={<StudyAbroadSubPage subKey="admission-assistance" />}
        />
        <Route
          path="/study-abroad/visa-guidance"
          element={<StudyAbroadSubPage subKey="visa-guidance" />}
        />
        <Route
          path="/study-abroad/student-resources"
          element={<StudyAbroadSubPage subKey="student-resources" />}
        />

        {/* Solutions */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/ai" element={<AISolutions />} />
        <Route path="/solutions/software" element={<SoftwareSolutions />} />
        <Route path="/solutions/automation" element={<AutomationSolutions />} />

        {/* Blog Categories & Articles */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/technology" element={<Blog initialCategory="technology" />} />
        <Route
          path="/blog/website-development"
          element={<Blog initialCategory="website-development" />}
        />
        <Route
          path="/blog/mobile-app-development"
          element={<Blog initialCategory="mobile-app-development" />}
        />
        <Route
          path="/blog/artificial-intelligence"
          element={<Blog initialCategory="artificial-intelligence" />}
        />
        <Route
          path="/blog/business-automation"
          element={<Blog initialCategory="business-automation" />}
        />
        <Route path="/blog/study-abroad" element={<Blog initialCategory="study-abroad" />} />
        <Route
          path="/blog/study-in-germany"
          element={<Blog initialCategory="study-in-germany" />}
        />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Legal & Fallback */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {includeClientEffects && <JotformChatbot />}
    </>
  );
}
