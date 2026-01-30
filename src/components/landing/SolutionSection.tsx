import { CheckCircle2, Database, LineChart, Users } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    text: "Organização completa"
  },
  {
    icon: LineChart,
    text: "Continuidade garantida"
  },
  {
    icon: Database,
    text: "Visão territorial"
  },
  {
    icon: Users,
    text: "Clareza para decidir"
  }
];

export function SolutionSection() {
  return (
    <section className="py-20 md:py-28 section-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              A Solução
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display leading-tight">
              Seu mandato precisa de um{" "}
              <span className="text-gradient">sistema operacional</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O Meu Mandato 360º é uma plataforma de gestão estratégica para mandatos políticos. 
              Centraliza dados, organiza projetos, mapeia sua base e transforma informação em decisões inteligentes.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <benefit.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground">
              <strong className="text-foreground">Não é apenas um CRM.</strong> É uma ferramenta de governança 
              que conecta campanha, mandato e prestação de contas.
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl border-2 border-border shadow-xl p-8 overflow-hidden">
              {/* Mock dashboard */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-display">Painel Estratégico</h3>
                    <p className="text-sm text-muted-foreground">Visão consolidada do mandato</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <LineChart className="w-5 h-5 text-accent" />
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-foreground font-display">847</div>
                    <div className="text-xs text-muted-foreground">Apoiadores mapeados</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-foreground font-display">23</div>
                    <div className="text-xs text-muted-foreground">Projetos em andamento</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-foreground font-display">78%</div>
                    <div className="text-xs text-muted-foreground">Compromissos cumpridos</div>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/10">
                    <div className="text-2xl font-bold text-accent font-display">12</div>
                    <div className="text-xs text-muted-foreground">Municípios ativos</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progresso do mandato</span>
                    <span className="font-medium text-foreground">42 meses</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[87%] bg-accent rounded-full" />
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl border-2 border-border shadow-lg p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Entrega concluída</div>
                  <div className="text-xs text-muted-foreground">Pavimentação Rua Central</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
