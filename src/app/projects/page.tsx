import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h1>
        <p className="text-gray-700 dark:text-gray-300">This is the projects page. Add your projects or a list of projects here.</p>
      </main>
      <Footer />
    </div>
  )
}