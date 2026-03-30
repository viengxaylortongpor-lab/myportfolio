import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '⬡',
    skills: [
      { name: 'React / Next.js', level: 80 },
      { name: 'TypeScript', level: 70 },
      { name: 'Tailwind CSS', level: 50 },
      { name: 'Vue.js', level: 50 },
    ],
  },
  {
    category: 'Backend',
    icon: '⬡',
    skills: [
      { name: 'Node.js / Express', level: 70 },
      { name: 'Python', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'Tools & More',
    icon: '⬡',
    skills: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'Figma', level: 60 },
      { name: 'AWS / Vercel', level: 65 },
    ],
  },
]

const techBadges = [
  'React', 'TypeScript', 'Node.js', 'Python',
  'MongoDB', 'Figma', 'Tailwind', 'REST API', 'Git', 'Vite',
]

function SkillBar({ name, level }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = level + '%'
        }
      },
      { threshold: 0.2 }
    )
    if (barRef.current) observer.observe(barRef.current.parentElement)
    return () => observer.disconnect()
  }, [level])

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-sans text-sm text-paper/70 group-hover:text-paper transition-colors">{name}</span>
        <span className="font-mono text-xs text-lime">{level}%</span>
      </div>
      <div className="h-px w-full bg-paper/8 overflow-hidden">
        <div
          ref={barRef}
          className="skill-bar-fill"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-8 md:px-16 border-t border-paper/8">
      {/* Section number */}
      <div className="absolute right-8 top-16 font-display font-black text-[12vw] leading-none text-paper/[0.03] select-none pointer-events-none">
        03
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="section-label mb-4 reveal">
          Skills & Expertise
        </div>

        <h2 className="font-display font-black text-5xl md:text-6xl leading-tight text-paper mb-16 reveal">
          What I work
          <span className="text-lime italic"> with.</span>
        </h2>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 stagger">
          {skillGroups.map(group => (
            <div
              key={group.category}
              className="reveal border border-paper/8 p-8 hover:border-lime/20 transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-lime text-lg">{group.icon}</span>
                <h3 className="font-mono text-xs tracking-widest text-lime">{group.category.toUpperCase()}</h3>
              </div>
              <div className="space-y-6">
                {group.skills.map(skill => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div className="reveal">
          <div className="font-mono text-xs tracking-widest text-mist mb-6">TECHNOLOGY STACK</div>
          <div className="flex flex-wrap gap-3">
            {techBadges.map((tech, i) => (
              <span
                key={tech}
                className="font-mono text-xs text-paper/50 border border-paper/8 px-4 py-2 hover:border-lime/40 hover:text-lime transition-all duration-300 cursor-default"
                style={{ transitionDelay: i * 30 + 'ms' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
