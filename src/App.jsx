import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Team from './components/Team'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AuthModal from './components/AuthModal'

function App() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <main>
        <Hero />
        <Features />
        <Team />
        <Blog />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} VisionSaaS. All rights reserved.
      </footer>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
