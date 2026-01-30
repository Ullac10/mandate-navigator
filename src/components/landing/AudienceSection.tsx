import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Landmark, Building, Flag, Users2 } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Vereadores",
    description: "Organize sua atuação na Câmara. Gerencie demandas do município, acompanhe projetos de lei e mantenha proximidade com a base local.",
    highlight: "Foco em demandas municipais"
  },
  {
    icon: Landmark,
    title: "Prefeitos e Vice-prefeitos",
    description: "Administre seu governo com visão estratégica. Acompanhe obras, programas sociais e a gestão completa do município.",
    highlight: "Gestão executiva completa"
  },
  {
    icon: Building,
    title: "Deputados Estaduais",
    description: "Gerencie sua base regional. Acompanhe emendas parlamentares, projetos e a articulação com municípios da sua região.",
    highlight: "Visão regional integrada"
  },
  {
    icon: Flag,
    title: "Deputados Federais",
    description: "Organize sua atuação em Brasília e nas bases. Gerencie emendas, projetos nacionais e a rede de apoiadores pelo país.",
    highlight: "Gestão nacional e local"
  },
  {
    icon: Users2,
    title: "Candidatos e Pré-candidatos",
    description: "Comece a estruturar sua base política antes mesmo de ter um mandato. Organize contatos, mapeie territórios e prepare-se para a campanha.",
    highlight: "Estruturação estratégica"
  }
];

export function AudienceSection() {
  return (
    <section className="py-20 md:py-28 section-alt">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Para Quem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
            Soluções para cada perfil político
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seja qual for o seu cargo ou momento político, a plataforma se adapta às suas necessidades específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              variant="interactive"
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <audience.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{audience.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {audience.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  {audience.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
