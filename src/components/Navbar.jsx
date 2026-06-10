import { Heart } from 'lucide-react'

/**
 * Top navigation bar with branding.
 */
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3 md:px-8">
        <div className="flex items-center gap-2">
          <Heart
            className="h-5 w-5"
            style={{ color: 'var(--accent-pink)' }}
            fill="var(--accent-pink)"
          />
          <span className="text-lg font-semibold gradient-text">
            Intimate Lover
          </span>
        </div>
      </div>
    </nav>
  )
}
