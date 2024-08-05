import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-white dark:bg-gray-800 shadow">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold dark:text-white">
            Gus Feliciano
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="text-sm font-medium hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
              Blog
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
              Projects
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}