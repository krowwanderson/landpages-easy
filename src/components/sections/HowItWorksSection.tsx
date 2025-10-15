import { Card } from "@/components/ui/card";
import { ClipboardList, CreditCard, Video, CheckCircle2 } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: ClipboardList,
      number: "1",
      title: "Faça seu cadastro",
      description: "Preencha um formulário rápido com seu nome e e-mail. É o primeiro passo pra ativar seu acesso à plataforma. Leva menos de 1 minuto.",
      emoji: "🩺",
    },
    {
      icon: CreditCard,
      number: "2",
      title: "Escolha seu plano e ative seu acesso",
      description: "Escolha entre o plano individual ou familiar (até 4 pessoas). Assim que o pagamento for confirmado, você recebe no e-mail seu login e instruções para acessar o aplicativo.",
      highlight: '"Seu acesso foi liberado! Agora você pode marcar sua primeira consulta."',
      emoji: "📲",
    },
    {
      icon: Video,
      number: "3",
      title: "Fale com um médico 24h, em português",
      description: "Acesse o aplicativo, escolha a especialidade e entre na consulta por vídeo. Em minutos, você fala com um médico brasileiro, recebe orientação, receita ou encaminhamento direto no celular.",
      highlight: "💬 Sem espera. Sem filas. Sem precisar sair de casa.",
      emoji: "👨‍⚕️",
    },
    {
      icon: CheckCircle2,
      number: "4",
      title: "Resolva o que precisa e siga tranquilo",
      description: "Após a consulta, você já recebe tudo o que precisa: Receitas válidas nos EUA, encaminhamentos, atestados e orientações. Se for algo mais sério, o próprio médico te orienta onde ir, sem erros e sem gastos desnecessários.",
      emoji: "💡",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Como funciona a Easy Doctors
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Veja como é simples realizar consultas médicas em português, direto do seu celular:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-background border-border hover:border-primary transition-all group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                    {step.emoji}
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                        <span className="text-xl">{step.emoji}</span>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 pl-16">
                    {step.description}
                  </p>
                  
                  {step.highlight && (
                    <div className="pl-16">
                      <p className="text-primary font-semibold italic">
                        {step.highlight}
                      </p>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
