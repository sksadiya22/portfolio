import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [formStatus, setFormStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus('Please fill all fields')
      return
    }
    
    setLoading(true)
    try {
      const response = await fetch('https://formspree.io/f/xzzzlpna', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })
      
      if (response.ok) {
        setFormStatus('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setFormStatus(''), 5000)
      } else {
        setFormStatus('Failed to send message. Please try again.')
      }
    } catch (error) {
      setFormStatus('Error sending message. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <section id="contact" className="py-20 px-1 bg-gray-800/30 relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Sparkles size={20} className="text-blue-400" />
            <span className="text-blue-400 text-sm">Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-base md:text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Let's create something amazing together!
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Mail size={24} />,
                  label: 'Email',
                  value: 'parvin_shaik@srmap.edu.in',
                  href: 'mailto:parvin_shaik@srmap.edu.in',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: <Phone size={24} />,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/sadiya22',
                  href: 'https://linkedin.com/in/sadiya22',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: <MapPin size={24} />,
                  label: 'Location',
                  value: 'Vijayawada, Andhra Pradesh',
                  href: null,
                  color: 'from-orange-500 to-red-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-300 hover:text-white transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative z-10">
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-300 font-semibold">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400 text-gray-100"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-300 font-semibold">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400 text-gray-100"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <label htmlFor="subject" className="block text-sm mb-2 text-gray-300 font-semibold">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400 text-gray-100"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                
                <div className="relative z-10">
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-300 font-semibold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none placeholder-gray-400 text-gray-100"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2 font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Status Message */}
                <AnimatePresence>
                  {formStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-lg text-sm text-center font-medium ${
                        formStatus.includes('successfully') 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                      }`}
                    >
                      {formStatus}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-20 pt-8 border-t border-gray-800"
      >
        <p className="text-gray-500">
          &copy; 2024 Shaik Sadiya Parvin. Built with React & Tailwind CSS
        </p>
      </motion.div>
    </section>
  )
}

export default Contact
