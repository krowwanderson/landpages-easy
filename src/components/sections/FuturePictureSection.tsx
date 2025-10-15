import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, AlertCircle, CheckCircle } from "lucide-react";

export const FuturePictureSection = () => {
  const handleEscolherPlano = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="futuro" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            O que você precisa é de um <span className="text-primary">médico que te entenda</span>.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-destructive/10 border-destructive">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold">Sem Easy Doctors</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Imagine o seguinte: são 3 da manhã. Seu filho está pegando fogo de febre, com os olhinhos vermelhos e o corpo tremendo…
                </p>
                <p>
                  Você abre o Google às pressas, tentando encontrar uma clínica aberta. Mas sabe que só de pisar no urgent care, lá se vão $300 — antes mesmo do médico aparecer.
                </p>
                <p className="text-destructive font-semibold">
                  E se for só uma virose? E se for sério demais pra esperar o amanhecer?
                </p>
              </div>
            </Card>
            
            <Card className="p-8 bg-primary/10 border-primary">
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold">Com Easy Doctors</h3>
              </div>
              <div className="space-y-4">
                <p>
                  Agora imagine o contrário: você respira fundo, desbloqueia o celular e, com três toques, está cara a cara com um <span className="text-primary font-semibold">pediatra brasileiro</span>.
                </p>
                <p>
                  Ele escuta com atenção, entende cada detalhe sem que você precise repetir — e te orienta como se estivesse ali do seu lado.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold pt-4 border-t border-primary/30">
                  <Heart className="h-5 w-5" />
                  <p>Sem sair de casa. Sem tropeçar no inglês. Sem aquela carta assustadora que chega pelo correio dias depois.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Botão Escolha seu plano */}
          <div className="text-center">
            <Button 
              onClick={handleEscolherPlano}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow text-lg px-12 py-6 font-bold"
            >
              Escolha seu plano →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
