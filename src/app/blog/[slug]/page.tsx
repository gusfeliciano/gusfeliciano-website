import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import matter from 'gray-matter'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Image from 'next/image'

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('src', 'posts'))
  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'src', 'posts', `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  
  const { data: frontmatter, content } = matter(fileContent)

  // Format the date
  const formattedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <article className="prose dark:prose-invert">
          <h1>{frontmatter.title}</h1>
          <p>{formattedDate}</p>
          {frontmatter.coverImage && (
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              width={800}
              height={400}
              className="w-full h-auto"
            />
          )}
          <div className="mt-8">
          <MDXRemote source={content} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}