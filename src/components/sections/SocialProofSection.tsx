import { Card } from "@/components/ui/card";
import { Users, Stethoscope, FileCheck, Star } from "lucide-react";

export const SocialProofSection = () => {
  const stats = [
    { icon: Users, number: "60 mil+", label: "brasileiros confiam" },
    { icon: FileCheck, number: "20 mil+", label: "consultas realizadas" },
    { icon: Stethoscope, number: "148", label: "médicos atendendo" },
    { icon: Star, number: "5 anos", label: "cuidando de brasileiros" },
  ];

  const partners = [
    "Publix",
    "Walmart",
    "CVS",
    "Labcorp",
    "Costco",
    "Quest",
  ];

  return (
    <section id="prova" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Mais de <span className="text-primary">60 mil brasileiros</span> já confiam no Easy Doctors
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-16">
            São mais de 20 mil consultas realizadas, com 148 médicos atendendo todos os dias.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center bg-card border-border hover:border-primary transition-all hover:shadow-glow"
                >
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-accent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 md:p-12 bg-card border-primary">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              5 anos cuidando de quem vive fora do país
            </h3>
            
            {/* NOVA IMAGEM: crianca-consulta.png - Responsiva */}
            <div className="flex justify-center mb-6 md:mb-8">
              <img
                src="/images/crianca-consulta.webp"
                alt="Criança em consulta médica online com EasyDoctors"
                className="max-w-full h-auto rounded-lg shadow-lg"
                style={{ maxWidth: '500px' }}
              />
            </div>
            
            <p className="text-center text-xl mb-8">
              com parcerias nas maiores redes de farmácias e laboratórios dos EUA
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="text-2xl font-bold text-muted-foreground hover:text-primary transition-colors px-4"
                >
                  {partner}
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-16 text-center">
            <p className="text-xl text-muted-foreground italic">
            
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
