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
          ? "bg-black/20 backdrop-blur-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 md:h-20">
          <picture>
            <source 
              media="(max-width: 768px)" 
              srcSet="/images/logotipo-white-mobile.webp" 
            />
            <img 
              src="/images/logotipo-white.webp"
              alt="Easy Doctors"
              className="h-8 md:h-10 w-auto"
            />
          </picture>
        </div>
      </div>
    </header>
  );
};
