import { Lightbulb } from "lucide-react";

export const MechanismSection = () => {
  return (
    <section id="mecanismo" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-accent mb-8">
            <Lightbulb className="h-10 w-10 text-accent-foreground" />
          </div>
          
          <div className="space-y-8 text-xl md:text-2xl leading-relaxed">
            <p className="font-semibold">
              Pensa comigo: Se a maioria dos diagnósticos, orientações ou receitas médicas começa com uma simples conversa…
            </p>
            
            <p className="text-muted-foreground">
              …por que tantos brasileiros ainda precisam pagar caro, esperar por horas — e pior — tentar explicar seus sintomas em inglês?
            </p>
            
            <p className="text-primary font-bold text-3xl md:text-4xl mt-12">
              Não seria muito mais simples — e rápido — poder consultar um médico quando quiser, a qualquer hora?
            </p>
            
            <p className="text-accent font-bold text-2xl md:text-3xl">
              E o melhor: ser realmente compreendido por alguém que fala a sua língua?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
