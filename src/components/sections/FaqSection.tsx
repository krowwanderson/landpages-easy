import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const FaqSection = () => {
  const faqs = [
    {
      question: "📖 O livro é físico ou digital?",
      answer: "O plano Easy Doctors é 100% digital. Você acessa tudo pelo aplicativo no seu celular.",
    },
    {
      question: "🚀 Qual o prazo de entrega?",
      answer: "Assim que você assinar, você recebe acesso imediato ao aplicativo por e-mail. Pode começar a usar na mesma hora!",
    },
    {
      question: "🎁 O que vem junto com o livro?",
      answer: "Você recebe acesso completo à plataforma Easy Doctors com consultas médicas ilimitadas.",
    },
    {
      question: "💳 Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos cartão de crédito e débito. O pagamento é processado de forma segura.",
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
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
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
                    Fale com minha equipe
                  </p>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Fale conosco
                </Button>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button
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
