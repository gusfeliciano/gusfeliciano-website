import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const metadata = {
  title: 'Contact | Gus Feliciano',
  description: 'Get in touch with Gus Feliciano for web development projects or collaborations.',
}

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contact Me</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm always open to new opportunities, collaborations, or just a friendly chat about web development. Feel free to reach out!
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Email</h2>
            <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              your.email@example.com
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Social Media</h2>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}