import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

  export default function Projects() {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p>This is the projects page. Add your projects or a list of projects here.</p>
        </main>
        <Footer />
      </div>
    )
  }