import { MapPin } from "lucide-react";

// Coordenadas aproximadas de cidades brasileiras (em porcentagem do SVG)
const cities = [
  { name: "São Paulo", x: 52, y: 68, size: "lg" },
  { name: "Rio de Janeiro", x: 58, y: 65, size: "md" },
  { name: "Brasília", x: 50, y: 55, size: "lg" },
  { name: "Salvador", x: 68, y: 52, size: "md" },
  { name: "Fortaleza", x: 66, y: 35, size: "md" },
  { name: "Belo Horizonte", x: 55, y: 60, size: "md" },
  { name: "Manaus", x: 30, y: 32, size: "md" },
  { name: "Curitiba", x: 48, y: 75, size: "sm" },
  { name: "Recife", x: 72, y: 42, size: "sm" },
  { name: "Porto Alegre", x: 45, y: 85, size: "sm" },
  { name: "Belém", x: 48, y: 28, size: "sm" },
  { name: "Goiânia", x: 46, y: 57, size: "sm" },
  { name: "Natal", x: 73, y: 38, size: "sm" },
  { name: "Campo Grande", x: 38, y: 65, size: "sm" },
  { name: "Cuiabá", x: 36, y: 52, size: "sm" },
  { name: "Maceió", x: 72, y: 46, size: "sm" },
  { name: "João Pessoa", x: 74, y: 40, size: "sm" },
  { name: "Teresina", x: 58, y: 38, size: "sm" },
  { name: "Florianópolis", x: 50, y: 80, size: "sm" },
  { name: "Vitória", x: 62, y: 62, size: "sm" },
];

const sizeClasses = {
  lg: "w-4 h-4",
  md: "w-3 h-3",
  sm: "w-2 h-2",
};

const pulseDelays = [
  "animation-delay-0",
  "animation-delay-100",
  "animation-delay-200",
  "animation-delay-300",
  "animation-delay-400",
];

export function BrazilMap() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-4">
      {/* Mapa do Brasil SVG simplificado */}
      <div className="relative w-full max-w-[400px] aspect-square">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}
        >
          {/* Contorno simplificado do Brasil */}
          <path
            d="M30 25 
               L35 20 L45 18 L55 20 L65 22 L75 30 L78 40 L75 50 L72 55 
               L70 48 L68 42 L65 35 L60 30 L55 28 L50 25 L45 23 L40 22 L35 23
               L75 55 L72 60 L68 65 L62 68 L55 72 L50 78 L45 85 L42 88
               L38 82 L35 75 L38 68 L42 62 L45 58 L42 55 L38 52 L35 48
               L32 42 L28 38 L25 32 L28 28 L30 25
               Z"
            fill="hsl(var(--accent) / 0.15)"
            stroke="hsl(var(--accent) / 0.4)"
            strokeWidth="0.5"
          />
          {/* Contorno mais preciso do Brasil */}
          <path
            d="M32,28 C28,25 25,22 28,18 C32,15 40,14 48,15 C56,14 62,16 68,20 
               C74,24 78,30 80,38 C81,45 78,52 75,58 C72,62 68,65 65,68 
               C60,72 55,76 50,80 C46,84 43,88 40,90 C38,88 36,84 35,80 
               C34,76 36,72 38,68 C40,64 43,60 44,56 C44,52 42,48 38,45 
               C34,42 30,38 28,34 C26,30 28,28 32,28 Z"
            fill="hsl(var(--accent) / 0.1)"
            stroke="hsl(var(--accent) / 0.5)"
            strokeWidth="0.8"
          />
        </svg>

        {/* Pins de localização */}
        {cities.map((city, index) => (
          <div
            key={city.name}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${city.x}%`, top: `${city.y}%` }}
          >
            {/* Círculo pulsante de fundo */}
            <span
              className={`absolute inset-0 rounded-full bg-accent/40 animate-ping ${
                pulseDelays[index % pulseDelays.length]
              }`}
              style={{
                animationDuration: `${1.5 + (index % 3) * 0.5}s`,
              }}
            />
            {/* Pin principal */}
            <span
              className={`relative block rounded-full bg-accent shadow-lg ${
                sizeClasses[city.size as keyof typeof sizeClasses]
              }`}
            />
            {/* Tooltip no hover */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-accent-foreground bg-accent rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              {city.name}
            </span>
          </div>
        ))}

        {/* Legenda */}
        <div className="absolute bottom-2 right-2 bg-card/80 backdrop-blur-sm rounded-lg p-2 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-3 h-3 text-accent" />
            <span>Apoiadores mapeados</span>
          </div>
        </div>
      </div>
    </div>
  );
}
