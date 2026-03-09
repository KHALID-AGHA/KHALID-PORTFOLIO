import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { client, urlFor } from "../../client";
import AppWrapper from "../../Wrapper/AppWrapper";
import MotionWrap from "../../Wrapper/MotionWrapper";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 50, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item.toLowerCase() === "all") {
        setFilterWork(works);
      } else {
        setFilterWork(
          works.filter((work) =>
            work.category?.toLowerCase() === item.toLowerCase() ||
            work.hosted?.toLowerCase() === item.toLowerCase() ||
            work.tags?.includes(item)
          )
        );
      }
    }, 400);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio </span> Section
      </h2>

      <div className="app__work-filter">
        {["all", "internship", "bootcamp", "freelance", "deployed", "wordPress", "demo", "company"].map((item, index) => (
          <div aria-label="Work filter"
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork
          .map((work, index) => (
            <div className="app__work-item app__flex" key={work._id || index}>
              <div className="app__work-img app__flex">
                <img
                  src={urlFor(work.imgUrl).width(450).format('webp').url()}
                  loading="lazy"
                  alt={`${work.name} project` || "project image"}
                />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} aria-label={`Check out this project : ${work.name}`} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <a href={work.projectLink} target="_blank" rel="noopener noreferrer" aria-label={`Check out this project : ${work.name}`}>
                  <h3 className="bold-text">{work.title}</h3>
                </a>
                <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

                {work.tags?.[0] && (
                  <div className="app__work-tag app__flex">
                    <p className="p-text">{work.tags[0]}</p>
                  </div>
                )}
              </div>
              <div className="app__work-hashtags app__flex" >
                {work.tags?.slice(1, 4).map((tag, idx) => (
                  <p className="p-text" key={idx} >
                    &#35;{tag}
                  </p>
                ))}
              </div>
            </div>
          ))}
      </motion.div >
    </>
  );
};

export default AppWrapper(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);