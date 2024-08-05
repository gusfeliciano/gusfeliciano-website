import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

  export default function Contact() {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p>This is the contact page. Add your contact information or a contact form here.</p>
        </main>
        <Footer />
      </div>
    )
  }