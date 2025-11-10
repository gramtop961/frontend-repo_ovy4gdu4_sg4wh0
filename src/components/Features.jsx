import { Shield, Sparkles, Rocket, Cpu } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Shield,
      title: 'Auth Ready',
      desc: 'Sign-in modal and API endpoints set up to connect to your database.',
    },
    {
      icon: Sparkles,
      title: 'VR First',
      desc: 'Hero powered by a real 3D Spline asset. Interactive, futuristic, delightful.',
    },
    {
      icon: Rocket,
      title: 'Fast Launch',
      desc: 'Vite + FastAPI foundation with Tailwind and sensible defaults.',
    },
    {
      icon: Cpu,
      title: 'Content Built-in',
      desc: 'Minimal blog and contact form out of the box to share updates and collect leads.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl ring-1 ring-gray-200 hover:ring-gray-300 transition">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
