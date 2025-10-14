import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("porque-importa")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCtaClick = () => {
    // Por enquanto, só faz scroll. Depois adicionamos o redirect com UTM
    scrollToNext();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background da família - full screen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/familia-easydoctors.png')" }}
      ></div>

      {/* Overlay escura para legibilidade */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="font-bold leading-tight">
            {/* Primeira parte - 3rem (text-5xl) */}
            <div className="text-5xl mb-5">
              <span className="text-primary">Consulta médica imediata em português </span>
              <span className="text-white">pra você e </span>
              <span className="text-primary">sua família.</span>
            </div>
            
            {/* Espaçamento de 20px */}
            
            {/* Segunda parte - 1.5rem (text-2xl) - toda branca */}
            <div className="text-2xl text-white">
              Sem sustos financeiros, sem filas e sem risco pro seu processo imigratório.
            </div>
          </h1>
          
          <div className="mt-12">
            <Button
              onClick={handleCtaClick}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow text-lg px-10 py-7 font-bold shadow-xl"
            >
              Quero saber como funciona
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};
