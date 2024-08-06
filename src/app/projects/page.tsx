import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Gus Feliciano',
  description: 'Explore innovative projects by Gus Feliciano, showcasing expertise in cloud architecture, Agile methodologies, and tech innovation.',
}

const projects = [
  {
    title: "Cloud Resume Challenge Part 1: AWS Serverless Website",
    description: "Built a cloud-native resume website using AWS services, showcasing skills in serverless architecture and cloud development. Implemented a visitor counter using a backend API.",
    technologies: ["AWS S3", "CloudFront", "Route 53", "DynamoDB", "Lambda", "API Gateway", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/gusfeliciano/cloud-resume-frontend"
  },
  // Add more projects as needed
  //{
  //  title: "Project 2",
  //  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //  technologies: ["Vue.js", "Express", "PostgreSQL"],
  //  link: "https://project2.com"
  //},
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