import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const TEAM_MEMBERS = [
  'Mohamed Gaber',
  'B Adib Rahman',
  'XU QIN',
  'ZHAO ZHE XUAN',
  'WANG ZIHAO',
  'Abdullah bin Mohammed Zahed',
]

/**
 * Project credits section displayed at the bottom of the page.
 */
export default function ProjectCredits() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto w-full max-w-2xl px-4 pt-16 pb-20 md:px-8"
    >
      <div className="credits-card glass-card mx-auto p-8 text-center md:p-10">
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-4 flex justify-center"
        >
          <Heart
            className="h-7 w-7"
            style={{ color: 'var(--accent-pink)' }}
            fill="var(--accent-pink)"
          />
        </motion.div>

        <h2 className="mb-6 text-2xl font-bold gradient-text">
          Project Credits
        </h2>

        <div className="mb-6">
          <p className="text-sm font-medium text-[var(--text-muted)]">
            App Created By
          </p>
          <p className="mt-1 text-lg font-semibold text-[var(--text)]">
            Mohamed Gaber
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium text-[var(--text-muted)]">
            Team Members
          </p>
          <ul className="space-y-2">
            {TEAM_MEMBERS.map((member) => (
              <li
                key={member}
                className="text-base text-[var(--text)] sm:text-lg"
              >
                {member}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
