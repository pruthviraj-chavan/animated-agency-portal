
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Fun from "./pages/Fun";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CustomWebsiteDevelopment from "./pages/services/CustomWebsiteDevelopment";
import EcommerceSolutions from "./pages/services/EcommerceSolutions";
import SeoOptimization from "./pages/services/SeoOptimization";
import UiUxDesign from "./pages/services/UiUxDesign";
import WebHosting from "./pages/services/WebHosting";
import WordpressDevelopment from "./pages/services/WordpressDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import ApiDevelopment from "./pages/services/ApiDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/custom-website-development" element={<CustomWebsiteDevelopment />} />
            <Route path="/services/ecommerce-solutions" element={<EcommerceSolutions />} />
            <Route path="/services/seo-optimization" element={<SeoOptimization />} />
            <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/services/web-hosting" element={<WebHosting />} />
            <Route path="/services/wordpress-development" element={<WordpressDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/api-development" element={<ApiDevelopment />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
