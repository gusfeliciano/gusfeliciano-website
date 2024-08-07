import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/button'
import SocialLinks from '../components/SocialLinks'
import { ArrowRight, Download } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gus Feliciano | Tech Enthusiast, Cloud Architect, Agile Advocate',
  description: 'Gus Feliciano is a Technical Program Manager specializing in cloud architecture, Agile methodologies, and bridging technology with business needs.',
}

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center p-8 bg-light-bg dark:bg-gray-900">
      <div className="max-w-3xl w-full text-center">
        <Image
          src="/gf-profile.png"
          alt="Gus Feliciano"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Hey, I'm Gus 👋
        </h1>
        <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
          I'm a tech enthusiast, cloud architect, and Agile advocate. I create solutions that bridge technology and business needs, specializing in cloud architecture, Agile project management, and process automation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Button asChild>
            <a href="/Gustavo.Feliciano.Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/about">
              Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <SocialLinks />
      </div>
    </main>
  )
}