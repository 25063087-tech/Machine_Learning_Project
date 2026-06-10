import { motion } from 'framer-motion'

/**
 * Premium animated gradient background with floating blobs.
 * Sits behind all page content.
 */
export default function AnimatedBackground() {
  return (
    <div
      className="animated-bg fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base gradient layer */}
      <div className="animated-bg-base absolute inset-0" />

      {/* Floating gradient blobs */}
      <motion.div
        className="animated-blob animated-blob-1 absolute rounded-full"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="animated-blob animated-blob-2 absolute rounded-full"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 70, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="animated-blob animated-blob-3 absolute rounded-full"
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -40, 80, 0],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="animated-blob animated-blob-4 absolute rounded-full"
        animate={{
          x: [0, -70, 90, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.05, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle vignette for text readability */}
      <div className="animated-bg-vignette absolute inset-0" />
    </div>
  )
}
