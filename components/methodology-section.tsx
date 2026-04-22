export function MethodologySection() {
  const methodologies = [
    {
      number: "METHOD · 01",
      title: "Inverse Conway",
      subtitle: "Aligning teams with architecture",
      description: "目指すアーキテクチャに合わせて、組織構造とチーム境界を設計し直します",
      details:
        "Restructure your organization to match the architecture you need. Design team boundaries that support system modularity and independent delivery.",
    },
    {
      number: "METHOD · 02",
      title: "Domain-Driven Design",
      subtitle: "Shared language, clear boundaries",
      description: "ビジネスの言葉と技術の言葉を揃え、境界を明確にして開発しやすくします",
      details:
        "Establish a shared language between business and engineering. Define bounded contexts so that each part of the system can be maintained and scaled independently.",
    },
    {
      number: "METHOD · 03",
      title: "Team Topologies",
      subtitle: "Reducing friction, improving flow",
      description: "チームの認知負荷を減らし、開発がスムーズに進む体制をつくります",
      details:
        "Design team structures and interactions that reduce cognitive load and improve delivery flow, using stream-aligned, platform, enabling, and complicated-subsystem team patterns.",
    },
  ]

  return (
    <section
      id="methodology"
      className="tera-section py-24 md:py-32 lg:py-40 border-t border-foreground/5 relative overflow-hidden"
    >
      {/* Dotted "02" silhouette */}
      <svg
        className="sil"
        style={{ left: "-6%", top: "-4%", width: 820, height: 820, opacity: 0.45 }}
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <pattern id="dotsM" width="3" height="3" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.55" />
          </pattern>
          <mask id="mM">
            <rect width="200" height="200" fill="#000" />
            <text
              x="100"
              y="155"
              textAnchor="middle"
              fontFamily="ui-monospace, Menlo, monospace"
              fontSize="180"
              fontWeight="700"
              fill="#fff"
              letterSpacing="-8"
            >
              02
            </text>
          </mask>
        </defs>
        <rect width="200" height="200" fill="url(#dotsM)" mask="url(#mM)" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-24">
            <h2 className="eyebrow-mono">Methodology</h2>
            <hr className="w-full h-[0.5px] bg-foreground border-0 m-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-foreground/10 bg-background/85 backdrop-blur-sm">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="meth-cell p-8 lg:p-12 border-r border-b border-foreground/10"
              >
                <div className="mono-num mb-8">{method.number}</div>
                <h3 className="text-lg md:text-xl font-medium mb-1">{method.title}</h3>
                <p className="text-xs italic font-light mb-6">{method.subtitle}</p>
                <p className="text-xs md:text-sm font-light leading-[1.75] mb-4">{method.description}</p>
                <p className="text-xs font-light leading-[1.75] pt-4">{method.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
