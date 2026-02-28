import { motion } from 'framer-motion'
import { Award, ExternalLink, Sparkles, Trophy, CheckCircle } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: 'Oracle Certified Professional',
      subtitle: 'Java SE 17 Developer',
      issuer: 'Oracle',
      date: '2024',
      description: 'Professional certification demonstrating expertise in Java SE 17 development, including core Java concepts, OOP principles, and advanced programming techniques.',
      link: 'https://drive.google.com/file/d/1U758wOnmWPzIHg7Lx2m-mdM1eY-2XoeB/view?usp=sharing',
      color: 'from-red-500 to-orange-500',
      icon: '☕',
      achievements: [
        'Advanced Java Programming',
        'Object-Oriented Design',
        'API Development',
        'Core Java Concepts'
      ]
    },
    
  ]

  return (
    <section id="certifications" className="py-20 px-1 bg-gray-800/30">
      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
            <Trophy size={20} className="text-orange-400" />
            <span className="text-orange-400 text-sm">Achievements</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Certifications & Credentials</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Professional certifications that validate my technical expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group mb-8"
            >
              <div className={`relative bg-gradient-to-r ${cert.color} p-0.5 rounded-2xl shadow-2xl`}>
                <div className="relative bg-gray-900 rounded-2xl p-8 md:p-10">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Side - Icon & Main Info */}
                    <div className="md:col-span-1 flex flex-col items-center md:items-start">
                      <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${cert.color} rounded-xl mb-6 text-5xl shadow-lg group-hover:scale-110 transition-transform`}>
                        {cert.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-center md:text-left">{cert.title}</h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-3`}>
                        {cert.subtitle}
                      </p>
                    </div>

                    {/* Middle - Description */}
                    <div className="md:col-span-1">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Issued By</p>
                          <p className="text-xl font-semibold">{cert.issuer}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Date</p>
                          <p className="text-xl font-semibold">{cert.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mt-6 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    {/* Right Side - Achievements */}
                    <div className="md:col-span-1">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Award size={20} className="text-orange-400" />
                        Key Competencies
                      </h4>
                      <div className="space-y-3 mb-6">
                        {cert.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle size={18} className="text-orange-400 flex-shrink-0" />
                            <span className="text-gray-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r ${cert.color} rounded-lg hover:shadow-lg transition-all text-white font-medium text-sm`}
                      >
                        View Certificate
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
