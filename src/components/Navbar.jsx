import { useState } from 'react'
import { Menu, X, Headset, LogIn } from 'lucide-react'

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Team', href: '#team' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
            <Headset className="h-6 w-6 text-indigo-600" />
            <span>VisionSaaS</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
            <button
              onClick={onOpenAuth}
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white text-sm px-4 py-2 hover:bg-black/90 transition"
            >
              <LogIn className="h-4 w-4" /> Sign in
            </button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-2 py-2 rounded hover:bg-gray-100">
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => { setOpen(false); onOpenAuth?.() }}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-gray-900 text-white text-sm px-4 py-2"
              >
                <LogIn className="h-4 w-4" /> Sign in
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
