export function ServicesSection() {
  const services = [
    {
      number: "SERVICE · 01",
      title: "Architecture Design",
      titleJa: "アーキテクチャ設計",
      description:
        "モノリスの段階的な分割や、マイクロサービスへの移行設計を支援します。現状に合った実現可能なアーキテクチャを一緒に考え、保守しやすく拡張しやすいシステムを目指します。",
    },
    {
      number: "SERVICE · 02",
      title: "Organization Development",
      titleJa: "組織開発",
      description:
        "開発のスピードを上げ、チーム間の依存を減らすための組織設計を行います。責任範囲が明確で、自律的に動けるチーム体制をつくります。",
    },
    {
      number: "SERVICE · 03",
      title: "Technical Leadership",
      titleJa: "技術リーダーシップ",
      description:
        "必要なときに必要なだけ、技術的な意思決定をサポートします。CTO代行、アーキテクチャレビュー、技術戦略の策定、開発組織の成長に向けた実践的なアドバイスを提供します。",
    },
  ]

  return (
    <section
      id="services"
      className="tera-section py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Dotted "03" silhouette */}
      <svg
        className="sil"
        style={{ right: "-6%", bottom: "-4%", width: 820, height: 820, opacity: 0.45 }}
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <pattern id="dotsS" width="3" height="3" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.55" />
          </pattern>
          <mask id="mS">
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
              03
            </text>
          </mask>
        </defs>
        <rect width="200" height="200" fill="url(#dotsS)" mask="url(#mS)" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[1040px] mx-auto">
          <div className="mb-24">
            <h2 className="eyebrow-mono">Services</h2>
            <hr className="w-full h-[0.5px] bg-foreground border-0 m-0" />
          </div>

          <div className="flex flex-col gap-16 md:gap-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="svc-row pt-6 pb-16 md:pb-20 border-b border-foreground/5 last:border-b-0 last:pb-0 grid grid-cols-1 md:grid-cols-[2fr_10fr] gap-8 md:gap-12"
              >
                <div className="mono-num md:pt-[14px]">{service.number}</div>
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-[-0.005em] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg font-light mb-6">{service.titleJa}</p>
                  <p className="text-sm md:text-base font-light leading-[1.75] max-w-[640px]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
