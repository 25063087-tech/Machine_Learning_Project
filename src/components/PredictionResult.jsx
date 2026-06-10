import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

/**
 * Displays prediction results including model score.
 */
export default function PredictionResult({ result }) {
  if (!result) return null

  const { modelName, prediction, accuracy, explanation } = result

  return (
    <motion.section
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mx-auto w-full max-w-4xl overflow-hidden px-4 pb-16 md:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="glass-card p-6 md:p-8"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <Sparkles
            className="h-6 w-6"
            style={{ color: 'var(--accent-pink)' }}
          />
          <h2 className="text-2xl font-bold gradient-text">
            Prediction Results
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-5">
          <div>
            <p className="text-sm text-[var(--text-muted)]">Selected Model</p>
            <p className="text-lg font-semibold text-[var(--text)]">
              {modelName}
            </p>
          </div>

          <div>
            <p className="text-sm text-[var(--text-muted)]">Prediction</p>
            <p className="text-2xl font-bold gradient-text">{prediction}</p>
          </div>

          <div>
            <p className="text-sm text-[var(--text-muted)]">Model Score</p>
            <p className="text-lg font-semibold text-[var(--text)]">
              {accuracy.toFixed(2)}%
            </p>
          </div>

          <div>
            <p className="text-sm text-[var(--text-muted)]">Explanation</p>
            <p className="mt-1 leading-relaxed text-[var(--text)]">
              {explanation}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
