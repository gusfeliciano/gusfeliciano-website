import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-light-bg dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Gus Feliciano
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Blog
            </Link>
            <Link href="/projects" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Projects
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}