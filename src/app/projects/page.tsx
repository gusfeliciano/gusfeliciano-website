import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Gus Feliciano',
  description: 'Explore innovative projects by Gus Feliciano, showcasing expertise in cloud architecture, Agile methodologies, and tech innovation.',
}

const projects = [
  {
    title: "My Personal Website",
    description: "Developed a modern, responsive personal website using Next.js and React. Features include a dynamic blog system with MDX support, dark mode toggle, and responsive design.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
    link: "https://github.com/gusfeliciano/gusfeliciano-website"
  },
  {
    title: "Cloud Resume Challenge Part 1: AWS Serverless Website",
    description: "Built a cloud-native resume website using AWS services, showcasing skills in serverless architecture and cloud development. Implemented a visitor counter using a backend API.",
    technologies: ["AWS S3", "CloudFront", "Route 53", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/gusfeliciano/aws-serverless-resume"
  },
  {
    title: "Cloud Resume Challenge Part 2: AWS Serverless Backend with CI/CD",
    description: "Developed the serverless backend infrastructure for the Cloud Resume Challenge, implementing a visitor counter API with automated deployment. Utilized infrastructure as code and CI/CD practices to create a robust, scalable backend solution.",
    technologies: ["DynamoDB", "Lambda", "API Gateway", "AWS CDK", "GitHub Actions", "Node.js"],
    link: "https://github.com/gusfeliciano/aws-resume-cicd"
  }
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
    </div>
  )
}