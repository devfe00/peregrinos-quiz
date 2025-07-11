import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import VideoBackground from "./components/VideoBackground";  
import Welcome from "./pages/Welcome";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <VideoBackground />  {/*videofundo*/}
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <QuizProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/resultado" element={<Result />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QuizProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

//código finalizado, agora é só esperar os bugs aparecerem
  //Fe – o dev mestre dos bugs
  
  /*
       ,--./,-.        </ >ˆ$
      / #      /
     |       |
      \        \
       `._,._,'
  */