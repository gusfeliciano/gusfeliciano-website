import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold">
            Gus Feliciano
          </Link>
          <div className="flex space-x-4">
            <Link href="/about" className="text-sm font-medium hover:text-gray-900">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-gray-900">
              Blog
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-gray-900">
              Projects
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}