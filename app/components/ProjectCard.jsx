import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const ProjectCard = ({
  index,
  title,
  description,
  bgImage,
  tags,
  projectLink,
  viewCode,
  textColor = "#f59e0b",
}) => {
  const isReverse = index % 2 !== 0;

  return (
    <div className="relative w-full py-6 md:py-16">
      
      {/* VERTICAL LINE  */}
      <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/5 rounded-full" />

      {/* CARD WRAPPER */}
      <div
        className={`relative w-full flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-16
        ${isReverse ? "md:flex-row-reverse" : ""}`} 
      >
        
        {/* CENTER DOT & CONNECTOR ANIMATION */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
          
          <div className="absolute w-14 h-14 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: textColor }} />
          
          <motion.span 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative block w-3.5 h-3.5 rounded-full border border-black/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20" 
            style={{ backgroundColor: textColor, boxShadow: `0 0 20px ${textColor}` }} 
          />
          
          {/* Connector Line Growing Animation */}
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "200px" }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className={`absolute h-0.5 z-0 ${isReverse ? "right-1/2 origin-right" : "left-1/2 origin-left"}`} 
             style={{ background: `${textColor}` }} 
          />
        </div>

        {/* TEXT SECTION ANIMATION */}
        <motion.div 
          initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-[42%] px-4 md:px-6 text-center md:text-left z-10"
        >
          
          <h2
            className="font-Ovo font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 transition-colors duration-300"
            style={{ color: textColor }}
          >
            {title}
          </h2>

          <p className="text-gray-400 font-Ovo leading-relaxed text-sm sm:text-base mb-4 sm:mb-6 max-w-lg mx-auto md:mx-0">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5 sm:mb-6">
            {tags?.map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs font-medium border border-white/10 rounded-full bg-white/5 text-gray-300">
                #{tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex justify-center md:justify-start gap-5">
            <motion.a 
               whileHover={{ scale: 1.05 }}
               href={projectLink} target="_blank" className="flex items-center gap-2 px-5 py-3 rounded-2xl text-white text-sm font-medium hover:opacity-80 transition-transform" style={{ backgroundColor: textColor }}>
              Live Demo <Image src={assets.send_icon} alt="" className="w-3.5 invert" />
            </motion.a>
            <motion.a 
               whileHover={{ scale: 1.05 }}
               href={viewCode} target="_blank" className="flex items-center gap-2 px-5 py-3 rounded-2xl text-white text-sm font-medium hover:opacity-80 transition-transform" style={{ backgroundColor: textColor }}>
              Code <Image src={assets.code_icon_dark} alt="" className="w-3.5" />
            </motion.a>
          </div>
        </motion.div>

        {/* IMAGE SECTION ANIMATION */}
        <motion.div 
            initial={{ opacity: 0, x: isReverse ? -50 : 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-[42%] flex justify-center px-4 md:px-0"
        >
            <div className="relative group w-full max-w-[320px] sm:max-w-100"> 
                
                {/* Image Glow */}
                <div 
                    className="absolute -inset-1.5 rounded-xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundColor: textColor }}
                ></div>

                {/* Image Container */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl z-50">
                    <Image
                        src={bgImage}
                        alt={title}
                        fill
                        priority={index === 0}
                        className="object-cover opacity-80 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
                    />
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectCard;