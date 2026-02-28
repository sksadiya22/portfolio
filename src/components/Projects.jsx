import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, GithubIcon, Sparkles, Star } from 'lucide-react'

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const projects = [
    {
      title: 'Multi Model Recommendation System',
      description: 'Advanced recommendation system for media platforms using multiple machine learning models. Implements collaborative filtering and content-based approaches for personalized recommendations.',
      tech: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn'],
      github: 'https://github.com/sksadiya22/Multi_Model_Recommendation_System_for_Media_Platforms',
      demo: 'https://github.com/sksadiya22/Multi_Model_Recommendation_System_for_Media_Platforms',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      gradient: 'from-blue-500 to-cyan-500',
      featured: true,
      hasLiveDemo: false,
      updated: '2 days ago'
    },
    {
      title: 'Book Finder',
      description: 'React application integrating Google Books API for digital library management with reading status tracking and optimized API handling using Axios.',
      tech: ['JavaScript', 'React.js', 'Axios', 'REST APIs', 'Google Books API'],
      github: 'https://github.com/sksadiya22/Book_Finder',
      demo: 'https://book-finder-1-pi3r.onrender.com/',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      gradient: 'from-purple-500 to-pink-500',
      featured: true,
      hasLiveDemo: true,
      updated: 'Last month'
    },
    {
      title: 'Tinder Match Recommendation System',
      description: 'Machine learning-based recommendation system for matching profiles. Uses advanced algorithms to predict compatibility and suggest optimal matches.',
      tech: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-learn'],
      github: 'https://github.com/sksadiya22/Tinder_Match_Recommendation_System_ML',
      demo: 'https://github.com/sksadiya22/Tinder_Match_Recommendation_System_ML',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      gradient: 'from-pink-500 to-rose-500',
      featured: true,
      hasLiveDemo: false,
      updated: 'Dec 2, 2025'
    },
    {
      title: 'Advanced Task Manager',
      description: 'Desktop application built with Java Swing and AWT. Features task scheduling, priority management, and OS-level integration for productivity enhancement.',
      tech: ['Java', 'Swing', 'AWT', 'Desktop App', 'OS Integration'],
      github: 'https://github.com/sksadiya22/Advanced-Task-Manager-Java-Swing-AWT-OS-Desktop-Application',
      demo: 'https://github.com/sksadiya22/Advanced-Task-Manager-Java-Swing-AWT-OS-Desktop-Application',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      gradient: 'from-orange-500 to-red-500',
      hasLiveDemo: false,
      updated: 'Dec 2, 2025'
    },
    {
      title: 'Marathon Results',
      description: 'Assembly language project for processing and analyzing marathon race results. Demonstrates low-level programming and data processing capabilities.',
      tech: ['Assembly', 'Low-level Programming', 'Data Processing'],
      github: 'https://github.com/sksadiya22/Marathon_Results',
      demo: 'https://github.com/sksadiya22/Marathon_Results',
      image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&h=400&fit=crop',
      gradient: 'from-green-500 to-emerald-500',
      hasLiveDemo: false,
      updated: 'Dec 2, 2025'
    },
    {
      title: 'LifeScroll - MERN Blog',
      description: 'Full-stack blog platform with authentication, comments, and like system. Secure JWT-based authorization with dynamic updates and real-time features.',
      tech: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/sksadiya22/lifescroll',
      demo: 'https://lifescroll-3.onrender.com/',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
      gradient: 'from-indigo-500 to-purple-500',
      hasLiveDemo: true,
      updated: 'Nov 18, 2025'
    },
    {
      title: 'Amazon Clone',
      description: 'E-commerce website clone replicating Amazon\'s UI and core features. Built with HTML, CSS, and JavaScript for frontend development practice.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/sksadiya22/Amazon-Clone',
      demo: 'https://github.com/sksadiya22/Amazon-Clone',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop',
      gradient: 'from-yellow-500 to-orange-500',
      hasLiveDemo: false,
      updated: 'Sep 20, 2025'
    },
    {
      title: 'To-Do List Application',
      description: 'Task management application with clean UI and intuitive functionality. Features add, edit, delete, and mark complete operations for daily tasks.',
      tech: ['CSS', 'JavaScript', 'HTML', 'Local Storage'],
      github: 'https://github.com/sksadiya22/To-do-List',
      demo: 'https://github.com/sksadiya22/To-do-List',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&h=400&fit=crop',
      gradient: 'from-teal-500 to-cyan-500',
      hasLiveDemo: false,
      updated: 'Sep 20, 2025'
    },
    {
      title: 'AI Chatbot',
      description: 'Intelligent chatbot application powered by AI. Provides conversational interface with natural language processing capabilities.',
      tech: ['JavaScript', 'AI/ML', 'NLP', 'API Integration'],
      github: 'https://github.com/sksadiya22/AI-chatbot',
      demo: 'https://github.com/sksadiya22/AI-chatbot',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      gradient: 'from-violet-500 to-purple-500',
      hasLiveDemo: false,
      updated: 'Sep 19, 2025'
    },
    {
      title: 'Weather App',
      description: 'Frontend weather application with real-time weather data, forecasts, and location-based information. Clean and responsive user interface.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Weather API', 'Frontend'],
      github: 'https://github.com/sksadiya22/weatherapp_frontend-development',
      demo: 'https://github.com/sksadiya22/weatherapp_frontend-development',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      gradient: 'from-sky-500 to-blue-500',
      hasLiveDemo: false,
      updated: '2025'
    }
  ]

  const technologies = ['All Projects', 'Core Programming', 'Full Stack Development', 'Machine Learning & AI']
  
  const getProjectsByCategory = (category) => {
    if (category === 'All Projects') return projects
    if (category === 'Full Stack Development') return projects.filter(p => p.tech.some(t => ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'].includes(t)))
    if (category === 'Machine Learning & AI') return projects.filter(p => p.tech.some(t => ['Machine Learning', 'Python', 'Scikit-learn', 'Data Analysis', 'Pandas', 'NumPy', 'AI/ML'].includes(t)))
    if (category === 'Core Programming') return projects.filter(p => p.tech.some(t => ['Java', 'C++', 'Assembly', 'Low-level Programming'].includes(t)))
    return projects
  }
  
  const filteredProjects = getProjectsByCategory(selectedFilter)

  return (
    <section id="projects" className="py-20 px-1 bg-gray-800/30 relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full relative z-10 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <Sparkles size={20} className="text-purple-400" />
            <span className="text-purple-400 text-sm">My Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-base mb-8">
            A showcase of my projects demonstrating full-stack development, machine learning, and problem-solving skills
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
            {technologies.map((tech, idx) => (
              <motion.button
                key={tech}
                onClick={() => setSelectedFilter(tech)}
                layoutId={`filter-${tech}`}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all relative ${
                  selectedFilter === tech
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600/30'
                }`}
              >
                {tech}
                {selectedFilter === tech && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                type: 'spring',
                stiffness: 200,
                damping: 25
              }}
              viewport={{ once: true }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', duration: 0.6, delay: 0.2 }}
                  className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-orange-500/50"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <Star size={14} fill="currentColor" />
                  </motion.div>
                  Featured
                </motion.div>
              )}

              {/* Card */}
              <motion.div 
                whileHover={{ 
                  y: -12, 
                  rotateZ: 2,
                  boxShadow: '0 30px 60px rgba(59, 130, 246, 0.4)' 
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="relative bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 shadow-2xl h-full flex flex-col group/card"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.25, rotateZ: -3 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover/card:opacity-40 transition-opacity duration-300`}></div>
                  
                  {/* Updated Badge */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-gray-200">
                    {project.updated}
                  </div>

                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <GithubIcon size={20} />
                    </motion.a>
                    {project.hasLiveDemo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-blue-500/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500/50 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 group-hover/card:text-blue-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-base leading-relaxed flex-1 line-clamp-3 font-light">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <motion.span 
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2.5 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-md text-xs font-medium text-blue-300 border border-blue-500/30 hover:border-blue-500/60 transition-all hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-3 border-t border-gray-700/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                    >
                      <GithubIcon size={16} />
                      Code
                    </a>
                    {project.hasLiveDemo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium ml-auto"
                      >
                        <ExternalLink size={16} />
                        View
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover/card:opacity-20 transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects found for this technology</p>
          </motion.div>
        )}

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/sksadiya22?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all shadow-lg font-medium"
          >
            <GithubIcon size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
