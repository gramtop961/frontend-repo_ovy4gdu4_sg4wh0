import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(147,51,234,0.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.2),transparent_40%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-10">
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" /> Live VR SaaS
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Build immersive products with a clean, futuristic stack
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              Launch faster with a modern landing, built-in auth, a minimal blog, and a contact form that writes to your database.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black/90 transition">
                Get a demo
              </a>
              <a href="#blog" className="rounded-full px-6 py-3 text-sm font-medium ring-1 ring-gray-300 text-gray-900 hover:bg-gray-50 transition">
                Read the blog
              </a>
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden bg-white">
              <Spline scene="https://prod.spline.design/9HgHYACX2il7xmYO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
