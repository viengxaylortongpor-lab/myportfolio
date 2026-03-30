export default function About() {
  return (
    <section id="about" className="relative py-32 px-8 md:px-16 border-t border-paper/8">
      {/* Section number */}
      <div className="absolute right-8 top-16 font-display font-black text-[12vw] leading-none text-paper/[0.03] select-none pointer-events-none">
        02
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="section-label mb-16 reveal">
          About Me
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left – Bio */}
          <div className="reveal">
            <h2 className="font-display font-black text-5xl md:text-6xl leading-tight text-paper mb-8">
              Crafting the
              <span className="text-lime italic"> future</span>
              <br />one line at a time.
            </h2>
            <div className="space-y-5 text-paper/60 font-sans text-base leading-relaxed">
              <p>
                I am a Computer Science student on a journey toward Full-Stack Development. 
                I focus on applying CS core principles to craft elegant, user-centric web applications 
                and build scalable, high-performance systems.
              </p>
              <p>
                React, Next.js, Node.js, and Tailwind CSS. 
                I am passionate about exploring new frameworks and turning complex ideas into 
                functional, real-world code.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'Vientiane, Laos' },
                { label: 'Education', value: 'CS Degree' },
                { label: 'Focus', value: 'Web & Mobile' },
                { label: 'Language', value: 'Lao / Thai / English' },
              ].map(item => (
                <div key={item.label} className="border border-paper/8 p-4 hover:border-lime/30 transition-colors">
                  <div className="font-mono text-[10px] tracking-widest text-lime mb-1">{item.label.toUpperCase()}</div>
                  <div className="font-sans text-sm text-paper/80">{item.value}</div>
                </div>
              ))}
            </div>

            <a
              href="#"
              download
              className="inline-flex items-center gap-3 mt-10 font-mono text-xs tracking-widest text-lime border border-lime/30 px-6 py-3 hover:bg-lime hover:text-ink transition-all duration-300"
            >
              DOWNLOAD CV
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v7M2 8l4 3 4-3M1 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right – Photo / Visual */}
          <div className="reveal flex flex-col gap-6">
            {/* Avatar placeholder */}
            <div className="relative">
              <div className="aspect-[3/4] bg-ash border border-paper/8 overflow-hidden relative">
                {/* Decorative scan line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div
                    className="w-full h-8 bg-gradient-to-b from-transparent via-lime/10 to-transparent animate-scan absolute"
                  />
                </div>

                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                 <img 
                    src="/mypicture.jpeg" 
                    alt="My Profile" 
                   className="w-full h-full object-cover" 
  />
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-lime/50" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-lime/50" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-lime/50" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-lime/50" />
              </div>

              {/* Offset box */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-lime/15 -z-10" />
            </div>

            {/* Experience timeline mini */}
            <div className="space-y-4 mt-4">
              {[
               
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="font-mono text-[10px] text-mist w-24 shrink-0 pt-0.5 tracking-wider">
                    {item.year}
                  </div>
                  <div className="flex-1 border-l border-paper/10 pl-4 group-hover:border-lime/40 transition-colors">
                    <div className="font-sans text-sm font-medium text-paper/90">{item.role}</div>
                    <div className="font-mono text-[10px] text-lime tracking-wide">{item.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
