import { motion } from 'framer-motion';
import './Loader.scss';
const Loader = () => {
  return (
    <div className="app__loader">
      <div className="loader__container">
        {Array.from({ length: 3 }, (_, index) => (
          <motion.div
            key={index}
            className="loader__circle"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              borderRadius: ["20%", "50%", "20%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4 // Reduced delay slightly for smoother rhythm
            }}
          />
        ))}
      </div>
      <h2 className="head-text">Initializing <span>Creative</span> area</h2>
    </div>
  )
}

export default Loader;