import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("porque-importa")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCtaClick = () => {
    scrollToNext();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background da família - otimizado com srcset */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 md:opacity-40"
        style={{ 
          backgroundImage: "url('/images/familia-easydoctors.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center right"
        }}
      ></div>

      {/* Overlay escura para legibilidade */}
      <div className="absolute inset-0 bg-black opacity-50 md:opacity-60"></div>

      {/* Logotipo no topo - otimizado */}
      <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src="/images/logotipo-white.webp"
          srcSet="/images/logotipo-white.webp 1024w, /images/logotipo-white.webp 512w, /images/logotipo-white.webp 256w"
          sizes="(max-width: 768px) 150px, 200px"
          alt="Easy Doctors"
          className="w-48 h-auto opacity-80"
          loading="eager"
          decoding="async"
          width="200"
          height="200"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="font-bold leading-tight">
            {/* Primeira parte - responsivo */}
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5">
              <span className="text-primary">Consulta médica imediata em português </span>
              <span className="text-white">pra você e </span>
              <span className="text-primary">sua família.</span>
            </div>
            
            {/* Segunda parte - responsivo */}
            <div className="text-lg sm:text-xl md:text-2xl text-white">
              Sem sustos financeiros, sem filas e sem risco pro seu processo imigratório.
            </div>
          </h1>
          
          <div className="mt-8 md:mt-12">
            <Button
              onClick={handleCtaClick}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow text-base md:text-lg px-6 md:px-10 py-4 md:py-7 font-bold shadow-xl"
            >
              Quero saber como funciona
            </Button>
          </div>

          <div className="mt-12 md:mt-16 animate-bounce">
            <ChevronDown className="h-6 w-6 md:h-8 md:w-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};
