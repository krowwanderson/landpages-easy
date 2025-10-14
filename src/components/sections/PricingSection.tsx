import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

export const PricingSection = () => {
  const individualFeatures = [
    "Clínico Geral Ilimitado",
    "Consultas por vídeo 24h",
    "Receitas e encaminhamentos digitais",
    "Atendimento 100% em português",
    "Sem carência, sem burocracia",
    "WhatsApp exclusivo para suporte",
  ];

  const familyFeatures = [
    "Clínico Geral e Pediatra Ilimitado",
    "Consultas 24h, todos os dias",
    "Receitas e encaminhamentos digitais",
    "Atendimento 100% em português",
    "Sem carência, sem burocracia",
    "WhatsApp exclusivo e prioridade no atendimento",
    "Retorno gratuito com especialistas em até 30 dias",
  ];

  return (
    <section id="planos" className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Agora, veja abaixo o melhor plano para você assinar Easy Doctors
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            e já começar a usar todos os benefícios do seu médico de bolso.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Escolha o plano ideal pra você:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Individual Plan */}
            <Card className="p-8 bg-card border-border hover:border-primary transition-all">
              <div className="mb-6">
                <div className="text-4xl mb-2">🧍</div>
                <h4 className="text-2xl font-bold mb-2">Plano Individual</h4>
                <p className="text-muted-foreground">Para você</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">$29,90</span>
                  <span className="text-muted-foreground">/ mês</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                {individualFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm font-semibold mb-2">Ideal para:</p>
                <p className="text-sm text-muted-foreground">
                  Quem mora sozinho ou quer ter acesso rápido e ilimitado a médicos em português.
                </p>
              </div>
              
              <Button className="w-full bg-gradient-primary hover:shadow-glow text-lg py-6 font-bold">
                Quero Este Plano →
              </Button>
            </Card>

            {/* Family Plan */}
            <Card className="p-8 bg-card border-primary relative overflow-hidden shadow-glow">
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-accent px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-accent-foreground" />
                <span className="text-sm font-bold text-accent-foreground">Mais popular</span>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl mb-2">👨‍👩‍👧</div>
                <h4 className="text-2xl font-bold mb-2">Plano Família</h4>
                <p className="text-primary font-semibold">Até 4 pessoas</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">$49,90</span>
                  <span className="text-muted-foreground">/ mês</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                {familyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-sm font-semibold mb-2">Ideal para:</p>
                <p className="text-sm">
                  Famílias com filhos ou casais que querem ter suporte médico completo, dia e noite, sem sustos na conta
                </p>
              </div>
              
              <Button className="w-full bg-gradient-accent hover:shadow-accent text-lg py-6 font-bold text-accent-foreground">
                Quero Este Plano →
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
