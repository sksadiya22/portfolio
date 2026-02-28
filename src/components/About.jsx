import { motion } from 'framer-motion'
import { User, Award, Coffee, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: <Award size={24} />, value: '9.5', label: 'CGPA' },
    { icon: <Coffee size={24} />, value: '10+', label: 'Projects Completed' },
    { icon: <Heart size={24} />, value: '2+', label: 'Certifications' }
  ]

  return (
    <section id="about" className="py-20 px-1 bg-gray-800/30">
      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <User size={20} className="text-blue-400" />
            <span className="text-blue-400 text-sm">Get to know me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">About Me</h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 text-gray-300 text-base md:text-lg"
          >
            <p className="leading-relaxed text-base md:text-lg text-gray-300">
              I'm a MERN Stack Developer and CSE student at SRM University, Mangalagiri (CGPA 9.5). I build scalable web
              applications using React, Node and MongoDB.
            </p>
            <p className="leading-relaxed text-base md:text-lg text-gray-300">
              Currently pursuing my B.Tech, I have completed internships and shipped projects focusing on full-stack
              development and introductory ML prototypes.
            </p>
            <p className="leading-relaxed text-base md:text-lg text-gray-300">
              Outside of coding, I solve algorithmic problems on LeetCode and contribute to open-source projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
              <div className="space-y-4">
                {[
                  'Build full-stack MERN applications',
                  'Design responsive user interfaces',
                  'Develop RESTful APIs with authentication',
                  'Implement machine learning models',
                  'Solve algorithmic problems on LeetCode'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
