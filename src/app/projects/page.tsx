import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Gus Feliciano',
  description: 'Explore innovative projects by Gus Feliciano, showcasing expertise in cloud architecture, Agile methodologies, and tech innovation.',
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://project2.com"
  },
  {
    title: "Project 3",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://project3.com"
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Projects</h1>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
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