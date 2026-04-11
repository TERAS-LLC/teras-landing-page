"use client"

import { useState } from "react"

export function MethodologySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const methodologies = [
    {
      title: "Inverse Conway",
      subtitle: "Aligning teams with architecture",
      description: "目指すアーキテクチャに合わせて、組織構造とチーム境界を設計し直します",
      details:
        "Restructure your organization to match the architecture you need. Design team boundaries that support system modularity and independent delivery.",
    },
    {
      title: "Domain-Driven Design",
      subtitle: "Shared language, clear boundaries",
      description: "ビジネスの言葉と技術の言葉を揃え、境界を明確にして開発しやすくします",
      details:
        "Establish a shared language between business and engineering. Define bounded contexts so that each part of the system can be maintained and scaled independently.",
    },
    {
      title: "Team Topologies",
      subtitle: "Reducing friction, improving flow",
      description: "チームの認知負荷を減らし、開発がスムーズに進む体制をつくります",
      details:
        "Design team structures and interactions that reduce cognitive load and improve delivery flow, using stream-aligned, platform, enabling, and complicated-subsystem team patterns.",
    },
  ]

  return (
    <section id="methodology" className="py-24 md:py-32 lg:py-40 border-t border-foreground/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl font-semibold tracking-widest text-foreground uppercase mb-4">Methodology</h2>
            <div className="w-full h-[0.5px] bg-foreground" />
          </div>

          {/* Minimalist grid */}
          <div className="grid md:grid-cols-3 border-l border-t border-foreground/10">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="border-r border-b border-foreground/10 p-8 md:p-10 lg:p-12 transition-all duration-500 relative overflow-hidden group cursor-default"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover effect: increasing density (darkness) */}
                <div
                  className="absolute inset-0 bg-foreground transition-opacity duration-500"
                  style={{
                    opacity: hoveredIndex === index ? 0.03 : 0,
                  }}
                />

                <div className="relative space-y-6">
                  {/* Number */}
                  <div className="text-5xl font-light text-foreground group-hover:text-foreground transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Title and subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-medium text-foreground">{method.title}</h3>
                    <p className="text-xs font-light text-foreground italic">{method.subtitle}</p>
                  </div>

                  {/* Description in Japanese */}
                  <p className="text-xs md:text-sm font-light text-foreground leading-relaxed">
                    {method.description}
                  </p>

                  {/* Details in English */}
                  <p className="text-xs font-light text-foreground leading-relaxed pt-4">{method.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
