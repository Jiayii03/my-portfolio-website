import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen bg-gradient-to-r from-rose-50 to-blue-100 dark:bg-gradient-to-br dark:from-[#00081A]  dark:to-[#181932] snap-y snap-mandatory overflow-scroll z-0'>
      {/* Header */}
      <Header />

      {/* Hero */}
      {/* the id is for anchor purpose */}
      <section id='hero' className='snap-center'>
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
