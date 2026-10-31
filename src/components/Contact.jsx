import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from '../data/portfolioData'

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax animation for the background giant word
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    if (!form) return

    const firstName = form.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form.querySelector('#lastName')?.value?.trim() || ''
    const email = form.querySelector('#email')?.value?.trim() || ''
    const message = form.querySelector('#message')?.value?.trim() || ''

    // Validate required fields
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    // Verify if EmailJS credentials are provided and not placeholders
    const isConfigured = Boolean(
      emailjsConfig.serviceId &&
        emailjsConfig.templateId &&
        emailjsConfig.publicKey &&
        emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
        emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
        emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY',
    )

    if (!isConfigured) {
      // Fallback: open mailto link with prefilled form details
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim()
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`,
        '_blank',
      )

      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    // If EmailJS is configured, send the form dynamically
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form,
        emailjsConfig.publicKey,
      )
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error('EmailJS submission error:', err)
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Parallax Giant "Contact" Word */}
      <motion.div
        style={{ y }}
        className="absolute pointer-events-none z-0 inset-x-0 top-0 flex justify-center overflow-hidden"
      >
        <div
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5 whitespace-nowrap"
        >
          Contact
        </div>
      </motion.div>

      {/* Front Red Contact Card */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto rounded-tl-3xl relative z-10 text-white shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-6 border-b border-white/20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            Reach Me
          </span>
          {socialLinks.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
            >
              DM on Instagram
            </a>
          ) : (
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
            >
              Email Directly
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          {/* Two Columns for Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Name & Email inputs */}
            <div className="flex flex-col space-y-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                required
                placeholder="First Name *"
                className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none transition-colors text-white"
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none transition-colors text-white"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="Email Address *"
                className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none transition-colors text-white"
              />
            </div>

            {/* Right Column: Message Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message *"
                className="w-full h-full min-h-[160px] bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none transition-colors text-white resize-none"
              />
            </div>
          </div>

          {/* Bottom Area: Checkbox, Notes, and Submit Button */}
          <div className="flex flex-col space-y-6 pt-4">
            {/* Permission Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer text-xs md:text-sm text-white/90 select-none">
              <input
                type="checkbox"
                required
                className="mt-1 accent-black h-4 w-4 rounded cursor-pointer"
              />
              <span>
                I agree that my submitted information may be stored and
                processed to respond to this inquiry.
              </span>
            </label>

            {/* Delivery Note & Direct Contact */}
            <div className="space-y-1 text-xs text-white/80">
              <p>
                Your message will be sent directly to my inbox. I typically
                respond within 24-48 hours.
              </p>
              <p>
                For urgent inquiries, you can also reach me directly at{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline font-bold hover:text-black transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
                .
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-3.5 rounded-full bg-white/20 border border-white/30 text-white font-bold text-sm md:text-base flex items-center gap-3 cursor-not-allowed"
                >
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-3.5 rounded-full bg-emerald-600 border border-emerald-500 text-white font-bold text-sm md:text-base flex items-center gap-3"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-3.5 rounded-full bg-red-950 border border-red-700 text-white font-bold text-sm md:text-base flex items-center gap-3"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group px-8 py-3.5 rounded-full bg-transparent border-2 border-white text-white font-bold text-sm md:text-base flex items-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
