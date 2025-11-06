import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";

const App = () => (
  <TooltipProvider>
    <Toaster position="top-center" richColors />
    <Index />
  </TooltipProvider>
);

export default App;
