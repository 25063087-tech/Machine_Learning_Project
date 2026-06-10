import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InputForm from './components/InputForm'
import ModelSelector from './components/ModelSelector'
import PredictionResult from './components/PredictionResult'
import ProjectCredits from './components/ProjectCredits'
import AnimatedBackground from './components/AnimatedBackground'
import { generatePrediction } from './data/models'

const INITIAL_FORM = {
  name: '',
  age: '',
  income: '',
  height: '',
  weight: '',
  job: '',
  hobby: '',
  relationshipGoals: '',
  pronouns: '',
  interestedIn: '',
}

/**
 * Main application — single-page dating ML demo.
 */
function App() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [selectedModelId, setSelectedModelId] = useState(null)
  const [result, setResult] = useState(null)
  const [hasPredicted, setHasPredicted] = useState(false)

  const handlePredict = () => {
    if (!selectedModelId) return

    const prediction = generatePrediction(selectedModelId)
    setResult(prediction)
    setHasPredicted(true)

    // Smooth scroll to results after a brief delay
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
      <Navbar />
      <main>
        <Hero />
        <InputForm formData={formData} onChange={setFormData} />
        <ModelSelector
          selectedModelId={selectedModelId}
          onSelect={setSelectedModelId}
        />

        {/* Predict button */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center px-4 pb-12"
        >
          <motion.button
            type="button"
            onClick={handlePredict}
            disabled={!selectedModelId}
            className="btn-predict rounded-full px-12 py-4 text-lg sm:px-16 sm:py-5 sm:text-xl"
            whileHover={selectedModelId ? { scale: 1.05 } : {}}
            whileTap={selectedModelId ? { scale: 0.98 } : {}}
          >
            Predict Match
          </motion.button>
        </motion.section>

        {/* Results — animated expand */}
        <div id="results">
          <AnimatePresence>
            {hasPredicted && result && (
              <PredictionResult key="results" result={result} />
            )}
          </AnimatePresence>
        </div>
      </main>

      <ProjectCredits />

      <footer className="border-t border-[var(--card-border)] py-6 text-center text-sm text-[var(--text-muted)]">
        <p>
          Intimate Lover — University ML Project Demo. No real machine learning
          models are connected.
        </p>
      </footer>
      </div>
    </div>
  )
}

export default App
