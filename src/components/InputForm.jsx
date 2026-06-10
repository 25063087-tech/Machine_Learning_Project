import { motion } from 'framer-motion'

const RELATIONSHIP_GOALS = [
  'Casual Dating',
  'Long-Term Relationship',
  'Marriage',
  'Friendship',
  'Undecided',
]

const PRONOUNS = ['He/Him', 'She/Her', 'They/Them', 'Prefer Not To Say']

const INTERESTED_IN = ['Men', 'Women', 'Both', 'Other']

const TEXT_FIELDS = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
  { id: 'age', label: 'Age', type: 'number', placeholder: 'Enter your age' },
  {
    id: 'income',
    label: 'Income',
    type: 'text',
    placeholder: 'Annual income',
  },
  {
    id: 'height',
    label: 'Height',
    type: 'text',
    placeholder: 'e.g. 5\'10"',
  },
  {
    id: 'weight',
    label: 'Weight',
    type: 'text',
    placeholder: 'e.g. 70 kg',
  },
  { id: 'job', label: 'Job', type: 'text', placeholder: 'Your occupation' },
  {
    id: 'hobby',
    label: 'Hobby',
    type: 'text',
    placeholder: 'Your hobbies',
  },
]

/**
 * Profile input form with glassmorphism styling.
 */
export default function InputForm({ formData, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    onChange({ ...formData, [name]: value })
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto w-full max-w-4xl px-4 pb-12 md:px-8"
    >
      <h2 className="mb-6 text-center text-2xl font-semibold gradient-text">
        Your Profile
      </h2>
      <div className="glass-card p-6 md:p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {TEXT_FIELDS.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="form-label">
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                value={formData[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="form-input"
              />
            </div>
          ))}

          <div>
            <label htmlFor="relationshipGoals" className="form-label">
              Relationship Goals
            </label>
            <select
              id="relationshipGoals"
              name="relationshipGoals"
              value={formData.relationshipGoals}
              onChange={handleChange}
              className="form-input form-select"
            >
              <option value="" className="form-select-option">
                Select...
              </option>
              {RELATIONSHIP_GOALS.map((opt) => (
                <option key={opt} value={opt} className="form-select-option">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="pronouns" className="form-label">
              Pronouns
            </label>
            <select
              id="pronouns"
              name="pronouns"
              value={formData.pronouns}
              onChange={handleChange}
              className="form-input form-select"
            >
              <option value="" className="form-select-option">
                Select...
              </option>
              {PRONOUNS.map((opt) => (
                <option key={opt} value={opt} className="form-select-option">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="interestedIn" className="form-label">
              Interested In
            </label>
            <select
              id="interestedIn"
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              className="form-input form-select"
            >
              <option value="" className="form-select-option">
                Select...
              </option>
              {INTERESTED_IN.map((opt) => (
                <option key={opt} value={opt} className="form-select-option">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
