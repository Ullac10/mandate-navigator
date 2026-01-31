import { FileSpreadsheet, MessageCircle, MapPinOff, ClipboardList, ArrowRightLeft } from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Dados espalhados",
    description: "Informações críticas perdidas em planilhas, anotações e documentos desconexos."
  },
  {
    icon: MessageCircle,
    title: "Comunicação fragmentada",
    description: "Contatos, compromissos e decisões registrados apenas em grupos de WhatsApp."
  },
  {
    icon: MapPinOff,
    title: "Sem visão territorial",
    description: "Dificuldade em mapear a base política e entender a geografia do mandato."
  },
  {
    icon: ClipboardList,
    title: "Entregas descontroladas",
    description: "Projetos e compromissos de campanha sem acompanhamento estruturado."
  },
  {
    icon: ArrowRightLeft,
    title: "Descontinuidade política",
    description: "Informações perdidas na transição entre campanha e mandato."
  }
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-accent font-bold text-lg uppercase tracking-wider mb-4 animate-pulse">
            ⚠ O Problema
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
            Mandatos desorganizados geram decisões ruins
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A maioria dos políticos governa sem sistema, sem metodologia e sem uma visão consolidada. 
            O resultado? Oportunidades perdidas, promessas esquecidas e base política fragilizada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border-2 border-border bg-card hover:border-destructive/30 hover:bg-destructive/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-display">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
