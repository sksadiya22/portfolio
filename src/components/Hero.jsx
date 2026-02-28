import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GithubIcon, LinkedinIcon, Mail, ChevronDown, Download, Code2, Sparkles, ArrowRight } from 'lucide-react'

const Hero = () => {
  const roles = ['MERN Stack Developer', 'Full Stack Engineer', 'ML Enthusiast', 'Web Developer']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-1 pt-16 overflow-x-hidden">
      {/* Premium Animated Background (simplified) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Removed circular blobs per request; keep a very subtle static gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      </div>

      <div className="w-full relative z-10 max-w-screen-2xl mx-auto px-4">
        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-8">
          
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 pl-6 pt-4"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
            >
              <Sparkles size={16} className='text-blue-400' />
              <span className='text-sm font-semibold text-blue-400'>Welcome</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight whitespace-nowrap">
                <span className='text-blue-300 mr-2'>Hi, I&apos;m</span>
                <span className='text-white'> Sadiya </span>
                <motion.span
                  className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text'
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  parvin
                </motion.span>
              </h1>
            </motion.div>

            {/* Role Animator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <Code2 className='text-blue-400' size={24} />
              <div className="h-8 flex items-center min-w-max">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className='text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className='text-lg leading-relaxed max-w-md text-gray-300'
            >
              CS student, who is  passionate about building scalable web applications with MERN Stack and AI/ML. I love transforming ideas into elegant, high-performance digital solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg shadow-blue-500/30 font-semibold text-lg transition-all group"
              >
                Get In Touch
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1Wx4Uxw3Eu1T8nJec35gypls-BapYBn2L/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-gray-600 hover:border-blue-400 hover:bg-blue-500/10'
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              {[
                { icon: GithubIcon, href: 'https://github.com/sksadiya22', label: 'GitHub' },
                { icon: LinkedinIcon, href: 'https://linkedin.com/in/sadiya22', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:parvin_shaik@srmap.edu.in', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className='w-11 h-11 flex items-center justify-center rounded-full border transition-all shadow-lg hover:border-transparent bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white'
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glow Background */}

              {/* Photo Container */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 150 }}
                className='relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-1 shadow-2xl shadow-blue-500/30'
              >
                <div className='aspect-square rounded-3xl overflow-hidden bg-gray-700'>
                  <motion.img
                    src="/photo5.png"
                    alt="Shaik Sadiya Parvin"
                    className="w-full h-full object-cover object-center"
                    style={{ imageRendering: 'high-quality', backfaceVisibility: 'hidden' }}
                    initial={{ scale: 1.2, filter: 'blur(5px)' }}
                    animate={{ scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>

              {/* Floating Elements removed per request - keeping photo clean */}
            </div>
          </motion.div>


        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className='text-sm text-gray-500'>Scroll Down</span>
          <ChevronDown size={32} className='text-gray-500' />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
