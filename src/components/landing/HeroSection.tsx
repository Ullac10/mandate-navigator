import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart3, Map, FolderKanban } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Plataforma de Gestão Política
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 font-display animate-fade-up animation-delay-100">
            Governar não é improviso.
            <br />
            <span className="text-gradient">É método, dados e estratégia.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-200">
            O Meu Mandato 360º é uma plataforma que organiza dados, base política,
            projetos e entregas — antes, durante e depois do mandato.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl">
              Quero organizar meu mandato
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Ver como funciona
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-10 border-t border-white/10 animate-fade-up animation-delay-400">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3 text-white/60">
                <BarChart3 className="w-5 h-5 text-accent" />
                <span className="text-sm">Dados estruturados</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Map className="w-5 h-5 text-accent" />
                <span className="text-sm">Visão territorial</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <FolderKanban className="w-5 h-5 text-accent" />
                <span className="text-sm">Gestão de entregas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
