import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3 } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-8">
            <BarChart3 className="w-8 h-8 text-accent" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display leading-tight">
            Quem governa com dados
            <br />
            <span className="text-gradient">governa melhor.</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Transforme seu mandato em uma gestão estratégica, organizada e focada em resultados reais para sua base política.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5551996807694" target="_blank" rel="noopener noreferrer">
                Agendar demonstração
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-sm text-white/50">
            Sem compromisso. Entenda como a plataforma pode ajudar seu mandato.
          </p>
        </div>
      </div>
    </section>
  );
}
