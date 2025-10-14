import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, TestTube, Stethoscope, FileText, Pill, AlertTriangle, DollarSign } from "lucide-react";

export const FaqSection = () => {
  const handleAssinaturaClick = () => {
    // Por enquanto, só um alert. Depois adicionamos o redirect com UTM
    alert("Redirecionamento para assinatura será implementado aqui!");
  };

  const handleFaleConoscoClick = () => {
    const phoneNumber = "+14072867954";
    const message = "Estou com dúvidas sobre a EasyDoctors";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const faqs = [
    {
      icon: TestTube,
      question: "A Medicina Online da Easy Doctors inclui exames?",
      answer: "Não. Exames são complementares e nem toda consulta exige um. Para manter o valor acessível, a Easy Doctors decidiu não incluir em sua mensalidade valores referentes aos exames — evitando dividir esse custo com todos os usuários.",
    },
    {
      icon: Stethoscope,
      question: "O plano inclui consultas presenciais com médicos?",
      answer: "Não. Estudos mostram que cerca de 96% das consultas médicas não exigem exame físico e podem ser resolvidas com uma consulta assertiva com o médico. Por isso, a Easy Doctors é 100% online — mais rápida, prática e econômica. (Fonte: American Medical Association / Conselho Federal de Medicina)",
    },
    {
      icon: FileText,
      question: "O plano oferece receitas válidas no Brasil e nos EUA?",
      answer: "Sim! A Easy Doctors emite receitas e pedidos de exame tanto no Brasil quanto nos Estados Unidos, de acordo com as normas médicas de cada país.",
    },
    {
      icon: Pill,
      question: "Há desconto em medicamentos?",
      answer: "Não. Como nem todo tratamento envolve medicação, optamos por não incluir esse custo na mensalidade — mantendo o plano enxuto e acessível para todos.",
    },
    {
      icon: AlertTriangle,
      question: "Em caso de emergência, posso usar a Easy Doctors?",
      answer: "A Easy Doctors não cobre emergências ou atendimentos hospitalares. Nossa especialidade são os atendimentos online, que resolvem a grande maioria dos casos clínicos comuns.",
    },
    {
      icon: DollarSign,
      question: "Qual o valor para uma pessoa?",
      answer: "O plano custa $49,90 por mês, válido para até 4 pessoas da mesma família (inclusive no Brasil). Há descontos para pagamento trimestral, semestral ou anual.",
    },
  ];

  return (
    <section id="sobre-faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Perguntas Frequentes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => {
                  const Icon = faq.icon;
                  return (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-card border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:text-primary">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
            
            <div>
              <Card className="p-6 bg-card border-primary sticky top-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Outras Dúvidas?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fale com nossa equipe
                  </p>
                </div>
                
                <Button onClick={handleFaleConoscoClick} className="w-full bg-primary hover:bg-primary/90">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Fale conosco
                </Button>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button
              onClick={handleAssinaturaClick}
              size="lg"
              className="bg-gradient-accent hover:shadow-accent text-lg px-12 py-7 font-bold text-accent-foreground"
            >
              Fazer assinatura agora →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
