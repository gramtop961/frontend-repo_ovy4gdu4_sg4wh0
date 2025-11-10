import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ ok: true })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, error: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p className="mt-3 text-gray-600">Tell us about your use-case. We usually respond within a day.</p>
            {status && (
              <div className={`mt-4 text-sm rounded-lg px-4 py-3 ${status.ok ? 'bg-green-50 text-green-700 ring-1 ring-green-200' : 'bg-red-50 text-red-700 ring-1 ring-red-200'}`}>
                {status.ok ? 'Thanks! We received your message.' : status.error || 'Something went wrong.'}
              </div>
            )}
          </div>
          <form onSubmit={onSubmit} className="p-6 rounded-2xl bg-white ring-1 ring-gray-200 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows="4" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <button disabled={loading} className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black/90 transition disabled:opacity-50">
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
