import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'
import { MODELS } from '../data/models'

/**
 * Clickable cards for selecting one ML model.
 */
export default function ModelSelector({ selectedModelId, onSelect }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mx-auto w-full max-w-4xl px-4 pb-12 md:px-8"
    >
      <h2 className="mb-6 text-center text-2xl font-semibold gradient-text">
        Select a Model
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MODELS.map((model) => {
          const isSelected = selectedModelId === model.id
          return (
            <motion.button
              key={model.id}
              type="button"
              onClick={() => onSelect(model.id)}
              aria-pressed={isSelected}
              className={`glass-card flex flex-col items-center gap-3 p-6 text-left transition-all duration-300 ${
                isSelected
                  ? 'scale-105 border-2 border-[#9d4edd] shadow-[0_0_20px_rgba(255,78,205,0.5)]'
                  : 'border border-[var(--card-border)] hover:border-[var(--accent-purple)]'
              }`}
              whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Brain
                className="h-8 w-8"
                style={{
                  color: isSelected
                    ? 'var(--accent-pink)'
                    : 'var(--accent-purple)',
                }}
              />
              <span className="text-center text-sm font-semibold text-[var(--text)] sm:text-base">
                {model.name}
              </span>
              <span className="text-xs text-[var(--text-muted)] sm:text-sm">
                Score: {model.accuracy.toFixed(2)}%
              </span>
            </motion.button>
          )
        })}
      </div>
    </motion.section>
  )
}
