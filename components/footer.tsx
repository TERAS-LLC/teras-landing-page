export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background pt-20 md:pt-24 pb-16 md:pb-20 relative z-[1] -mt-px">
      {/* 4-layer animated cyan wave ridges on top edge */}
      <div className="ft-top-edge" aria-hidden="true">
        <svg viewBox="0 0 2400 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* D: far pale cyan — large rolling wave */}
            <path
              id="ridgeD"
              d="M0 74 C 100 74 100 52 200 52 C 300 52 300 74 400 66 C 500 56 500 44 600 52 C 700 60 700 60 800 52 C 900 44 900 74 1000 74 C 1100 74 1100 54 1200 60 C 1300 68 1300 62 1400 54 C 1500 46 1500 54 1600 50 C 1700 46 1700 68 1800 64 C 1900 60 1900 58 2000 60 C 2100 62 2100 74 2200 74 C 2300 74 2300 74 2400 74 L 2400 120 L 0 120 Z"
            />
            {/* C: mid bright cyan — large wave offset from D */}
            <path
              id="ridgeC"
              d="M0 84 C 120 84 120 66 240 66 C 360 66 360 84 480 78 C 600 72 600 62 720 68 C 840 74 840 74 960 66 C 1080 58 1080 84 1200 82 C 1320 80 1320 66 1440 72 C 1560 78 1560 74 1680 68 C 1800 62 1800 80 1920 74 C 2040 68 2040 72 2160 76 C 2280 80 2280 84 2400 84 L 2400 120 L 0 120 Z"
            />
            {/* B: dark mid-ground */}
            <path
              id="ridgeB"
              d="M0 96 C 90 96 90 84 180 84 C 270 84 270 96 360 90 C 450 85 450 80 540 84 C 630 88 630 88 720 82 C 810 76 810 96 900 94 C 990 92 990 82 1080 86 C 1170 90 1170 86 1260 82 C 1350 78 1350 88 1440 84 C 1530 80 1530 90 1620 86 C 1710 82 1710 90 1800 88 C 1890 86 1890 86 1980 88 C 2070 90 2070 96 2160 94 C 2250 92 2250 96 2400 96 L 2400 120 L 0 120 Z"
            />
            {/* A: front black — shortest */}
            <path
              id="ridgeA"
              d="M0 108 C 150 108 150 98 300 98 C 450 98 450 108 600 104 C 750 100 750 96 900 100 C 1050 104 1050 104 1200 98 C 1350 92 1350 108 1500 108 C 1650 108 1650 100 1800 104 C 1950 108 1950 106 2100 106 C 2250 106 2250 108 2400 108 L 2400 120 L 0 120 Z"
            />
          </defs>
          {/* back to front. 3 tiles each (x=-2400, 0, 2400) for seamless drift in either direction */}
          <g className="ft-wave-group-d">
            <use href="#ridgeD" className="ft-wave-accent-pale" x="-2400" />
            <use href="#ridgeD" className="ft-wave-accent-pale" x="0" />
            <use href="#ridgeD" className="ft-wave-accent-pale" x="2400" />
          </g>
          <g className="ft-wave-group-c">
            <use href="#ridgeC" className="ft-wave-accent" x="-2400" />
            <use href="#ridgeC" className="ft-wave-accent" x="0" />
            <use href="#ridgeC" className="ft-wave-accent" x="2400" />
          </g>
          <g className="ft-wave-group-a">
            <use href="#ridgeB" className="ft-wave-dark-mid" x="-2400" />
            <use href="#ridgeB" className="ft-wave-dark-mid" x="0" />
            <use href="#ridgeB" className="ft-wave-dark-mid" x="2400" />
          </g>
          <g className="ft-wave-group-b">
            <use href="#ridgeA" className="ft-wave-fill" x="-2400" />
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
