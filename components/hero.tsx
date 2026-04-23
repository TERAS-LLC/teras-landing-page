"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface Particle {
      ang: number
      r01: number
      sp: number
      dir: 1 | -1
      phase: number
      wobble: number
      hue: number
      sat: number
      life: number
      size: number
    }

    const N = 520
    const ps: Particle[] = []
    for (let i = 0; i < N; i++) {
      ps.push({
        ang: Math.random() * Math.PI * 2,
        r01: Math.random(),
        sp: 0.0006 + Math.pow(Math.random(), 2) * 0.004,
        dir: Math.random() < 0.5 ? 1 : -1,
        phase: Math.random() * Math.PI * 2,
        wobble: 0.6 + Math.random() * 1.4,
        hue: Math.random() * 360,
        sat: 55 + Math.random() * 30,
        life: Math.random(),
        size: 0.7 + Math.random() * 0.9,
      })
    }

    let t = 0
    let animationFrame: number

    const pos = (p: Particle) => {
      const cx = canvas.width / 2
      const mob = canvas.width < 768
      const cy = mob ? canvas.height * 0.38 : canvas.height * 0.5
      const R = Math.min(canvas.width, canvas.height) * 0.44
      const hole = R * 0.42
      const bandW = R - hole
      const wobble = Math.sin(t * 0.4 + p.phase) * p.wobble * 0.06 * bandW
      const r = hole + p.r01 * bandW + wobble
      return { x: cx + Math.cos(p.ang) * r, y: cy + Math.sin(p.ang) * r }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(255,255,255,0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      t += 0.01
      const mob = canvas.width < 768
      const alpha = mob ? 0.28 : 0.55

      ps.forEach((p) => {
        p.life += 0.04 + Math.random() * 0.03
        const draw = p.life % 1 < 0.55
        p.ang += p.sp * p.dir

        if (draw) {
          const q = pos(p)
          const hue = (p.hue + t * 8) % 360
          ctx.fillStyle = `hsla(${hue},${p.sat}%,60%,${alpha})`
          ctx.beginPath()
          ctx.arc(q.x, q.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="tera-section relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-[960px] mx-auto px-6 py-24 text-center">
        <img src="/teras-logo.svg" alt="TERAS" className="h-10 md:h-14 lg:h-16 mx-auto mb-8" />

        <h1 className="text-2xl md:text-[30px] lg:text-4xl font-bold leading-[1.4] tracking-[-0.01em] mb-8 text-balance">
          複雑なしくみを、シンプルに
        </h1>

        <p className="text-sm lg:text-lg leading-[1.75] max-w-[720px] mx-auto font-light text-balance">
          入り組んだシステムや組織の課題を整理し、
          <br />
          見通しのよい設計へ落とし込みます。
        </p>

        <div className="pt-12">
          <p className="text-base lg:text-lg italic font-light mb-4">Making complex systems manageable.</p>
          <p className="text-xs lg:text-sm font-light leading-[1.7] max-w-[640px] mx-auto">
            We help untangle complex systems and organizations, turning them into clear, well-structured designs that
            teams can maintain and grow with confidence.
          </p>
        </div>

        <div className="mt-12">
          <a href="#contact" className="btn-black">
            Get in touch →
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
