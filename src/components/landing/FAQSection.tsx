import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Isso é um CRM?",
    answer: "Não apenas. O Meu Mandato 360º é uma plataforma de gestão estratégica completa que inclui funcionalidades de CRM, mas vai muito além. Integra gestão de projetos, mapeamento territorial, indicadores de desempenho e acompanhamento de compromissos em um único sistema."
  },
  {
    question: "Funciona para quem ainda não tem mandato?",
    answer: "Sim! Temos um módulo específico para pré-candidatos e candidatos. Você pode começar a estruturar sua base política, mapear apoiadores e organizar sua estratégia antes mesmo da campanha oficial."
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Absolutamente. Utilizamos criptografia de ponta a ponta, servidores localizados no Brasil e seguimos todas as diretrizes da LGPD. Seus dados são seus e permanecem sempre sob seu controle."
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim, a plataforma é totalmente responsiva e funciona perfeitamente em smartphones e tablets. Você pode gerenciar seu mandato de qualquer lugar, a qualquer momento."
  },
  {
    question: "Quanto tempo leva para começar a usar?",
    answer: "Após a contratação, o setup inicial leva de 5 a 10 dias úteis, dependendo do volume de dados a serem migrados. Incluímos treinamento completo para você e sua equipe."
  },
  {
    question: "Preciso instalar algum programa?",
    answer: "Não. O Meu Mandato 360º é uma plataforma 100% online (SaaS). Basta acessar pelo navegador, sem necessidade de instalação ou atualizações manuais."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim, não há fidelidade. Você pode cancelar a assinatura a qualquer momento. Seus dados podem ser exportados de forma completa antes do encerramento."
  },
  {
    question: "Vocês ajudam na migração de dados existentes?",
    answer: "Sim, nosso processo de setup inclui a migração de dados de planilhas, outros sistemas ou documentos que você já possua. Nossa equipe cuida de toda a importação."
  }
];

export function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
            Perguntas que você pode ter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostas diretas para as dúvidas mais comuns sobre a plataforma.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl px-6 data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-accent font-display py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
