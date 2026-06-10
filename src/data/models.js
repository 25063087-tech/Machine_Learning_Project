/**
 * Fake ML model definitions and local prediction generator.
 * No real machine learning — used for university demo purposes only.
 */

export const MODELS = [
  {
    id: 'logistic-regression',
    name: 'Logistic Regression',
    accuracy: 10.14,
  },
  {
    id: 'random-forest',
    name: 'Random Forest',
    accuracy: 10.06,
  },
  {
    id: 'decision-tree',
    name: 'Decision Tree',
    accuracy: 10.06,
  },
  {
    id: 'mlp',
    name: 'Multi-Layer Perceptron',
    accuracy: 10.1,
  },
  {
    id: 'svm',
    name: 'Support Vector Machine',
    accuracy: 9.5,
  },
]

export const PREDICTIONS = [
  'Strong Match',
  'Potential Match',
  'Average Compatibility',
  'Low Compatibility',
]

/** Returns a random integer between min and max (inclusive). */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/** Builds a human-readable explanation based on the prediction outcome. */
function buildExplanation(prediction) {
  const explanations = {
    'Strong Match':
      'Based on the provided profile information, the selected model predicts a high compatibility outcome with strong potential for a successful match.',
    'Potential Match':
      'Based on the provided profile information, the selected model indicates promising compatibility with room for growth in the relationship.',
    'Average Compatibility':
      'Based on the provided profile information, the selected model suggests moderate compatibility. Some factors align well while others may need consideration.',
    'Low Compatibility':
      'Based on the provided profile information, the selected model predicts lower compatibility. Profile factors show limited alignment for an optimal match.',
  }
  return explanations[prediction] || explanations['Average Compatibility']
}

/**
 * Generates a fake prediction for the given model id.
 */
export function generatePrediction(modelId) {
  const model = MODELS.find((m) => m.id === modelId)
  if (!model) {
    throw new Error(`Unknown model: ${modelId}`)
  }

  const prediction =
    PREDICTIONS[randomInt(0, PREDICTIONS.length - 1)]
  const explanation = buildExplanation(prediction)

  return {
    modelName: model.name,
    prediction,
    accuracy: model.accuracy,
    explanation,
  }
}
