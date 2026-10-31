import { leadershipList } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 last:mb-0 w-full">
      {/* Red Glowing Dot on Timeline */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_15px_#ff2a2a] z-20 border-2 border-[#0a0a0a]" />

      {/* Left Column (Card for even, Spacer for odd) */}
      {isEven ? (
        <div
          data-aos="fade-right"
          className="ml-10 md:ml-0 w-[calc(100%-2.5rem)] md:w-[45%] md:text-right"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-red-500/30 transition-all duration-300">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#ff2a2a] bg-red-500/10 border border-red-500/20 mb-3">
              {item.badge}
            </span>
            <h3 className="text-xl font-black text-white group-hover:text-[#ff2a2a] transition-colors mb-1">
              {item.title}
            </h3>
            <p className="font-mono uppercase text-xs text-red-400 tracking-wider font-semibold mb-3">
              {item.role}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="hidden md:block md:w-[45%]" />
      )}

      {/* Right Column (Card for odd, Spacer for even) */}
      {!isEven ? (
        <div
          data-aos="fade-left"
          className="ml-10 md:ml-0 w-[calc(100%-2.5rem)] md:w-[45%] md:text-left"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-red-500/30 transition-all duration-300">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#ff2a2a] bg-red-500/10 border border-red-500/20 mb-3">
              {item.badge}
            </span>
            <h3 className="text-xl font-black text-white group-hover:text-[#ff2a2a] transition-colors mb-1">
              {item.title}
            </h3>
            <p className="font-mono uppercase text-xs text-red-400 tracking-wider font-semibold mb-3">
              {item.role}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="hidden md:block md:w-[45%]" />
      )}
    </div>
  )
}

export default function Leadership() {
  return (
    <section className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn-paper divider at the top edge (red into dark) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 rotate-180 -translate-y-[1px] fill-[#ff2a2a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Header */}
      <div
        className="text-center max-w-3xl mx-auto mb-20 relative z-10"
        data-aos="fade-up"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-4">
          Activities
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Leadership & Engagement
        </h2>
        <p className="text-white/60 text-sm md:text-base">
          Team collaboration, hackathons, academic initiatives, and campus
          involvement.
        </p>
      </div>

      {/* Vertical Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Continuous 2px gradient line */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

        {/* Timeline Items */}
        <div className="relative flex flex-col space-y-6">
          {leadershipList.map((item, index) => (
            <LeadershipItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
