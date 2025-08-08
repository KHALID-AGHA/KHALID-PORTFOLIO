import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import AppWrapper from "../../Wrapper/AppWrapper";
import MotionWrap from "../../Wrapper/MotionWrapper";
import "./Skills.scss";

const Skills = () => {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    try {
      const query = '*[_type=="skills"]';
      const data = await client.fetch(query);
      await data.sort(() => Math.random() * 100 - 50);
      await setSkill(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="head-text">
        <span>Skills </span> &amp; <span>Experience </span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skill.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name + index}
            >
              <div className="app__flex">
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
