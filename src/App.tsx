import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MindBridge from "./pages/MindBridge";
import SaxDefense from "./pages/SaxDefense";
import NWO from "./pages/NWO";
import LearnAI from "./pages/LearnAI";
import Anduril from "./pages/Anduril";
import MicrosoftMilitary from "./pages/MicrosoftMilitary";
import CryptoCzar from "./pages/CryptoCzar";
import Careers from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mind-bridge" element={<MindBridge />} />
          <Route path="/sax-defense" element={<SaxDefense />} />
          <Route path="/nwo" element={<NWO />} />
          <Route path="/learn-ai" element={<LearnAI />} />
          <Route path="/anduril" element={<Anduril />} />
          <Route path="/microsoft-military" element={<MicrosoftMilitary />} />
          <Route path="/crypto-czar" element={<CryptoCzar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
