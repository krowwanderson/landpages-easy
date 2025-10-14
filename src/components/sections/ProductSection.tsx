import { Card } from "@/components/ui/card";
import { Check, Smartphone, Clock, Globe, Shield, DollarSign } from "lucide-react";

export const ProductSection = () => {
  const benefits = [
    {
      icon: Smartphone,
      text: "Você tem acesso imediato",
    },
    {
      icon: Globe,
      text: "Fala com quem entende sua língua",
    },
    {
      icon: Shield,
      text: "Resolve sem sair de casa",
    },
    {
      icon: Check,
      text: "Tem a tranquilidade de saber que está sendo cuidado",
    },
  ];

  return (
    <section id="produto" className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Uma nova forma de cuidar da sua saúde e da saúde de{" "}
            <span className="text-accent">quem mais importa para você</span>…
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed mb-12">
            <p className="text-center text-muted-foreground">
              A <span className="text-primary font-bold">Easy Doctors</span> é o seu médico de bolso, feita especialmente para brasileiros que vivem nos EUA.
            </p>
            
            <p>
              É um plano particular com <span className="text-primary font-semibold">consultas médicas imediatas</span>, preço fixo, zero carência e <span className="text-primary font-semibold">sem nenhuma interferência no seu status imigratório</span>.
            </p>
            
            <Card className="p-8 bg-card border-primary">
              <p className="text-xl md:text-2xl font-semibold text-center">
                Com a Easy Doctors, você fala com <span className="text-primary">médicos brasileiros</span>, 24 horas por dia, em português, direto do seu celular.
              </p>
            </Card>
            
            <p>
              É como ligar pra sua família no Brasil — mas, dessa vez, quem atende é um médico que realmente te entende, escuta com calma e te orienta com segurança.
            </p>
            
            <div className="grid gap-4 py-8">
              <div className="flex items-center gap-3 text-primary font-semibold">
                <Check className="h-6 w-6" />
                <span>Sem burocracia.</span>
              </div>
              <div className="flex items-center gap-3 text-primary font-semibold">
                <Check className="h-6 w-6" />
                <span>Sem medo de conta surpresa.</span>
              </div>
              <div className="flex items-center gap-3 text-primary font-semibold">
                <Check className="h-6 w-6" />
                <span>Sem tentar se explicar em inglês, no meio de um mal-estar.</span>
              </div>
            </div>
            
            <Card className="p-8 bg-primary/10 border-primary">
              <h3 className="text-2xl font-bold mb-4">E por que isso importa?</h3>
              <p className="text-lg">
                Porque, como mostram estudos do próprio sistema de saúde americano, <span className="text-accent font-bold">96% dos casos são resolvidos apenas com uma boa conversa com o médico</span>.
              </p>
              <p className="mt-4">
                Nada de exames caros ou salas de espera lotadas. O que resolve, na maioria das vezes, é ser ouvido por quem sabe o que está fazendo — e entende o que você sente.
              </p>
            </Card>
          </div>

          <div className="bg-card/50 rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <DollarSign className="h-12 w-12 text-destructive" />
              <h3 className="text-2xl md:text-3xl font-bold">O problema dos $300 por mês</h3>
            </div>
            <p className="text-lg mb-6">
              Pesquisas recentes mostram que, dentro da comunidade brasileira, uma pessoa ou família vai ao médico <span className="font-semibold">pelo menos duas vezes por mês</span> — por motivos comuns: gripe, febre, dor de cabeça, mal-estar... Coisas simples, mas que exigem orientação.
            </p>
            <p className="text-lg mb-4">
              O problema? Cada consulta custa pelo menos <span className="text-destructive font-bold">$150</span>.
            </p>
            <p className="text-xl font-bold text-destructive">
              Duas por mês = $300. Isso sem contar exames, remédios ou cobranças inesperadas que chegam pelo correio dias depois.
            </p>
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Com a Easy Doctors, é diferente…
            </h3>
            
            <p className="text-xl text-white mb-8 text-center">
              Você paga um <span className="font-bold text-accent">valor fixo por mês</span>, que custa até <span className="font-bold text-accent">10 vezes menos</span> do que os $300 que gastaria com o sistema tradicional — e ainda pode incluir até 3 dependentes no mesmo plano.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                    <Icon className="h-8 w-8 text-white flex-shrink-0" />
                    <p className="text-white font-semibold">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
            
            <p className="text-lg text-white/90 text-center">
              Daqui a pouco, eu vou te mostrar como fazer sua assinatura.<br />
              Mas antes, deixa eu te mostrar como é ser cliente da Easy Doctors na prática…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
