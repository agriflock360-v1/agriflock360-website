import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import Vaccination from "./pages/Vaccination";
import Feeding from "./pages/Feeding";
import Brooder from "./pages/Brooder";
import Analytics from "./pages/Analytics";
import About from "./pages/About";
import Download from "./pages/Download";
import WebApp from "./pages/WebApp";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ProcessLogo from "./pages/ProcessLogo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vaccination" element={<Vaccination />} />
              <Route path="/feeding" element={<Feeding />} />
              <Route path="/brooder" element={<Brooder />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/download" element={<Download />} />
              <Route path="/web-app" element={<WebApp />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/process-logo" element={<ProcessLogo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
