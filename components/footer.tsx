export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background pt-20 md:pt-24 pb-16 md:pb-20 relative z-[1] -mt-px">
      {/* 4-layer animated cyan wave ridges on top edge */}
      <div className="ft-top-edge" aria-hidden="true">
        <svg viewBox="0 0 2400 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* D: far pale cyan — tallest peaks */}
            <path
              id="ridgeD"
              d="M0 74 L 100 58 L 200 70 L 320 48 L 430 66 L 540 54 L 660 72 L 780 44 L 890 68 L 1010 56 L 1130 74 L 1240 50 L 1360 66 L 1470 58 L 1580 75 L 1700 48 L 1820 70 L 1940 54 L 2050 74 L 2170 50 L 2280 66 L 2400 74 L 2400 120 L 0 120 Z"
            />
            {/* C: mid bright cyan */}
            <path
              id="ridgeC"
              d="M0 84 L 80 70 L 180 80 L 280 62 L 390 82 L 490 66 L 600 86 L 710 60 L 810 76 L 920 68 L 1040 88 L 1150 64 L 1260 78 L 1360 70 L 1470 84 L 1580 62 L 1680 74 L 1790 68 L 1900 88 L 2010 62 L 2120 82 L 2230 66 L 2330 78 L 2400 84 L 2400 120 L 0 120 Z"
            />
            {/* B: dark mid-ground ridge */}
            <path
              id="ridgeB"
              d="M0 96 L 90 86 L 200 98 L 300 80 L 410 94 L 520 84 L 640 100 L 740 78 L 850 92 L 960 84 L 1070 100 L 1180 82 L 1290 96 L 1400 86 L 1510 100 L 1620 80 L 1730 94 L 1840 84 L 1950 100 L 2060 82 L 2170 96 L 2270 88 L 2380 98 L 2400 96 L 2400 120 L 0 120 Z"
            />
            {/* A: front black — shortest peaks */}
            <path
              id="ridgeA"
              d="M0 108 L 110 100 L 220 108 L 340 94 L 450 106 L 560 102 L 670 110 L 790 92 L 900 106 L 1020 100 L 1140 111 L 1260 96 L 1370 108 L 1480 102 L 1590 110 L 1710 92 L 1820 106 L 1940 98 L 2050 108 L 2160 104 L 2280 110 L 2400 108 L 2400 120 L 0 120 Z"
            />
          </defs>
          {/* back to front: far pale cyan > bright cyan (mid) > dark grey > black (front, shortest) */}
          <g className="ft-wave-group-d">
            <use href="#ridgeD" className="ft-wave-accent-pale" x="0" />
            <use href="#ridgeD" className="ft-wave-accent-pale" x="2400" />
          </g>
          <g className="ft-wave-group-c">
            <use href="#ridgeC" className="ft-wave-accent" x="0" />
            <use href="#ridgeC" className="ft-wave-accent" x="2400" />
          </g>
          <g className="ft-wave-group-a">
            <use href="#ridgeB" className="ft-wave-dark-mid" x="0" />
            <use href="#ridgeB" className="ft-wave-dark-mid" x="2400" />
          </g>
          <g className="ft-wave-group-b">
            <use href="#ridgeA" className="ft-wave-fill" x="0" />
            <use href="#ridgeA" className="ft-wave-fill" x="2400" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 pb-12 md:pb-16 border-b border-background/10">
            {/* Left column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/teras-mark.png" alt="" className="h-14 md:h-16 invert" />
                <img src="/teras-logo.svg" alt="TERAS" className="h-8 md:h-10 invert" />
              </div>
              <p className="text-sm font-light italic text-background/60">BtoB SaaS Development Support</p>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-xs font-medium tracking-widest uppercase text-background/40 mb-4">Contact</h4>
                <div className="text-sm font-light leading-[1.75] text-background/80">
                  <div>Representative: Takamichi Tatsumoto</div>
                  <div>Email: contact@teras.tech</div>
                  <div className="mt-2">Location:</div>
                  <div>7F, Ichigo Tenjin North Bldg., 4-6-28 Tenjin, Chuo-ku, Fukuoka-shi, Fukuoka, Japan</div>
                  <div className="text-xs text-background/50 mt-0.5">
                    福岡県福岡市中央区天神4-6-28 いちご天神ノースビル 7F
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-medium tracking-widest uppercase text-background/40 mb-4">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "DDD",
                    "Microservices",
                    "Team Topologies",
                    "Inverse Conway",
                    "Event Sourcing",
                    "CQRS",
                    "Design Thinking",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-background/20 text-xs font-light text-background/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 md:pt-12 text-xs font-light text-background/40">
            © 2025 LLC TERAS. All rights reserved.
            <a
              href="/disclosure"
              className="ml-4 text-background/25 hover:text-background/40 transition-colors no-underline"
            >
              Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
