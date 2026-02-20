import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      id='about'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-6 sm:px-10 md:px-[12%] py-20 bg-[#030712] text-white overflow-x-hidden relative'
    >

      {/* Background Glows */}
      <div className="absolute bottom-30 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mb-16'
        >
          <h4 className='text-amber-500 text-lg font-Ovo mb-2 tracking-widest uppercase'>Introduction</h4>
          <h2 className='text-4xl md:text-5xl font-bold font-Ovo bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent'>
            About Me
          </h2>
        </motion.div>

        <div className='flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20 my-10'>

          {/* Left Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='relative group w-64 sm:w-80 lg:w-[30%]'
          >
            <div className='absolute inset-0 bg-amber-500/20 blur-3xl rounded-full'></div>
            <div className='relative w-full rounded-3xl overflow-hidden border-2 border-white/10'>
              <Image src={assets.user_image} alt='user' className='w-full h-auto' />
            </div>
            <div className='absolute -bottom-4 -right-4 w-full h-full border-2 border-amber-500/30 rounded-3xl -z-10'></div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex-1 w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='mb-10 w-full text-gray-400 leading-relaxed text-base md:text-lg text-center md:text-left'
            >
              I am a dedicated <span className='text-white font-medium'>Frontend Developer</span> with a strong foundation in building modern, responsive web applications. With a deep focus on <span className='text-amber-400'>React.js and Tailwind CSS</span>, I transform creative concepts into seamless digital experiences. I am eager to leverage my skills in a professional environment, contributing to innovative projects and organizational growth.
            </motion.p>

            {/* Info Cards List */}
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 w-full'>
              {infoList.map(({ iconDark, title, description }, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}

                  className='rounded-2xl p-6 transition-all duration-300 group cursor-pointer border 
                               bg-white/10 border-amber-500/50 
                               lg:bg-white/5 lg:border-white/10 
                               lg:hover:bg-white/10 lg:hover:border-amber-500/50'
                >
                  <div className='w-12 h-12 flex items-center justify-center rounded-lg mb-4 
                                    bg-amber-500 
                                    lg:bg-amber-500/10 lg:group-hover:bg-amber-500 transition-colors duration-300'>
                    <Image src={iconDark} alt={title} className='w-6 
                                    invert-0 
                                    lg:invert lg:group-hover:invert-0 transition-all duration-300' />
                  </div>
                  <h3 className='mb-2 font-bold text-white text-lg'>{title}</h3>
                  <p className='text-gray-400 text-sm leading-relaxed'>{description}</p>
                </motion.li>
              ))}
            </ul>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='mt-12 text-center md:text-left'
            >
              <h4 className='mb-6 text-gray-400 uppercase tracking-widest text-xs font-semibold'>Tools I excel in</h4>

              <ul className='flex flex-wrap justify-center md:justify-start items-center gap-4'>
                {toolsData.map((tool, index) => (
                  <motion.li
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}

                    className='flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl cursor-pointer border 
                                 border-amber-500/50 bg-white/10 
                                 lg:bg-white/5 lg:border-white/10 lg:hover:bg-white/10 lg:hover:border-amber-500/50 transition-all duration-300'
                  >
                    <Image src={tool} alt='Tool' className='w-6 md:w-7 
                                 opacity-100 
                                 lg:opacity-70 lg:hover:opacity-100 transition-opacity duration-300' />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About