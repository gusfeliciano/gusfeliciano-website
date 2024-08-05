import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        <FaLinkedin size={24} />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        <FaTwitter size={24} />
      </a>
    </div>
  );
}