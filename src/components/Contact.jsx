import { useState } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    handle: 'viengxaylortongpor-lab',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    href: 'https://github.com/viengxaylortongpor-lab',
  },
  {
  name: 'Gmail',
  handle: 'viengxaylor.tongpor@gmail.com',
  icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-1.356 1.518-2.158 2.627-1.382L12 10.613l9.373-6.538C22.482 3.299 24 4.101 24 5.457z"/>
    </svg>
  ),
  href: '',
  },
 {
  name: 'Facebook',
  handle: 'Xai Brich', 
  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  href: 'https://www.facebook.com/Brich.Xai', 
},
{
  name: 'WhatsApp',
  handle: '+8562077135426',
  icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  href: '', 
},
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Simulate send
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="relative py-32 px-8 md:px-16 border-t border-paper/8">
      {/* Section number */}
      <div className="absolute right-8 top-16 font-display font-black text-[12vw] leading-none text-paper/[0.03] select-none pointer-events-none">
        05
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="section-label mb-4 reveal">
          Get In Touch
        </div>

        <h2 className="font-display font-black text-5xl md:text-7xl leading-tight text-paper mb-6 reveal">
          Let's build
          <br />
          <span className="text-lime italic">something great.</span>
        </h2>
        <p className="text-paper/50 font-sans text-lg max-w-lg mb-20 reveal">
          "Open to new opportunities! I’m always happy to discuss projects or collaborations. Let’s connect!"
        </p>

        <div className="grid md:grid-cols-2 gap-20">
          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal space-y-10">
            <div>
              <label className="font-mono text-[10px] tracking-widest text-lime block mb-3">
                YOUR NAME
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John example"
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-widest text-lime block mb-3">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your@email.com"
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-widest text-lime block mb-3">
                MESSAGE
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Message here..."
                className="form-input resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-lime text-ink font-mono text-sm tracking-widest px-10 py-4 hover:bg-lime-dim transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.3"/>
                    <path d="M12 2a10 10 0 0110 10"/>
                  </svg>
                  SENDING...
                </>
              ) : status === 'sent' ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  MESSAGE SENT!
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="reveal space-y-12">
            {/* Social */}
            <div>
              {/* <div className="font-mono text-[10px] tracking-widest text-lime mb-6">CONTACT</div> */}
              <div className="space-y-4">
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group flex items-center gap-4 text-paper/60 hover:text-paper transition-colors"
                  >
                    <span className="w-10 h-10 border border-paper/8 flex items-center justify-center text-mist group-hover:border-lime/40 group-hover:text-lime transition-all">
                      {social.icon}
                    </span>
                    <div>
                      <div className="font-sans text-sm font-medium">{social.name}</div>
                      <div className="font-mono text-xs text-mist">{social.handle}</div>
                    </div>
                    <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
