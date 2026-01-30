import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LayoutDashboard, MapPin, FolderKanban, Users, Target, ChevronRight } from "lucide-react";

const modules = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Painel Estratégico",
    subtitle: "Indicadores, KPIs e alertas",
    description: "Visualize o desempenho do seu mandato em tempo real. Acompanhe indicadores-chave, receba alertas estratégicos e tome decisões baseadas em dados consolidados.",
    features: ["KPIs personalizados", "Alertas automáticos", "Projeções e tendências", "Relatórios executivos"]
  },
  {
    id: "map",
    icon: MapPin,
    title: "Mapa Territorial",
    subtitle: "Cidades, regiões e base política",
    description: "Entenda geograficamente seu mandato. Mapeie municípios, regiões de influência, concentração de apoiadores e identifique oportunidades territoriais.",
    features: ["Mapa interativo", "Densidade de apoio", "Análise por região", "Histórico eleitoral"]
  },
  {
    id: "projects",
    icon: FolderKanban,
    title: "Projetos e Compromissos",
    subtitle: "O que foi prometido e entregue",
    description: "Gerencie todos os projetos e compromissos de campanha. Acompanhe o status de cada entrega e mantenha um histórico completo de realizações.",
    features: ["Gestão de projetos", "Timeline de entregas", "Status em tempo real", "Prestação de contas"]
  },
  {
    id: "base",
    icon: Users,
    title: "Gestão da Base Política",
    subtitle: "Líderes, apoiadores e articuladores",
    description: "Organize sua rede de relacionamentos políticos. Cadastre apoiadores, lideranças, articuladores e mantenha o histórico de cada contato.",
    features: ["Cadastro estruturado", "Segmentação inteligente", "Histórico de interações", "Rede de influência"]
  },
  {
    id: "precampaign",
    icon: Target,
    title: "Organização Pré-Campanha",
    subtitle: "Para candidatos e pré-candidatos",
    description: "Comece a organizar sua base antes mesmo da campanha oficial. Estruture contatos, mapeie territórios e prepare sua estratégia eleitoral.",
    features: ["Estruturação inicial", "Mapeamento de apoios", "Planejamento estratégico", "Transição para mandato"]
  }
];

export function ModulesSection() {
  const [activeModule, setActiveModule] = useState(modules[0]);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Módulos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
            Uma plataforma completa para seu mandato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cinco módulos integrados que cobrem todas as dimensões da gestão política moderna.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-4 mb-8">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module)}
              className={`group p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                activeModule.id === module.id
                  ? "border-accent bg-accent/5"
                  : "border-border bg-card hover:border-accent/30"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                activeModule.id === module.id ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent"
              }`}>
                <module.icon className="w-5 h-5" />
              </div>
              <h3 className={`text-sm font-bold mb-1 font-display ${
                activeModule.id === module.id ? "text-accent" : "text-foreground"
              }`}>
                {module.title}
              </h3>
              <p className="text-xs text-muted-foreground">{module.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Active module detail */}
        <Card variant="elevated" className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <CardHeader className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <activeModule.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{activeModule.title}</CardTitle>
                  <CardDescription className="text-base">{activeModule.subtitle}</CardDescription>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {activeModule.description}
              </p>
              <ul className="space-y-3">
                {activeModule.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardHeader>
            <CardContent className="p-0 bg-muted/30 flex items-center justify-center min-h-[300px]">
              <div className="text-center p-8">
                <activeModule.icon className="w-20 h-20 text-accent/20 mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">Visualização do módulo</p>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
