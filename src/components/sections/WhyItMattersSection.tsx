import { Card } from "@/components/ui/card";
import { DollarSign, Clock, MessageSquare, X } from "lucide-react";

export const WhyItMattersSection = () => {
  return (
    <section id="porque-importa" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed animate-fade-in">
            <p>
              Nos EUA, todo mundo já aprendeu da pior forma: cuidar da saúde custa caro.
            </p>
            
            <p>
              Pode ser só uma febre ou dor de garganta — mas uma simples consulta já ultrapassa os $150. E o pior: <span className="text-destructive font-semibold">a conta surpresa que aparece dias depois pelo correio</span>.
            </p>
            
            <p>
              No Brasil, isso raramente é um problema — graças ao SUS (mesmo com todo seu "glamour", ele ainda funciona).
            </p>
            
            <p>
              Mas aqui, qualquer consulta pode virar uma despesa assustadora.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-glow">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2">$150+</h3>
              <p className="text-muted-foreground">por consulta simples</p>
            </Card>
            
            <Card className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-glow">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2">Horas de espera</h3>
              <p className="text-muted-foreground">em clínicas lotadas</p>
            </Card>
            
            <Card className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-glow">
              <MessageSquare className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2">Barreira do idioma</h3>
              <p className="text-muted-foreground">dificulta diagnósticos</p>
            </Card>
          </div>

          <div className="mt-16 space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              O que muita gente não percebe é que, dentro do consultório — seja no Urgent Care ou numa clínica particular — a primeira coisa que acontece é <span className="text-primary font-semibold">uma conversa com o médico</span>.
            </p>
            
            <p>
              Ele escuta, faz perguntas, entende quando tudo começou, o que você tomou, se tem alergias…
            </p>
            
            <p>
              No final, orienta e prescreve o tratamento.
            </p>
            
            {/* Imagem e texto responsivos - otimizado */}
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 my-8 md:my-12">
              {/* Imagem otimizada */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="/images/desanparada.webp"
                  alt="Pessoa desamparada"
                  className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
                  loading="lazy"
                  width="350"
                  height="auto"
                />
              </div>

              {/* Texto com ícones X */}
              <div className="w-full lg:w-1/2">
                <p className="font-semibold text-xl sm:text-2xl text-center lg:text-left">
                  <span className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                    <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 flex-shrink-0" />
                    <span>Sem exame.</span>
                  </span>
                  <span className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                    <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 flex-shrink-0" />
                    <span>Sem aparelho.</span>
                  </span>
                  <span className="flex items-center justify-center lg:justify-start gap-2">
                    <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 flex-shrink-0" />
                    <span>Sem toque físico.</span>
                  </span>
                </p>
              </div>
            </div>
            
            <p>
              Ou seja: <span className="text-primary font-semibold">o que realmente resolve é a conversa</span>. A anamnese — escutar, entender, conectar médico e paciente.
            </p>
            
            <Card className="p-6 md:p-8 bg-gradient-primary/10 border-primary mt-12">
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                Não é coincidência que segundo o próprio sistema de saúde dos EUA, <span className="text-accent">96% dos casos são resolvidos sem exame físico</span>.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
