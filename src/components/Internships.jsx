import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Row: Duration & Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-white/40 text-xs uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white/80 border border-white/15">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white mb-1">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-xs font-bold tracking-wider mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained List */}
        <div className="mb-6">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2">
            Skills Gained:
          </h4>
          <ul className="space-y-1.5 text-xs text-white/80 list-disc list-inside">
            {intern.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies Footer */}
      <div className="border-t border-white/10 pt-4 mt-auto">
        <span className="block text-[11px] font-mono text-white/50 uppercase tracking-wider mb-2">
          Technologies:
        </span>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t, i) => (
            <span
              key={i}
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/90"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Internships() {
  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn Paper Top Divider (dark section into red section) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 rotate-180 -translate-y-[1px] fill-[#0a0a0a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative Star Bottom-Left */}
      <svg
        className="absolute bottom-12 left-12 w-8 h-8 text-black fill-current opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Header */}
      <div
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
          Work Experience
        </h2>
        <p className="text-red-100 font-medium text-sm md:text-base">
          Hands-on training, industry experience, and technical internships.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto relative z-10">
        {internshipsList.map((intern, index) => (
          <InternshipCard key={index} intern={intern} index={index} />
        ))}
      </div>
    </section>
  )
}
