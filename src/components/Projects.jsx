import { useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'To-Do Web App',
    category: 'Mobile / React Native',
    description: "A React Native + Expo mobile app for managing tasks, designed with a sophisticated Dark UI and smooth, seamless animations.",
    tags: ['React Native', 'Expo', 'TypeScript', 'Context API'],
    year: '2024',
    color: '#C8FF00',
    link: '#',
    github: '#',
  },
  {
    id: '02',
    title: 'AI Chat Interface',
    category: 'Frontend / AI',
    description: "A modern chat interface integrated with AI APIs, featuring real-time streaming, Markdown support, and conversation history.",
    tags: ['React', 'TypeScript', 'OpenAI API', 'WebSocket'],
    year: '2023',
    color: '#A855F7',
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="projects" className="relative py-32 px-8 md:px-16 border-t border-paper/8">
      {/* Section number */}
      <div className="absolute right-8 top-16 font-display font-black text-[12vw] leading-none text-paper/[0.03] select-none pointer-events-none">
        04
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="section-label mb-4 reveal">
          Selected Work
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight text-paper">
            Projects I've
            <span className="text-lime italic"> built.</span>
          </h2>
          <a
            href="#"
            className="font-mono text-xs tracking-widest text-mist hover:text-lime transition-colors inline-flex items-center gap-2 shrink-0"
          >
            VIEW ALL
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Projects list */}
        <div className="space-y-px">
          {projects.map((project) => (
            <div
              key={project.id}
              className="reveal group border border-paper/8 hover:border-paper/20 transition-all duration-500"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="p-8 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
                {/* Number */}
                <div
                  className="font-display font-black text-4xl transition-colors duration-300"
                  style={{ color: hoveredId === project.id ? project.color : 'rgba(244,240,232,0.1)' }}
                >
                  {project.id}
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-display font-bold text-2xl text-paper group-hover:text-paper transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] tracking-widest text-mist border border-paper/10 px-3 py-1">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-paper/50 font-sans text-sm leading-relaxed mb-5 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-3 py-1 transition-all duration-300"
                        style={{
                          color: hoveredId === project.id ? project.color : 'rgba(244,240,232,0.4)',
                          borderColor: hoveredId === project.id ? project.color + '40' : 'rgba(244,240,232,0.08)',
                          border: '1px solid',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-row md:flex-col items-center gap-4 shrink-0">
                  <a
                    href={project.link}
                    className="w-10 h-10 border border-paper/8 flex items-center justify-center hover:border-lime/40 hover:text-lime text-mist transition-all duration-300"
                    title="Live Demo"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 2h10v10M2 12 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    className="w-10 h-10 border border-paper/8 flex items-center justify-center hover:border-lime/40 hover:text-lime text-mist transition-all duration-300"
                    title="GitHub"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
