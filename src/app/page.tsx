import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gus Feliciano | Tech Enthusiast, Cloud Architect, Agile Advocate',
  description: 'Gus Feliciano is a Technical Program Manager specializing in cloud architecture, Agile methodologies, and bridging technology with business needs.',
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-3xl w-full text-center">
          <Image
            src="/gf-profile.png"
            alt="Gus Feliciano"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            Hey, I'm Gus 👋
          </h1>
          <p className="text-xl mb-6 dark:text-gray-300">
            I'm a tech enthusiast, cloud architect, and Agile advocate. I create solutions that bridge technology and business needs, specializing in cloud architecture, Agile project management, and process automation.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}