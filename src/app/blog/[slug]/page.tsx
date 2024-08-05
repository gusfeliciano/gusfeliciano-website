import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

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

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <article className="prose dark:prose-invert">
          <MDXRemote source={fileContent} />
        </article>
      </main>
      <Footer />
    </div>
  )
}