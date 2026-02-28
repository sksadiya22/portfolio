import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Sparkles, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'MERN Stack Intern',
      company: 'Edubot Technologies',
      location: 'Remote',
      period: 'May 2025 - July 2025',
      description: 'Full-Stack Development Intern working on MERN applications with focus on authentication and backend optimization.',
      achievements: [
        'Developed MERN applications with REST APIs',
        'Implemented JWT-based authentication',
        'Created role-based access control system',
        'Optimized backend performance'
      ],
      certificateLink: 'https://drive.google.com/file/d/1tRO-pjxiT6JcGOTVl5s6mThkYTm8N5n_/view?usp=sharing',
      color: 'from-blue-500 to-cyan-500'
    },
  ]

  return (
    <section id="experience" className="py-20 px-1 relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <Sparkles size={20} className="text-purple-400" />
            <span className="text-purple-400 text-sm">My Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My professional journey and the amazing companies I've worked with
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex gap-8 items-start">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 items-center justify-center relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-full animate-pulse opacity-20`}></div>
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Briefcase size={20} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 group">
                    <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 shadow-xl">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-3xl font-semibold mb-2 group-hover:text-gradient transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-gray-400 text-base">
                          <span className="flex items-center gap-2">
                            <Briefcase size={16} className="text-blue-400" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin size={16} className="text-purple-400" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar size={16} className="text-orange-400" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 mb-4">
                        <h4 className="text-base font-semibold text-gray-400 mb-3">Key Achievements:</h4>
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${exp.color} rounded-full mt-2`}></div>
                            <span className="text-gray-300 text-base">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Certificate Button */}
                      {exp.certificateLink && (
                        <a
                          href={exp.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-base font-medium`}
                        >
                          View Certificate
                          <ExternalLink size={16} />
                        </a>
                      )}

                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
