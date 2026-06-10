import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

/**
 * Hero section with title, subtitle, and glowing heart icon.
 */
export default function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 pb-12 text-center md:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center gap-4"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl gradient-text">
          Intimate Lover
        </h1>
        <p className="max-w-xl text-lg text-[var(--text-muted)] sm:text-xl md:text-2xl">
          Find out the prediction of finding you a match!
        </p>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-2"
        >
          <Heart
            className="heart-glow h-10 w-10 sm:h-12 sm:w-12"
            fill="currentColor"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
