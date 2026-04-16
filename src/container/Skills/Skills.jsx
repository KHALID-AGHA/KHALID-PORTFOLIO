import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { urlFor } from "../../client";
import AppWrapper from "../../Wrapper/AppWrapper";
import MotionWrap from "../../Wrapper/MotionWrapper";
import "./Skills.scss";

const Skills = ({ data }) => {
  const [filterSkills, setFilterSkills] = useState([])
  const [activeFilter, setActiveFilter] = useState("all");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  useEffect(() => {
    if (data && data.length > 0) {
      const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
      setFilterSkills(sortedData);
    }
  }, [data]); // Only runs when data prop changes

  const handleSkillsFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 50, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'all') {
        setFilterSkills(data);
      } else {
        setFilterSkills(data.filter((skill) => skill.tags?.includes(item)));
      }
    }, 200);
  }
  return (
    <>
      <h2 className="head-text">
        <span>Skills </span> &amp; <span>Experience </span>
      </h2>
      <div className="app__skills-filter">
        {["all",
          "core",
          "frontend",
          "backend",
          "frameworks",
          "libraries",
          "architecture",
          "database",
          "cloud-services",
          "styling",
          "design-systems",
          "development-tools",
          "environment",
          "project-management",
          "version-control"]
          .map((item, index) => (
            <div aria-label="Skills filter"
              onClick={() => handleSkillsFilter(item)}
              className={`app__skills-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
              key={index}>{item.replace('-', ' ')}</div>
          )
          )}
      </div>
      <div className="app__skills-container">
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5 }}
          className="app__skills-list">
          {filterSkills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
              transition={{ duration: 0.3 }}
              className="app__skills-item app__flex"
              key={skill.name + index}

            >
              <div className="app__flex">
                <img src={urlFor(skill.icon).fit('crop').auto('format').url()}
                  alt={`${skill.name} icon` || "skill icon"}
                  loading="lazy"
                // style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');

