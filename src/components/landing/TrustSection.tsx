import { Shield, Database, Brain, Target } from "lucide-react";

const trustPoints = [
  {
    icon: Database,
    title: "Dados oficiais públicos",
    description: "Utilizamos informações de fontes oficiais como TSE, IBGE e bases governamentais para garantir precisão e confiabilidade."
  },
  {
    icon: Brain,
    title: "Metodologia estruturada",
    description: "Processo baseado em melhores práticas de gestão política e governança, desenvolvido com especialistas do setor."
  },
  {
    icon: Target,
    title: "Foco em gestão real",
    description: "Não é ferramenta de marketing ou propaganda. É um sistema sério para quem quer governar com método e resultados."
  },
  {
    icon: Shield,
    title: "Segurança e privacidade",
    description: "Seus dados são protegidos com criptografia de ponta e armazenados em servidores seguros no Brasil."
  }
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 section-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main visual element */}
              <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 font-display">
                  Confiança baseada em transparência
                </h3>
                <p className="text-primary-foreground/70 max-w-sm mx-auto">
                  Uma plataforma construída para o setor público, com a seriedade que a política exige.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-primary-foreground/10">
                  <div>
                    <div className="text-2xl font-bold text-accent font-display">100%</div>
                    <div className="text-xs text-primary-foreground/60">Dados protegidos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent font-display">LGPD</div>
                    <div className="text-xs text-primary-foreground/60">Conformidade</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent font-display">24/7</div>
                    <div className="text-xs text-primary-foreground/60">Monitoramento</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Por Que Confiar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display leading-tight">
              Uma plataforma séria para quem leva política a sério
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O Meu Mandato 360º foi desenvolvido com foco em governança real, 
              não em promessas vazias. Transparência, segurança e metodologia são nossos pilares.
            </p>

            <div className="space-y-6">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 font-display">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
