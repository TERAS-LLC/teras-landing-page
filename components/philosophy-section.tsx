export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="tera-section py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Dotted "01" silhouette */}
      <svg
        className="sil"
        style={{ right: "-6%", top: "-4%", width: 820, height: 820, opacity: 0.45 }}
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <pattern id="dotsP" width="3" height="3" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.55" />
          </pattern>
          <mask id="mP">
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
              01
            </text>
          </mask>
        </defs>
        <rect width="200" height="200" fill="url(#dotsP)" mask="url(#mP)" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[1040px] mx-auto">
          <div className="mb-24">
            <h2 className="eyebrow-mono">Philosophy</h2>
            <hr className="w-full h-[0.5px] bg-foreground border-0 m-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <div className="phil-col-label">Naming · Origin</div>
              <h3 className="text-2xl md:text-[30px] font-light leading-[1.25] tracking-[-0.01em] mb-6 text-balance">
                複雑さに向き合い、構造をつくる
              </h3>
              <p className="text-sm md:text-base font-light leading-[1.75] mb-6">
                We face complexity head-on and build practical structure.
              </p>
              <p className="text-sm md:text-base font-light leading-[1.75] mb-6">
                TERASの名は、ギリシャ語で「驚異・怪物」を意味するΤέραςに由来します。大規模で複雑なシステムの課題に正面から取り組み、明確な構造へと整理していくことが私たちの仕事です。
              </p>
              <p className="text-xs md:text-sm italic font-light leading-[1.75]">
                The name TERAS comes from the Greek word Τέρας, meaning &quot;wonder&quot; or &quot;monster.&quot; Our
                work is to take on the challenges of large, complex systems and organize them into clear, workable
                structures.
              </p>
            </div>

            <div>
              <div className="phil-col-label">Engineering · Practice</div>
              <h4 className="text-lg font-medium mb-6">Engineering as Practice</h4>
              <p className="text-sm md:text-base font-light leading-[1.75] mb-6">
                開発とは、複雑さを整理し、扱いやすくする地道な作業です。適切な境界設計、責務の分離、データの流れの整備を一つひとつ積み重ねます。
              </p>
              <p className="text-xs md:text-sm italic font-light leading-[1.75] mb-12">
                Development is the steady work of organizing complexity into something manageable — defining clear
                boundaries, separating responsibilities, and structuring data flows, one step at a time.
              </p>
              <h4 className="text-lg font-medium mb-6">Structure &amp; Clarity</h4>
              <p className="text-sm md:text-base font-light leading-[1.75] mb-6">
                曖昧さを減らし、明確な設計を通じてシステム全体の見通しをよくします。誰が見ても理解できる構造を目指します。
              </p>
              <p className="text-xs md:text-sm italic font-light leading-[1.75]">
                We reduce ambiguity and improve visibility across the system through clear design, aiming for
                structures that any team member can understand.
              </p>
            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-foreground/10">
            <blockquote className="text-xl md:text-2xl font-light leading-[1.75] text-center max-w-[720px] mx-auto text-balance">
              &ldquo;Understand complexity. Then organize it, step by step.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
