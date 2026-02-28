import { motion } from 'framer-motion'
import { Sparkles, Code, Database, Wrench, Zap } from 'lucide-react'
import { SiReact, SiJavascript, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiPython, SiCplusplus, SiGit, SiPostgresql, SiDjango, SiPandas, SiTensorflow } from 'react-icons/si'
import { FaJava, FaHtml5, FaDatabase } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', icon: SiReact, color: 'text-cyan-400' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
        { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' }
      ]
    },
    {
      title: 'Backend',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
        { name: 'Django', icon: SiDjango, color: 'text-green-600' }
      ]
    },
    {
      title: 'Languages & Tools',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Python', icon: SiPython, color: 'text-blue-500' },
        { name: 'Java', icon: FaJava, color: 'text-orange-600' },
        { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
        { name: 'Git', icon: SiGit, color: 'text-orange-600' },
        { name: 'VS Code', icon: Code, color: 'text-blue-500' }
      ]
    },
    {
      title: 'AI/ML',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Pandas', icon: SiPandas, color: 'text-indigo-500' },
        { name: 'NumPy', icon: SiPython, color: 'text-blue-500' },
        { name: 'Scikit-learn', icon: SiPython, color: 'text-orange-500' },
        { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-600' },
        { name: 'Matplotlib', icon: SiPython, color: 'text-green-500' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-1 relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
      
      <div className="w-full relative z-10 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Sparkles size={20} className="text-blue-400" />
            <span className="text-blue-400 text-sm">My Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-base">
            Constantly learning and improving my skills to stay up-to-date with the latest technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 shadow-xl h-full">
                <h3 className="text-2xl font-semibold mb-6 text-center">{category.title}</h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, idx) => {
                    const IconComponent = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-900/50 hover:bg-gray-800/70 border border-gray-700/30 hover:border-gray-600 transition-all cursor-pointer group/skill"
                      >
                        <IconComponent className={`${skill.color} text-4xl mb-2 transition-transform group-hover/skill:scale-110`} />
                        <span className="text-xs text-gray-300 text-center font-medium">{skill.name}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
