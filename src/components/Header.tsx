import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-md border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logotipo-white.png"
              alt="Easy Doctors"
              className="h-8 md:h-10 w-auto"
            />
          </div>

          {/* Menu Desktop (opcional - pode adicionar depois) */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Links podem ser adicionados aqui depois */}
          </nav>

          {/* CTA Button (opcional) */}
          <div className="hidden md:block">
            <button 
              onClick={() => {
                document.getElementById("sobre-faq")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-glow"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
