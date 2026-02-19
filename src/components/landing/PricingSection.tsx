import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Vereadores",
    monthly: "R$ 199",
    description: "Ideal para gestão municipal focada",
    features: [
      "Painel estratégico básico",
      "Gestão de apoiadores",
      "Acompanhamento de demandas",
      "Relatórios mensais",
      "Suporte por email"
    ],
    highlighted: false
  },
  {
    name: "Prefeitos e Vice",
    monthly: "R$ 399",
    description: "Gestão executiva completa do município",
    features: [
      "Todos os recursos de Vereadores",
      "Mapa territorial completo",
      "Gestão de projetos e obras",
      "Indicadores de gestão",
      "Suporte prioritário"
    ],
    highlighted: false
  },
  {
    name: "Deputado Estadual",
    monthly: "R$ 599",
    description: "Visão regional com múltiplos municípios",
    features: [
      "Todos os recursos anteriores",
      "Gestão multi-municipal",
      "Emendas parlamentares",
      "Análise regional",
      "Onboarding dedicado"
    ],
    highlighted: false
  },
  {
    name: "Deputado Federal",
    monthly: "R$ 799",
    description: "Gestão nacional e articulação completa",
    features: [
      "Todos os recursos anteriores",
      "Gestão nacional",
      "Múltiplas bases territoriais",
      "Integrações avançadas",
      "Consultor dedicado"
    ],
    highlighted: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Investimento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
            Planos transparentes para cada cargo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano Vertex 360° ideal para o seu mandato. Todos incluem setup completo, 
            treinamento e suporte técnico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              variant={plan.highlighted ? "pricingHighlight" : "pricing"}
              className="relative"
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                  Mais popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="pb-4 border-b border-border">
                  <div className="text-sm text-muted-foreground mb-1">Mensal</div>
                  <div className="text-3xl font-bold text-foreground font-display">{plan.monthly}</div>
                  <div className="text-xs text-muted-foreground">/mês</div>
                  <div className="text-xs text-muted-foreground mt-2">+ setup*</div>
                </div>
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={plan.highlighted ? "cta" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <a href="https://wa.me/5551996807694" target="_blank" rel="noopener noreferrer">
                    Começar agora
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-sm text-muted-foreground mb-12">
          *Consultar valor de setup de acordo com o plano escolhido
        </p>

        {/* Enterprise tier */}
        <Card variant="elevated" className="max-w-2xl mx-auto border-2 border-primary/20">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-display">
                  Senadores, Governadores e Presidência
                </h3>
                <p className="text-muted-foreground">
                  Soluções personalizadas para cargos de alta complexidade. 
                  Entre em contato para uma proposta sob medida.
                </p>
              </div>
              <Button variant="default" size="lg" className="flex-shrink-0" asChild>
                <a href="https://wa.me/5551996807694" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar com consultor
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
