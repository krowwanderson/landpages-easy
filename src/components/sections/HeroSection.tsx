import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("porque-importa")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJoLTJ2Mmgydi0yem0wLTJ2LTJoMnYyaC0yem0tMiAwaDJWMzBoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Consulta médica imediata em português pra você e sua família.{" "}
            <span className="text-primary">Sem sustos financeiros</span>, sem filas e{" "}
            <span className="text-primary">sem risco pro seu processo imigratório</span>.
          </h1>
          
          <div className="mt-12">
            <Button
              onClick={scrollToNext}
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
