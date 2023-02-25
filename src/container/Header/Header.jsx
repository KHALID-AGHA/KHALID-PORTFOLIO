import React from 'react'
import './Header.scss'
import { motion } from "framer-motion";
// import myImg from '../../assets/me.jpeg'
import myImg from '../../assets/me.png'
import circle_bg from '../../assets/circle.svg'
import node from "../../assets/node.png";
import nextjs3 from "../../assets/nextjs3.png";
import react from "../../assets/react.png";
import AppWrapper from '../../Wrapper/AppWrapper';

const Header = () => {

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div id='home' className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">

          <div className="badge-cmp app__flex">
            <span>🤓</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hey, I am</p>
              <h1 className="head-text">KHALED</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <h1 className="p-text">Cheerful Programmer</h1>
          </div>

        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={myImg} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={circle_bg}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[nextjs3, node, react].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrapper(Header, 'home')