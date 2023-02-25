import { motion } from "framer-motion";
import './About.scss'
import { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import AppWrapper from "../../Wrapper/AppWrapper";
import MotionWrap from "../../Wrapper/MotionWrapper";

const About = () => {

  const [about, setAbout] = useState([])

  useEffect(() => {
    const query = '*[_type=="abouts"]'
    client.fetch(query)
      .then((data) => setAbout(data))
  }, [])

  return (
    <>
      <h2 className="head-text">
        I Know That<span> Good Apps </span> <br />Means<span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {

          about.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />

              <h2 className="bold-text" style={{ marginTop: 20, }}>
                {about.title}
              </h2>

              <p className="p-text" style={{ marginTop: 20, }}>
                {about.description}
              </p>

            </motion.div>
          ))}
      </div>

    </>
  )
}


export default AppWrapper(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);