import { useEffect, useState } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/blog`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Latest from the blog</h2>
          <p className="mt-3 text-gray-600">Insights on VR, design, and product.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : posts.length === 0 ? (
            <p className="text-gray-600">No posts yet.</p>
          ) : (
            posts.map(p => (
              <article key={p.slug} className="p-6 rounded-2xl ring-1 ring-gray-200 hover:ring-gray-300 transition">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                {p.excerpt && <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>}
                <div className="mt-3 text-xs text-gray-500">
                  {p.author ? `By ${p.author}` : '—'}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
