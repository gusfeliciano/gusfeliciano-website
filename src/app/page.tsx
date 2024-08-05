import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow flex items-start justify-center p-8 mt-16">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/gf-profile.png"
              alt="Gus Feliciano"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 dark:text-white">
              Hello, I'm Gus Feliciano
            </h1>
            <p className="text-xl dark:text-gray-300">
              I'm a web developer passionate about creating amazing digital experiences.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}