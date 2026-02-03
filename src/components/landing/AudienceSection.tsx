import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Landmark, Building, Flag, Users2 } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Vereadores",
    description: "Organize sua atuação na Câmara. Gerencie demandas do município, acompanhe projetos de lei e mantenha proximidade com a base local.",
    highlight: "Foco em demandas municipais",
    color: "from-teal-500 to-teal-600",
    bgAccent: "bg-teal-500/10",
    textAccent: "text-teal-600"
  },
  {
    icon: Landmark,
    title: "Prefeitos e Vice-prefeitos",
    description: "Administre seu governo com visão estratégica. Acompanhe obras, programas sociais e a gestão completa do município.",
    highlight: "Gestão executiva completa",
    color: "from-blue-500 to-blue-600",
    bgAccent: "bg-blue-500/10",
    textAccent: "text-blue-600"
  },
  {
    icon: Building,
    title: "Deputados Estaduais",
    description: "Gerencie sua base regional. Acompanhe emendas parlamentares, projetos e a articulação com municípios da sua região.",
    highlight: "Visão regional integrada",
    color: "from-indigo-500 to-indigo-600",
    bgAccent: "bg-indigo-500/10",
    textAccent: "text-indigo-600"
  },
  {
    icon: Flag,
    title: "Deputados Federais",
    description: "Organize sua atuação em Brasília e nas bases. Gerencie emendas, projetos nacionais e a rede de apoiadores pelo país.",
    highlight: "Gestão nacional e local",
    color: "from-purple-500 to-purple-600",
    bgAccent: "bg-purple-500/10",
    textAccent: "text-purple-600"
  },
  {
    icon: Users2,
    title: "Candidatos e Pré-candidatos",
    description: "Comece a estruturar sua base política antes mesmo de ter um mandato. Organize contatos, mapeie territórios e prepare-se para a campanha.",
    highlight: "Estruturação estratégica",
    color: "from-emerald-500 to-emerald-600",
    bgAccent: "bg-emerald-500/10",
    textAccent: "text-emerald-600"
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

        {/* Grid responsivo: 1 coluna mobile, 2 tablets, 3 desktop - últimos 2 cards centralizados */}
        <div className="max-w-6xl mx-auto">
          {/* Primeiros 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {audiences.slice(0, 3).map((audience, index) => (
              <Card 
                key={index} 
                variant="interactive"
                className="group relative overflow-hidden"
              >
                {/* Decorative gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${audience.color}`} />
                
                <CardHeader className="pt-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <audience.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{audience.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {audience.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${audience.bgAccent} ${audience.textAccent} text-sm font-medium`}>
                    {audience.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Últimos 2 cards centralizados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {audiences.slice(3).map((audience, index) => (
              <Card 
                key={index + 3} 
                variant="interactive"
                className="group relative overflow-hidden"
              >
                {/* Decorative gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${audience.color}`} />
                
                <CardHeader className="pt-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <audience.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{audience.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {audience.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${audience.bgAccent} ${audience.textAccent} text-sm font-medium`}>
                    {audience.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
