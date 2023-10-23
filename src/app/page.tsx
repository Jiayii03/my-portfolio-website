import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen bg-gradient-to-r from-rose-50 to-blue-100'>
      {/* Header */}
      <Header />

      {/* Hero */}
      {/* the id is for anchor purpose */}
      <section id='hero'>
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
    
  )
}
