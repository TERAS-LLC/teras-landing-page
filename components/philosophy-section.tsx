export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section title */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl font-semibold tracking-widest text-foreground uppercase mb-4">Philosophy</h2>
            <div className="w-full h-[0.5px] bg-foreground" />
          </div>

          {/* Editorial grid layout */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light text-foreground leading-tight text-balance">
                  複雑さに向き合い、構造をつくる
                </h3>
                <p className="text-sm md:text-base font-light text-foreground leading-relaxed">
                  We face complexity head-on and build practical structure.
                </p>
              </div>

              <div className="space-y-6 text-sm md:text-base font-light text-foreground leading-relaxed">
                <p>
                  TERASの名は、ギリシャ語で「驚異」を意味するΤέραςに由来します。大規模で複雑なシステムの課題に正面から取り組み、明確な構造へと整理していくことが私たちの仕事です。
                </p>
                <p className="text-foreground italic text-xs md:text-sm">
                  The name TERAS comes from the Greek word Τέρας, meaning "wonder." Our work is to take on the
                  challenges of large, complex systems and organize them into clear, workable structures.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-foreground">Engineering as Practice</h4>
                <p className="text-sm font-light text-foreground leading-relaxed">
                  開発とは、複雑さを整理し、扱いやすくする地道な作業です。適切な境界設計、責務の分離、データの流れの整備を一つひとつ積み重ねます。
                </p>
                <p className="text-xs font-light text-foreground leading-relaxed italic">
                  Development is the steady work of organizing complexity into something manageable — defining clear
                  boundaries, separating responsibilities, and structuring data flows, one step at a time.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-medium text-foreground">Structure & Clarity</h4>
                <p className="text-sm font-light text-foreground leading-relaxed">
                  曖昧さを減らし、明確な設計を通じてシステム全体の見通しをよくします。誰が見ても理解できる構造を目指します。
                </p>
                <p className="text-xs font-light text-foreground leading-relaxed italic">
                  We reduce ambiguity and improve visibility across the system through clear design, aiming for
                  structures that any team member can understand.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-foreground/10">
            <blockquote className="text-xl md:text-2xl font-light text-foreground leading-relaxed text-center max-w-3xl mx-auto text-balance">
              "Understand complexity. Then organize it, step by step."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
