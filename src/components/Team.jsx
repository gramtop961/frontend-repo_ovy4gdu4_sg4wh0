export default function Team() {
  const members = [
    { name: 'Ava Patel', role: 'XR Designer' },
    { name: 'Leo Park', role: 'WebGL Engineer' },
    { name: 'Mina Chen', role: 'Product Lead' },
    { name: 'Jon Reyes', role: 'Growth' },
  ]

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Meet the team</h2>
          <p className="mt-3 text-gray-600">Builders, dreamers, and gamers crafting the future of work.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map(m => (
            <div key={m.name} className="p-6 rounded-2xl bg-white ring-1 ring-gray-200">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
              <h3 className="mt-4 font-semibold text-gray-900">{m.name}</h3>
              <p className="text-sm text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
