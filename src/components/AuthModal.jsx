import { useState } from 'react'
import { X } from 'lucide-react'

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState('signin')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (!open) return null

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    try {
      // Placeholder: In a real app you'd call your auth provider or backend here.
      await new Promise(r => setTimeout(r, 800))
      onClose()
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/40 p-4" role="dialog" aria-modal>
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="font-semibold text-gray-900">{mode === 'signin' ? 'Sign in' : 'Create account'}</h3>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X className="h-5 w-5" /></button>
        </div>
        <form onSubmit={onSubmit} className="p-5 space-y-4">
          {error && <div className="text-sm text-red-600">{error}</div>}
          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <button disabled={loading} className="w-full rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black/90 transition disabled:opacity-50">
            {loading ? 'Please wait...' : (mode === 'signin' ? 'Sign in' : 'Create account')}
          </button>
          <p className="text-xs text-gray-500 text-center">
            {mode === 'signin' ? (
              <>
                New here?{' '}
                <button type="button" onClick={() => setMode('signup')} className="text-indigo-600 hover:underline">Create an account</button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button type="button" onClick={() => setMode('signin')} className="text-indigo-600 hover:underline">Sign in</button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  )
}
