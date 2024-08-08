import SocialLinks from '../../components/SocialLinks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Gus Feliciano | Technical Program Manager',
  description: 'Learn more about Gus Feliciano, a Technical Program Manager and AWS Certified Solutions Architect based in Colorado.',
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-gray-900">
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h1>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            Hello! I'm Gus Feliciano, a Technical Program Manager and AWS Certified Solutions Architect based in Colorado. With a strong background in cloud solutions and Agile methodologies, I specialize in driving innovation and efficiency in tech-driven environments.
          </p>
          <p>
            My recent experience showcases my ability to lead complex technical projects, implement automation solutions, and drive Agile adoption across engineering teams. I've successfully launched social media integrations, optimized CapEx reporting processes, and improved team collaboration through effective Agile/Scrum coaching.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Experience Highlights</h2>
          <ul className="list-disc list-inside">
            <li>Automated CapEx reporting, reducing processing time from 2 weeks to 2 hours</li>
            <li>Led the launch of a social verification tool, reducing approval delays from 1 week to 15 minutes</li>
            <li>Implemented Jira service management solutions, improving operational efficiency</li>
            <li>Collaborated on migrating data streams to a scalable Kafka streaming service</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Certifications</h2>
          <ul className="list-disc list-inside">
            <li>AWS Certified Solutions Architect</li>
            <li>AWS Certified Cloud Practitioner</li>
            <li>ISC2 Certified in Cybersecurity</li>
            <li>Certified Scrum Master (CSM)</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Skills</h2>
          <ul className="list-disc list-inside">
            <li>Technical Program Management</li>
            <li>Agile/Scrum Coaching</li>
            <li>CapEx & OpEx Management</li>
            <li>Jira Administration</li>
            <li>Cloud Solutions (AWS)</li>
            <li>English/Spanish Native Proficiency</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Connect with me</h2>
          <SocialLinks />
        </div>
      </main>
    </div>
  )
}