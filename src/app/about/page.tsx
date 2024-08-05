import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SocialLinks from '../../components/SocialLinks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Gus Feliciano | Web Developer',
  description: 'Learn more about Gus Feliciano, a passionate tech enthusiast based in Colorado.',
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h1>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            Hello! I'm Gus Feliciano, a passionate web developer based in Colorado. With a keen eye for detail and a love for clean, efficient code, I specialize in creating amazing digital experiences that make a difference.
          </p>
          <p>
            My journey in web development started [X] years ago, and since then, I've had the opportunity to work on a wide range of projects, from small business websites to large-scale web applications. I'm particularly interested in [specific areas of web development you're passionate about].
          </p>
          <p>
            When I'm not coding, you can find me [your hobbies or interests]. I believe in continuous learning and am always excited to take on new challenges in the ever-evolving world of web development.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Skills</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>Git & Version Control</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Connect with me</h2>
          <SocialLinks />
        </div>
      </main>
      <Footer />
    </div>
  )
}