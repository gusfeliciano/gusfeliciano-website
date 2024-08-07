import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import matter from 'gray-matter'
import Image from 'next/image'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'src', 'posts', `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data: frontmatter } = matter(fileContent)

  return {
    title: `${frontmatter.title} | Gus Feliciano's Blog`,
    description: frontmatter.excerpt || 'Read this insightful article by Gus Feliciano on cloud architecture, Agile methodologies, and tech innovation.',
  }
}

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

  const formattedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-gray-900">
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{formattedDate}</p>
          {frontmatter.coverImage && (
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              width={800}
              height={400}
              className="w-full h-auto mb-8"
            />
          )}
          <div className="mt-8">
            <MDXRemote source={content} />
          </div>
        </article>
      </main>
    </div>
  )
}