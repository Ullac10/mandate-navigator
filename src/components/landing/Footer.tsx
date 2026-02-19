const footerLinks = {
  platform: {
    title: "Plataforma",
    links: [
      { label: "Módulos", href: "#modulos" },
      { label: "Preços", href: "#pricing" },
      { label: "FAQ", href: "#faq" }
    ]
  },
  company: {
    title: "Empresa",
    links: [
      { label: "Sobre nós", href: "#" },
      { label: "Contato", href: "#" },
      { label: "Blog", href: "#" }
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Termos de uso", href: "#" },
      { label: "Privacidade", href: "#" },
      { label: "LGPD", href: "#" }
    ]
  }
};

export function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">V</span>
              </div>
              <span className="text-white font-bold text-lg font-display">
                Vertex 360°
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Plataforma de inteligência estratégica para mandatos políticos. 
              Integre dados territoriais, gestão e suporte à decisão em um só lugar.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-white font-semibold mb-4 font-display">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Vertex 360°. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-sm">
            Feito com propósito para a política brasileira.
          </p>
        </div>
      </div>
    </footer>
  );
}
