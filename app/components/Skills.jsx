import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { skillData } from '@/assets/skillData'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <motion.div 
      id='skills' 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-6 md:px-[12%] py-20 bg-[#030712] text-white relative overflow-hidden'
    >

      {/* --- Background Glows --- */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* --- Main Content --- */}
      <div className="relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mb-16'
        >
          <h4 className='text-amber-500 text-lg font-Ovo mb-2 tracking-widest uppercase'>
            My Expertise
          </h4>
          <h2 className='text-4xl md:text-5xl font-bold font-Ovo bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent'>
            Technical Skills
          </h2>
          <p className='text-center max-w-2xl mx-auto mt-5 text-gray-400 leading-relaxed font-Ovo'>
            I specialize in building responsive, high-performance web applications using the latest modern technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8'>
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              
              className='group flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 h-full border shadow-lg
                         bg-white/10 border-amber-500/50 shadow-amber-500/10
                         lg:bg-white/5 lg:border-white/10 lg:shadow-none
                         lg:hover:bg-white/10 lg:hover:border-amber-500/50 lg:hover:-translate-y-2 lg:hover:shadow-amber-500/10'
            >
              {/* Top Section */}
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 flex items-center justify-center bg-black/50 rounded-xl border transition-colors
                                border-amber-500/30
                                lg:border-white/5 lg:group-hover:border-amber-500/30'>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    className='w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110'
                  />
                </div>
                <div>
                  <h3 className='font-Ovo font-medium transition-colors text-lg
                                 text-white
                                 lg:text-gray-200 lg:group-hover:text-white'>
                    {skill.name}
                  </h3>
                </div>
              </div>

              {/* Progress Bar Section */}
              <div className='w-full'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-xs text-gray-400 font-medium'>Proficiency</span>
                  <span className='text-xs text-amber-500 font-bold'>{skill.level}%</span>
                </div>

                {/* Bar Container */}
                <div className='w-full h-2 bg-white/10 rounded-full overflow-hidden'>
                  {/* Animated Fill Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }} 
                    className='h-full bg-linear-to-r from-amber-400 to-orange-600 rounded-full group-hover:shadow-[0_0_10px_#f59e0b]'
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  )
}

export default Skills