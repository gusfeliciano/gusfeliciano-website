import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

  export default function Blog() {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <p>This is the blog page. Add your blog posts or a list of posts here.</p>
        </main>
        <Footer />
      </div>
    )
  }