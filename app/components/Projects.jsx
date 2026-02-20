import { workData } from '@/assets/pojects'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const Projects = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id='project'
            className='w-full px-[4%] lg:px-[12%] py-10 scroll-mt-20 overflow-hidden bg-[#030712] relative'
        >
            {/* --- Background Glows */}
            <div className="absolute top-20 right-20 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-20 left-20 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-125 left-20 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-125 right-20 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* --- Main Content */}
            <div className="relative z-10">
                <motion.h4
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-center text-amber-500 text-lg font-Ovo mb-2 tracking-widest uppercase'
                >
                    My Portfolio
                </motion.h4>
                
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='text-center text-5xl font-Ovo font-bold text-white'
                >
                    My Latest Work
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-400 leading-relaxed'
                >
                    Explore a collection of projects showcasing my expertise in front-end development using React, Tailwind, and Modern UI principles.
                </motion.p>

                {/* Projects Container */}
                <div className='w-full'>
                    {workData.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            index={index}
                            bgImage={project.bgImage}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            projectLink={project.projectLink}
                            viewCode={project.viewCode}
                            textColor={project.textColor}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Projects;