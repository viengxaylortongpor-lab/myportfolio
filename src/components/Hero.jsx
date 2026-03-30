import { useEffect, useState } from 'react'

const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'React Specialist', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 80)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 40)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-8 md:px-16 overflow-hidden"
    >
      {/* Decorative number */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 font-display font-black text-[20vw] leading-none text-paper/[0.02] select-none pointer-events-none">
        01
      </div>

      {/* Vertical line accent */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-lime/40 to-transparent" />

      <div className="max-w-6xl mx-auto w-full pt-28 pb-20">
        {/* Status badge */}
        <div className="inline-flex items-center gap-3 mb-12 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
          </span>
          <span className="font-mono text-xs tracking-widest text-lime">AVAILABLE FOR WORK</span>
        </div>

        {/* Main heading */}
        <div className="mb-6" style={{ animationDelay: '0.1s' }}>
          <h1 className="font-display font-black leading-none tracking-tight">
            <span className="block text-[clamp(3rem,9vw,7rem)] text-paper/30 mb-2">
              Hello, I'm
            </span>
            <span
              className="block text-[clamp(4rem,12vw,9rem)] text-paper lime-glow"
              style={{ animation: 'fadeUp 0.8s 0.2s ease both' }}
            >
              Viengxaylor
            </span>
          </h1>
        </div>

        {/* Typewriter subtitle */}
        <div
          className="flex items-center gap-4 mb-12"
          style={{ animation: 'fadeUp 0.8s 0.4s ease both' }}
        >
          <span className="font-mono text-xl md:text-2xl text-lime">
            {displayed}
            <span className="animate-blink">|</span>
          </span>
        </div>

        {/* Description */}
        <p
          className="max-w-lg text-paper/60 font-sans text-lg leading-relaxed mb-16"
          style={{ animation: 'fadeUp 0.8s 0.55s ease both' }}
        >
          I am a Computer Science student who loves building web applications. 
          I enjoy turning ideas into code and focus on creating websites that are 
          simple, clean, and easy to use.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-5"
          style={{ animation: 'fadeUp 0.8s 0.7s ease both' }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 bg-lime text-ink font-mono text-sm tracking-widest px-8 py-4 hover:bg-lime-dim transition-colors duration-300"
          >
            VIEW WORK
            <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-paper/20 font-mono text-sm tracking-widest px-8 py-4 text-paper/70 hover:border-lime hover:text-lime transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-8 md:left-16 flex items-center gap-4"
          style={{ animation: 'fadeIn 1s 1s ease both' }}
        >
          <div className="flex flex-col gap-1">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-lime/60 mx-auto animate-float" />
          </div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-mist -rotate-90 origin-left translate-y-2">
            SCROLL
          </span>
        </div>

        {/* Stats */}
        <div
          className="absolute bottom-10 right-8 md:right-16 flex gap-10"
          style={{ animation: 'fadeIn 1s 1.2s ease both' }}
        >
          {[
            
          ].map(stat => (
            <div key={stat.label} className="text-right">
              <div className="font-display font-black text-2xl text-lime">{stat.num}</div>
              <div className="font-mono text-[10px] tracking-widest text-mist">{stat.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
