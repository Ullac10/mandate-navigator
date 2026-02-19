import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Módulos", href: "#modulos" },
  { label: "Para Quem", href: "#para-quem" },
  { label: "Preços", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">V</span>
            </div>
            <span className="text-white font-bold text-lg font-display hidden sm:block">
              Vertex 360°
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button variant="hero" size="sm" className="hidden sm:flex" asChild>
              <a href="https://wa.me/5551996807694" target="_blank" rel="noopener noreferrer">
                Começar
                <ChevronRight className="w-4 h-4" />
              </a>
            </Button>
            
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="sm" className="mt-2" asChild>
                <a href="https://wa.me/5551996807694" target="_blank" rel="noopener noreferrer">
                  Começar
                  <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
