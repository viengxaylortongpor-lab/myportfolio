import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const cursorDot = useRef(null)
  const cursorRing = useRef(null)

  useEffect(() => {
    const dot = cursorDot.current
    const ring = cursorRing.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX - 4 + 'px'
      dot.style.top = mouseY - 4 + 'px'
    }

    const animateRing = () => {
      ringX += (mouseX - ringX - 16) * 0.12
      ringY += (mouseY - ringY - 16) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', moveCursor)
    animateRing()

    // Scale on hoverable elements
    const hoverEls = document.querySelectorAll('a, button, [data-hover]')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        dot.style.transform = 'scale(3)'
        ring.style.transform = 'scale(1.5)'
        ring.style.borderColor = 'rgba(200,255,0,0.4)'
      })
      el.addEventListener('mouseleave', () => {
        dot.style.transform = 'scale(1)'
        ring.style.transform = 'scale(1)'
        ring.style.borderColor = '#C8FF00'
      })
    })

    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-ink text-paper relative">
      {/* Custom cursor */}
      <div ref={cursorDot} className="cursor-dot hidden md:block" />
      <div ref={cursorRing} className="cursor-ring hidden md:block" />

      {/* Background grid */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-60" />

      {/* Ambient glow blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-0 w-64 h-64 bg-lime/3 rounded-full blur-3xl pointer-events-none" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-paper/8 py-8 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs text-mist tracking-widest">
           © 2026 — ALL RIGHTS RESERVED
          </span>
          <span className="font-mono text-xs text-mist">
            BASED IN VIENTIANE, LAOS
          </span>
        </div>
      </footer>
    </div>
  )
}
