import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Blog() {
  const postFiles = fs.readdirSync(path.join(process.cwd(), 'src', 'posts'))
  const posts = postFiles.map((filename) => {
    const slug = filename.replace('.mdx', '')
    return { slug, title: slug.replace(/-/g, ' ') }
  })

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Blog</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}