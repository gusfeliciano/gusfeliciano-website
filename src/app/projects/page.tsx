import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Gus Feliciano',
  description: 'Explore the web development projects created by Gus Feliciano, showcasing skills in React, Node.js, and more.',
}

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://project1.com"
  },
  {
    title: "Project 2",
    description: "A brief description of project 2.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://project2.com"
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}