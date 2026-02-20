import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Landmark, Building, Flag, Users2, ChevronDown, Target, BarChart3, FileText, MapPin, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileData {
  icon: React.ElementType;
  title: string;
  subheadline: string;
  description: string;
  highlight: string;
  cenario: string;
  atividades: string[];
  entregas: string[];
  resultados: string;
  fraseImpacto: string;
}

const audiences: ProfileData[] = [
  {
    icon: Building2,
    title: "Vereadores",
    subheadline: "Gestão de gabinete com inteligência territorial e proximidade real com a base.",
    description: "Organize sua atuação na Câmara com dados estruturados e visão estratégica do município.",
    highlight: "Foco em demandas municipais",
    cenario: "É segunda-feira e as demandas do fim de semana já se acumulam: um pedido de fiscalização no bairro, uma indicação legislativa urgente, reuniões com lideranças comunitárias. Com o Vertex 360°, o vereador abre o painel e visualiza todas as demandas organizadas por região, prioridade e status — sem perder nenhum compromisso ou solicitação da base.",
    atividades: [
      "Registro e acompanhamento de demandas por bairro e região",
      "Gestão de projetos de lei e indicações legislativas",
      "Agenda integrada com compromissos e visitas de campo",
      "Mapeamento territorial da base de apoiadores",
      "Relatórios de produtividade e atuação parlamentar"
    ],
    entregas: [
      "Painel de demandas organizado por território e status",
      "Histórico completo de atuação legislativa",
      "Relatórios de prestação de contas para a base",
      "Mapa de presença territorial com indicadores",
      "Base de contatos segmentada por região e perfil"
    ],
    resultados: "O vereador que opera com dados estruturados fortalece sua presença territorial, responde com agilidade às demandas da população e constrói um histórico sólido de atuação — fundamentos essenciais para a reeleição e para a credibilidade institucional.",
    fraseImpacto: "Quem organiza a base, governa com autoridade."
  },
  {
    icon: Landmark,
    title: "Prefeitos e Vice-prefeitos",
    subheadline: "Visão executiva completa para administrar o município com método e resultado.",
    description: "Administre seu governo com indicadores de gestão e acompanhamento estratégico de programas.",
    highlight: "Gestão executiva completa",
    cenario: "O prefeito precisa apresentar ao conselho municipal o andamento das obras prioritárias e o impacto dos programas sociais. Com o Vertex 360°, ele acessa um painel executivo com indicadores atualizados, status de cada secretaria e o mapa de entregas por região — tudo em tempo real, sem depender de planilhas dispersas.",
    atividades: [
      "Acompanhamento de obras e programas por secretaria",
      "Painel de indicadores de gestão municipal",
      "Gestão de agenda executiva e compromissos institucionais",
      "Monitoramento de metas e entregas do plano de governo",
      "Articulação com câmara municipal e lideranças regionais"
    ],
    entregas: [
      "Dashboard executivo com visão 360° do município",
      "Relatórios de gestão por área e secretaria",
      "Indicadores de desempenho e cumprimento de metas",
      "Mapa territorial de obras e investimentos",
      "Histórico de decisões e encaminhamentos"
    ],
    resultados: "O prefeito que governa com dados demonstra eficiência, transparência e capacidade de entrega. Isso fortalece a confiança da população, facilita a prestação de contas e posiciona o gestor como referência de administração pública moderna.",
    fraseImpacto: "Governar com método é entregar resultado que a cidade vê."
  },
  {
    icon: Building,
    title: "Deputados Estaduais",
    subheadline: "Articulação regional integrada com visão estratégica de toda a base.",
    description: "Gerencie sua atuação regional com emendas, projetos e articulação municipal integrados.",
    highlight: "Visão regional integrada",
    cenario: "O deputado estadual atua em dezenas de municípios simultaneamente. Precisa acompanhar a execução de emendas parlamentares, manter o relacionamento com prefeitos e vereadores aliados e monitorar projetos em tramitação. Com o Vertex 360°, toda essa complexidade é organizada em um único painel com visão territorial e filtros por município, partido e prioridade.",
    atividades: [
      "Gestão de emendas parlamentares por município e status",
      "Articulação com prefeitos, vereadores e lideranças locais",
      "Acompanhamento de projetos de lei estaduais",
      "Mapeamento da base regional com indicadores eleitorais",
      "Agenda integrada com compromissos em múltiplos municípios"
    ],
    entregas: [
      "Painel de emendas com rastreamento de execução",
      "Rede de contatos políticos organizada por município",
      "Relatórios de atuação regional para prestação de contas",
      "Mapa da base eleitoral com dados territoriais",
      "Histórico de articulações e compromissos cumpridos"
    ],
    resultados: "O deputado estadual que organiza sua base regional com inteligência territorial amplia sua influência política, garante a execução eficiente das emendas e mantém o vínculo estratégico com as lideranças locais — consolidando sua presença em toda a região.",
    fraseImpacto: "Quem domina o território, lidera a região."
  },
  {
    icon: Flag,
    title: "Deputados Federais",
    subheadline: "Gestão nacional com inteligência local: de Brasília às bases, tudo conectado.",
    description: "Organize sua atuação em Brasília e nas bases com gestão multirregional integrada.",
    highlight: "Gestão nacional e local",
    cenario: "Entre sessões em Brasília e agendas nas bases eleitorais espalhadas pelo estado, o deputado federal precisa manter o controle sobre emendas nacionais, projetos em tramitação e uma rede de apoiadores distribuída em múltiplas regiões. O Vertex 360° centraliza toda essa operação, conectando a atuação legislativa à gestão territorial de forma inteligente.",
    atividades: [
      "Gestão de emendas nacionais e acompanhamento orçamentário",
      "Monitoramento de projetos federais em tramitação",
      "Rede de apoiadores e lideranças em múltiplos estados",
      "Agenda integrada entre Brasília e bases regionais",
      "Relatórios de atuação parlamentar e produtividade legislativa"
    ],
    entregas: [
      "Painel nacional de emendas com status de execução",
      "Mapa multirregional da base de apoiadores",
      "Relatórios de atuação para prestação de contas pública",
      "Dashboard de projetos e proposições legislativas",
      "Base de contatos políticos nacional organizada"
    ],
    resultados: "O deputado federal que opera com inteligência territorial e gestão centralizada projeta uma imagem de eficiência e presença. Mantém o vínculo com as bases, otimiza a alocação de recursos e fortalece seu posicionamento político em escala nacional.",
    fraseImpacto: "Presença nacional se constrói com organização local."
  },
  {
    icon: Users2,
    title: "Candidatos e Pré-candidatos",
    subheadline: "Estruturação estratégica antes da campanha: quem se prepara, chega na frente.",
    description: "Comece a construir sua base política com método, dados e planejamento territorial.",
    highlight: "Estruturação estratégica",
    cenario: "Faltam meses para a campanha e o pré-candidato precisa estruturar sua operação do zero: mapear territórios prioritários, organizar contatos, identificar lideranças e definir uma estratégia territorial. Com o Vertex 360°, ele inicia esse processo com ferramentas profissionais, construindo uma base sólida antes mesmo do período eleitoral.",
    atividades: [
      "Mapeamento territorial de zonas eleitorais estratégicas",
      "Organização e segmentação da base de contatos",
      "Identificação e cadastro de lideranças comunitárias",
      "Planejamento estratégico pré-campanha com metas",
      "Construção de agenda de presença territorial"
    ],
    entregas: [
      "Mapa estratégico de territórios prioritários",
      "Base de contatos organizada e segmentada",
      "Plano de ação pré-campanha estruturado",
      "Rede de lideranças mapeada por região",
      "Indicadores de penetração territorial"
    ],
    resultados: "O candidato que chega à campanha com base estruturada, território mapeado e rede de contatos organizada parte com vantagem estratégica decisiva. Não improvisa — executa com método e inteligência desde o primeiro dia.",
    fraseImpacto: "A campanha começa muito antes do primeiro voto."
  }
];

const colorMap = [
  { gradient: "from-accent to-accent/80", bg: "bg-accent/10", text: "text-accent", border: "border-accent/30", activeBg: "bg-accent/5" },
  { gradient: "from-primary to-primary/80", bg: "bg-primary/10", text: "text-primary", border: "border-primary/30", activeBg: "bg-primary/5" },
  { gradient: "from-accent to-accent/80", bg: "bg-accent/10", text: "text-accent", border: "border-accent/30", activeBg: "bg-accent/5" },
  { gradient: "from-primary to-primary/80", bg: "bg-primary/10", text: "text-primary", border: "border-primary/30", activeBg: "bg-primary/5" },
  { gradient: "from-accent to-accent/80", bg: "bg-accent/10", text: "text-accent", border: "border-accent/30", activeBg: "bg-accent/5" },
];

export function AudienceSection() {
  const [activeProfile, setActiveProfile] = useState<number | null>(null);

  const toggleProfile = (index: number) => {
    setActiveProfile(activeProfile === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 section-alt">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Para Quem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
            Soluções estratégicas para cada perfil político
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seja qual for o seu cargo ou momento político, a plataforma se adapta às suas necessidades específicas.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.slice(0, 3).map((audience, index) => (
              <ProfileCard
                key={index}
                audience={audience}
                index={index}
                colors={colorMap[index]}
                isActive={activeProfile === index}
                onClick={() => toggleProfile(index)}
              />
            ))}
          </div>

          {/* Expanded panel for top row */}
          {activeProfile !== null && activeProfile < 3 && (
            <ExpandedPanel
              audience={audiences[activeProfile]}
              colors={colorMap[activeProfile]}
            />
          )}

          {/* Bottom row: 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {audiences.slice(3).map((audience, index) => (
              <ProfileCard
                key={index + 3}
                audience={audience}
                index={index + 3}
                colors={colorMap[index + 3]}
                isActive={activeProfile === index + 3}
                onClick={() => toggleProfile(index + 3)}
              />
            ))}
          </div>

          {/* Expanded panel for bottom row */}
          {activeProfile !== null && activeProfile >= 3 && (
            <ExpandedPanel
              audience={audiences[activeProfile]}
              colors={colorMap[activeProfile]}
            />
          )}
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl border border-accent/20 bg-accent/5">
            <p className="text-lg md:text-xl font-semibold text-foreground font-display leading-relaxed">
              "Independentemente do cargo, o Vertex 360° organiza sua atuação, estrutura sua base e transforma informação em decisão estratégica."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileCard({
  audience,
  index,
  colors,
  isActive,
  onClick,
}: {
  audience: ProfileData;
  index: number;
  colors: typeof colorMap[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Card
      variant="interactive"
      className={cn(
        "group relative overflow-hidden cursor-pointer",
        isActive && `ring-2 ring-accent shadow-xl`
      )}
      onClick={onClick}
    >
      {/* Top gradient bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}`} />

      <CardHeader className="pt-8 pb-2">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <audience.icon className="w-7 h-7 text-accent-foreground" />
        </div>
        <CardTitle className="text-xl">{audience.title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {audience.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} ${colors.text} text-sm font-medium`}>
          {audience.highlight}
        </div>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform duration-300",
            isActive && "rotate-180 text-accent"
          )}
        />
      </CardContent>
    </Card>
  );
}

function ExpandedPanel({
  audience,
  colors,
}: {
  audience: ProfileData;
  colors: typeof colorMap[0];
}) {
  return (
    <div className={`rounded-2xl border ${colors.border} bg-card p-6 md:p-10 animate-fade-up shadow-lg`}>
      {/* Subheadline */}
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-2">
          {audience.title}
        </h3>
        <p className={`text-lg font-medium ${colors.text}`}>
          {audience.subheadline}
        </p>
      </div>

      {/* Cenário de Uso */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
            <Target className="w-4 h-4 text-accent-foreground" />
          </div>
          <h4 className="text-lg font-bold text-foreground font-display">Cenário de Uso</h4>
        </div>
        <p className="text-muted-foreground leading-relaxed pl-11">
          {audience.cenario}
        </p>
      </div>

      {/* Grid: Atividades + Entregas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Atividades */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
              <FileText className="w-4 h-4 text-accent-foreground" />
            </div>
            <h4 className="text-lg font-bold text-foreground font-display">Atividades na Plataforma</h4>
          </div>
          <ul className="space-y-3 pl-11">
            {audience.atividades.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Entregas */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
              <BarChart3 className="w-4 h-4 text-accent-foreground" />
            </div>
            <h4 className="text-lg font-bold text-foreground font-display">Entregas Geradas</h4>
          </div>
          <ul className="space-y-3 pl-11">
            {audience.entregas.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Resultados Estratégicos */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
            <MapPin className="w-4 h-4 text-accent-foreground" />
          </div>
          <h4 className="text-lg font-bold text-foreground font-display">Resultados Estratégicos</h4>
        </div>
        <p className="text-muted-foreground leading-relaxed pl-11">
          {audience.resultados}
        </p>
      </div>

      {/* Frase de Impacto */}
      <div className={`rounded-xl ${colors.bg} border ${colors.border} p-6 flex items-start gap-4`}>
        <Quote className={`w-8 h-8 ${colors.text} shrink-0 mt-1`} />
        <p className={`text-xl md:text-2xl font-bold ${colors.text} font-display italic leading-snug`}>
          {audience.fraseImpacto}
        </p>
      </div>
    </div>
  );
}
