
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Members from "./pages/Members";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MindBridge from "./pages/MindBridge";
import SaxDefense from "./pages/SaxDefense";
import NWO from "./pages/NWO";
import LearnAI from "./pages/LearnAI";
import Anduril from "./pages/Anduril";

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
          <Route path="/members" element={<Members />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mind-bridge" element={<MindBridge />} />
          <Route path="/sax-defense" element={<SaxDefense />} />
          <Route path="/nwo" element={<NWO />} />
          <Route path="/learn-ai" element={<LearnAI />} />
          <Route path="/anduril" element={<Anduril />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
