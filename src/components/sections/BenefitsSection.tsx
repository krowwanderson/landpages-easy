import { Card } from "@/components/ui/card";
import { Stethoscope, Baby, Heart, Brain, Pill, UserCheck, Activity, Syringe } from "lucide-react";

export const BenefitsSection = () => {
  const specialties = [
    { icon: Stethoscope, name: "Clínico Geral" },
    { icon: Baby, name: "Pediatria" },
    { icon: Heart, name: "Cardiologia" },
    { icon: Brain, name: "Psicologia" },
    { icon: Pill, name: "Dermatologia" },
    { icon: UserCheck, name: "Ginecologia" },
    { icon: Activity, name: "Nutrição" },
    { icon: Syringe, name: "Outras especialidades" },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Além do clínico geral ilimitado
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            com a Easy Doctors você tem acesso a diversas especialidades médicas:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center bg-card border-border hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">{specialty.name}</p>
                </Card>
              );
            })}
          </div>
          
          <Card className="p-8 bg-gradient-primary/10 border-primary">
            <p className="text-xl md:text-2xl text-center font-semibold">
              Tudo com <span className="text-primary">receita e encaminhamento direto no seu celular</span>. Sem burocracia. Sem carência. Sem medo.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
