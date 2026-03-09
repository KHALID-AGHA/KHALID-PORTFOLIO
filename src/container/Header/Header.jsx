import { motion } from "framer-motion";
import { images } from '../../constants';
import AppWrapper from "../../Wrapper/AppWrapper";
import "./Header.scss";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="home" className="app__header app__flex">
      <img
        src={images.bgImg}
        alt="background image for hero section"
        className="app__header-bg"
        fetchpriority="high"
        loading="eager"
      />
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
            <span>
              <img
                src={images.cheerful}
                style={{ objectFit: 'contain' }}
                alt="Cheerful Emoji"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                width="100"
                height="100"
              />
            </span>
            <p className="p-text">Web Developer</p>
            <p className="p-text">Cheerful Programmer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img
          src={images.myImg2}
          loading="eager"
          decoding="async"
          fetchpriority="high"
          alt="Khaled Agha Profile"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle_bg}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.nextjs3, images.node, images.react].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="tech_stack" style={{
              width: '60%',
              height: '60%',
              objectFit: 'contain'
            }}
              loading="eager"
              decoding="async"
              fetchpriority="high" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapper(Header, "home");
