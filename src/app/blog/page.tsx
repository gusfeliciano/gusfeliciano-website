import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

interface PostMetadata {
  title?: string;
  date?: string;
  excerpt?: string;
  coverImage?: string;
  [key: string]: string | undefined;
}

function getPostMetadata(content: string): PostMetadata {
  const match = content.match(/---\s*([\s\S]*?)\s*---/)
  const metadata = match ? match[1] : ''
  const frontmatter: PostMetadata = {}
  metadata.split('\n').forEach(line => {
    const [key, value] = line.split(': ')
    if (key && value) {
      frontmatter[key.trim()] = value.trim()
    }
  })
  return frontmatter
}

export default function Blog() {
  const postFiles = fs.readdirSync(path.join(process.cwd(), 'src', 'posts'))
    .filter(filename => filename !== '.DS_Store' && filename !== 'example-post-template.mdx')
  const posts = postFiles.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(process.cwd(), 'src', 'posts', filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const metadata = getPostMetadata(fileContent)
    return { 
      slug, 
      title: metadata.title || slug.replace(/-/g, ' '),
      date: metadata.date || 'Unknown date',
      excerpt: metadata.excerpt || 'No excerpt available',
      coverImage: metadata.coverImage || '/images/default-cover.jpg',
    }
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image 
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                width={800}
                height={400}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{post.date}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}