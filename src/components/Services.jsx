import { useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

// Individual Hanging Tag Card with active state tied to scroll position
function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  // Track the scroll line progress and toggle active status when the tip passes the card
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return
    const containerHeight = containerRef.current.offsetHeight || 1350
    const cardTop = cardRef.current.offsetTop
    const lineProgressPx = latest * containerHeight
    setIsActive(lineProgressPx >= cardTop + 50)
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative transition-all duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_0_30px_rgba(255,42,42,0.35)]'
          : 'bg-white shadow-md border border-gray-100'
      } ${className}`}
    >
      {/* Top Punched Hole */}
      <div
        className={`w-5 h-5 rounded-full mx-auto mt-2 border transition-colors duration-700 ${
          isActive
            ? 'bg-red-900 border-red-500'
            : 'bg-white border-gray-300'
        }`}
      />

      {/* Inner Tag Panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] flex flex-col justify-between transition-colors duration-700 ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-600'
        }`}
      >
        <div>
          <span
            className={`block text-3xl font-black font-serif italic mb-2 select-none ${
              isActive ? 'text-white/60' : 'text-gray-400'
            }`}
          >
            {number}
          </span>
          <h3
            className={`text-2xl font-black mb-3 ${
              isActive ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              isActive ? 'text-white/90' : 'text-gray-600'
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)

  // Track scroll position within the section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Smooth out the progress with a spring
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const desktopCurvePath =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  const cardPositions = [
    {
      className:
        'md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className:
        'md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className:
        'md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className:
        'md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-4">
            {skillsContent.badge}
          </span>
          <div className="relative inline-block mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 inline">
              {skillsContent.heading}
            </h2>
            {/* Small hand-drawn arrow SVG */}
            <svg
              className="w-8 h-8 text-[#ff2a2a] inline-block ml-2 -mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-sm md:text-base">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop 3-Layer Animated Curved SVG Path */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Faint Guide Path */}
          <path
            d={desktopCurvePath}
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
            fill="none"
          />

          {/* Layer 2: Mask animated by pathLength */}
          <defs>
            <mask id="path-mask">
              <motion.path
                d={desktopCurvePath}
                stroke="white"
                strokeWidth="20"
                fill="none"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Layer 3: Solid Black Dashed Path Revealed by Mask */}
          <path
            d={desktopCurvePath}
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            fill="none"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile 3-Layer Animated Straight Vertical SVG Path */}
        <svg
          className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Guide Path */}
          <path
            d="M 2,0 L 2,100"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 6"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />

          {/* Layer 2: Mask */}
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                stroke="white"
                strokeWidth="20"
                fill="none"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Layer 3: Dashed Path */}
          <path
            d="M 2,0 L 2,100"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4 6"
            fill="none"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, index) => {
            const pos = cardPositions[index] || {
              className: 'md:relative',
              aosType: 'fade-up',
              aosDelay: 100,
            }

            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={`md:absolute ${pos.className}`}
                aosType={pos.aosType}
                aosDelay={pos.aosDelay}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Handwritten End Note */}
        <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none">
          {skillsContent.endText}
        </div>
      </div>
    </section>
  )
}
