import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaChartLine,
  FaShieldAlt,
  FaCheckCircle,
  FaFileAlt,
  FaClipboardList,
  FaBalanceScale,
  FaArrowRight,
  FaHome,
  FaBriefcase,
  FaTimesCircle,
  FaCalendarAlt,
} from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const HomeReadyLanding = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#what-we-do' },
    { label: 'Services', href: '#services' },
    { label: 'Who we help', href: '#audience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/27722048877"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>

      {/* ── 01 NAVIGATION ── */}
      <nav className="bg-brand-charcoal sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center">
          <div className="flex items-center gap-2 mr-auto">
            <div className="bg-white/15 rounded px-3 py-1.5">
              <span className="text-sm font-semibold">
                <span className="text-brand-red">Home</span>
                <span className="text-white/80">Ready</span>
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-red text-white text-sm font-medium px-4 py-2 rounded hover:bg-brand-red-dark transition-colors"
            >
              Get started
            </a>
          </div>

          <button
            className="md:hidden text-white/70 text-2xl"
            onClick={() => setMobileNav(!mobileNav)}
          >
            ☰
          </button>
        </div>

        {mobileNav && (
          <div className="md:hidden bg-brand-charcoal-dark px-5 pb-4 space-y-3">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block text-sm text-white/60 hover:text-white"
                onClick={() => setMobileNav(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-brand-red text-white text-sm font-medium px-4 py-2 rounded text-center"
              onClick={() => setMobileNav(false)}
            >
              Get started
            </a>
          </div>
        )}
      </nav>

      {/* ── 02 HERO ── */}
      <section className="bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeInUp}
              className="inline-block bg-brand-red/20 text-brand-red text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded mb-5"
            >
              Credit Preparation · Bond Readiness
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-5"
            >
              We prepare you to{' '}
              <span className="text-brand-red">qualify for credit</span> —
              properly and strategically.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white/50 text-base md:text-lg leading-relaxed mb-8"
            >
              HomeReady Finance Solutions helps individuals &amp; families
              strengthen their credit profiles before approaching a bank or bond
              originator.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-brand-red hover:bg-brand-red-dark text-white font-medium px-6 py-3 rounded transition-colors"
              >
                Get started
              </a>
              <a
                href="#services"
                className="border border-white/30 text-white/70 hover:text-white hover:border-white/60 px-6 py-3 rounded transition-colors"
              >
                Our services
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="w-full max-w-md aspect-[4/3] bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-3">
              <FaHome className="text-5xl text-white/15" />
              <span className="text-xs text-white/25 uppercase tracking-wider">
                Logo / Hero image
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 03 TRUST BAR ── */}
      <section className="bg-gray-50 border-t-[3px] border-brand-red">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-around gap-4">
            {[
              'Credit Preparation',
              'Financial Positioning',
              'Bond Readiness',
              'Reg No: 2015/248399/07',
            ].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                <span className="text-sm text-gray-600 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 WHAT WE DO ── */}
      <section id="what-we-do" className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-semibold text-brand-charcoal mb-1"
            >
              What we <span className="text-brand-red">do</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 mb-10"
            >
              We do not provide credit. We prepare you to qualify for it.
            </motion.p>

            <motion.div
              variants={stagger}
              className="grid sm:grid-cols-2 gap-5"
            >
              {[
                {
                  icon: <FaFileAlt />,
                  title: 'We analyse your credit profile',
                  body: 'Comprehensive bureau analysis, negative listings, affordability risks and score breakdowns.',
                },
                {
                  icon: <FaClipboardList />,
                  title: 'We build your readiness plan',
                  body: 'Structured 30-day recovery plans, correction strategies, and re-application readiness.',
                },
                {
                  icon: <FaBalanceScale />,
                  title: 'We dispute on your behalf',
                  body: 'Formal dispute drafting, incorrect listing challenges and status update tracking.',
                },
                {
                  icon: <FaArrowRight />,
                  title: 'We position you for approval',
                  body: 'We work until you are strategically positioned for a successful bond application.',
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="border border-gray-200 rounded-lg p-5 border-t-[3px] border-t-brand-red hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 bg-brand-red-light rounded-lg flex items-center justify-center text-brand-red text-lg mb-3">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-brand-charcoal mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {card.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 05 OUR SERVICES ── */}
      <section id="services" className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-semibold text-brand-charcoal mb-1"
            >
              Our <span className="text-brand-red">services</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 mb-10">
              Three focused services to get you bond-ready.
            </motion.p>

            <motion.div
              variants={stagger}
              className="grid md:grid-cols-3 gap-5"
            >
              {[
                {
                  num: '01',
                  title: 'Declined Application Recovery',
                  items: [
                    'Analysis of bond declined reasons',
                    'Credit & affordability correction plan',
                    'Re-application readiness strategy',
                    'Structured 30-day recovery plans',
                  ],
                },
                {
                  num: '02',
                  title: 'Credit Report Assessment',
                  items: [
                    'Comprehensive bureau analysis',
                    'Identification of negative listings',
                    'Affordability risk evaluation',
                    'Credit score breakdown explanation',
                    'Risk profile for bond readiness',
                  ],
                },
                {
                  num: '03',
                  title: 'Credit Dispute Administration',
                  items: [
                    'Drafting & submission of disputes',
                    'Incorrect listing challenges',
                    'Paid-up account removals',
                    'Prescription-based disputes',
                    'Status update tracking',
                  ],
                },
              ].map((svc) => (
                <motion.div
                  key={svc.num}
                  variants={fadeInUp}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-brand-charcoal px-5 py-4">
                    <p className="text-xs text-white/40 mb-0.5">
                      Service {svc.num}
                    </p>
                    <h3 className="text-white font-medium">{svc.title}</h3>
                  </div>
                  <ul className="px-5 py-4 space-y-2">
                    {svc.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-400 border-b border-gray-100 pb-2 last:border-0"
                      >
                        <span className="text-brand-red flex-shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 06 WHO WE HELP ── */}
      <section id="audience" className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-semibold text-brand-charcoal mb-1"
            >
              This service is ideal{' '}
              <span className="text-brand-red">for you</span> if…
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 mb-10">
              HomeReady works with a wide range of clients.
            </motion.p>

            <motion.div
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { icon: <FaHome />, label: 'First-time home buyers' },
                { icon: <FaBriefcase />, label: 'Self-employed individuals' },
                { icon: <FaTimesCircle />, label: 'Previously declined applicants' },
                { icon: <FaCalendarAlt />, label: 'Future property purchasers' },
              ].map((aud, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="border border-gray-200 rounded-lg py-8 px-4 text-center hover:shadow-lg hover:border-brand-red/30 transition-all"
                >
                  <div className="text-3xl text-brand-red mb-3 flex justify-center">
                    {aud.icon}
                  </div>
                  <p className="font-medium text-sm text-brand-charcoal">
                    {aud.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 07 CTA ── */}
      <section className="bg-brand-red py-14 md:py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-semibold text-white mb-3"
            >
              Ready to get bond-ready?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/70 mb-8"
            >
              Let us assess your credit profile and build your personalised
              readiness plan.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex gap-3 max-w-md mx-auto"
            >
              <input
                type="text"
                placeholder="Your WhatsApp number…"
                className="flex-1 bg-white rounded px-4 py-3 text-sm text-gray-600 outline-none"
              />
              <a
                href="https://wa.me/27722048877"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-charcoal hover:bg-brand-charcoal-dark text-white font-medium px-5 py-3 rounded whitespace-nowrap transition-colors flex items-center gap-2"
              >
                <FaWhatsapp />
                WhatsApp us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 08 CONTACT ── */}
      <section id="contact" className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-semibold text-brand-charcoal mb-1"
            >
              Get in <span className="text-brand-red">touch</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 mb-8">
              We're here to help you take the first step.
            </motion.p>

            <motion.div variants={stagger} className="space-y-4">
              {[
                {
                  icon: <FaEnvelope />,
                  text: 'Admin@homereadyfinance.co.za',
                  href: 'mailto:Admin@homereadyfinance.co.za',
                },
                {
                  icon: <FaPhone />,
                  text: '087 150 7207',
                  href: 'tel:0871507207',
                },
                {
                  icon: <FaWhatsapp />,
                  text: '072 204 8877',
                  href: 'https://wa.me/27722048877',
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  variants={fadeInUp}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 bg-brand-charcoal rounded flex items-center justify-center text-white text-sm flex-shrink-0 group-hover:bg-brand-red transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-brand-red transition-colors">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full name…"
                className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-brand-red transition-colors"
              />
              <input
                type="email"
                placeholder="Email address…"
                className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-brand-red transition-colors"
              />
              <input
                type="tel"
                placeholder="Contact number…"
                className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-brand-red transition-colors"
              />
              <textarea
                rows={4}
                placeholder="Message…"
                className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-brand-red transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-brand-red hover:bg-brand-red-dark text-white font-medium px-6 py-3 rounded transition-colors"
              >
                Send message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── 09 FOOTER ── */}
      <footer className="bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white font-medium text-lg mb-2">
              <span className="text-brand-red">Home</span>Ready Finance
              Solutions
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Credit Preparation · Financial Positioning · Bond Readiness
              <br />
              We prepare you to qualify — properly and strategically.
            </p>
          </div>

          <div>
            <h4 className="text-white/50 text-xs font-medium uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-white/35 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/50 text-xs font-medium uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/35">
              <a
                href="mailto:Admin@homereadyfinance.co.za"
                className="hover:text-white transition-colors"
              >
                Admin@homereadyfinance.co.za
              </a>
              <a
                href="tel:0871507207"
                className="hover:text-white transition-colors"
              >
                087 150 7207
              </a>
              <a
                href="https://wa.me/27722048877"
                className="hover:text-white transition-colors"
              >
                072 204 8877 (WhatsApp)
              </a>
            </div>
          </div>
        </div>

        <div className="bg-brand-charcoal-dark">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-xs text-white/30">
              © 2025 HomeReady Finance Solutions. All rights reserved.
            </span>
            <span className="text-xs text-white/20">
              Reg No: 2015/248399/07
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeReadyLanding;
