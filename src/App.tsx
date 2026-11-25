import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AppRoutes, UtilityRouteRegistry } from "@/AppRoutes";

const queryClient = new QueryClient();

const lazyUtilities: UtilityRouteRegistry = {
  Products: lazy(() => import("@/pages/Products")),
  Jobs: lazy(() => import("@/pages/Jobs")),
  Internship: lazy(() => import("@/pages/Internship")),
  Fun: lazy(() => import("@/pages/Fun")),
  AIAgentsLibrary: lazy(() => import("@/pages/AIAgentsLibrary")),
  DevelopmentKit: lazy(() => import("@/pages/DevelopmentKit")),
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <AppRoutes utilities={lazyUtilities} includeClientEffects />
          </Suspense>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
