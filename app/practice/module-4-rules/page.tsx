'use client'

export default function Module4Practice() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 4: Project Rules</h1>
          <p className="text-gray-600">
            Teach Copilot to follow your coding voice and style (Agent Mode)
          </p>
        </header>

        {/* Lesson 4.1 */}
        <section className="bg-white p-6 rounded-lg shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Lesson 4.1 — Setting Up Your Rules File
          </h2>

          <p className="text-gray-700 mb-4">
            Your project rules live in <code>.github/copilot-instructions.md</code>.
          </p>

          <pre className="bg-gray-50 p-4 rounded border text-sm text-gray-800 overflow-x-auto">
{`# Copilot Instructions
- Use React functional components with arrow functions.
- Write TypeScript types or interfaces.
- Style with Tailwind CSS.
`}
          </pre>
        </section>

        {/* Lesson 4.2 */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-blue-400">
          <h2 className="text-2xl font-semibold mb-4">
            Lesson 4.2 — Testing Your Rules
          </h2>

          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>
              <code>{`// Scaffold a LoginForm with email, password, and submit button.`}</code>
            </li>
            <li>
              <code>{`// Build a ProfileCard with avatar, name, bio, and Contact button.`}</code>
            </li>
            <li>
              <code>{`// Create a PrimaryButton component with Tailwind styles.`}</code>
            </li>
            <li>
              <code>{`// Implement a SearchBar with debounce (300ms).`}</code>
            </li>
          </ul>
        </section>

        {/* Lesson 4.3 */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-green-400">
          <h2 className="text-2xl font-semibold mb-4">
            Lesson 4.3 — Consistency Across Components
          </h2>

          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>
              <code>{`// Create a NotificationBadge (count, maxCount)`}</code>
            </li>
            <li>
              <code>{`// Create a ProgressBar (value 0–100)`}</code>
            </li>
            <li>
              <code>{`// Create a ModalDialog (open, onClose, title)`}</code>
            </li>
            <li>
              <code>{`// Create a DataTable shell (columns, rows)`}</code>
            </li>
          </ul>
        </section>

        {/* Lesson 4.4 */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-purple-400">
          <h2 className="text-2xl font-semibold mb-4">
            Lesson 4.4 — Refining Rules
          </h2>

          <pre className="bg-gray-50 p-4 rounded border text-sm text-gray-800 overflow-x-auto">
{`- Use consistent Tailwind button styles
- Use accessible labels and aria attributes
- Keep components small and modular
`}
          </pre>
        </section>

        {/* Takeaways */}
        <section className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Key Takeaways
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li><strong>Define once, follow everywhere.</strong></li>
            <li><strong>Use Agent Mode for real tasks.</strong></li>
            <li><strong>Refine rules when output drifts.</strong></li>
          </ul>
        </section>
      </div>
    </main>
  )
}