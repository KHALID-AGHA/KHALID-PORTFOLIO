import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AppWrapper from "../../Wrapper/AppWrapper";
import MotionWrap from "../../Wrapper/MotionWrapper";
import './AITools.scss';

const AITools = ({ data }) => {
  const [filterTools, setFilterTools] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  //  

  useEffect(() => {
    if (data) {
      setFilterTools(data);
      const uniqueCats = ["all", ...new Set(data.flatMap(tool => tool.category || []))];
      setCategories(uniqueCats);
    }
  }, [data]);

  const handleFilter = (item) => {
    setActiveFilter(item);
    setFilterTools(item === "all" ? data : data.filter(t => t.category?.includes(item)));
    setAnimateCard({ y: 50, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'all') {
        setFilterTools(data);
      } else {
        setFilterTools(data.filter((tool) => tool.category?.includes(item)));
      }
    }, 200)
  };



  return (
    <>
      <h2 className="head-text">
        <span> AI Workflow</span> & <span>Productivity</span>
      </h2>

      <div className="app__ais-filter">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => handleFilter(item)}
            className={`app__ais-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="app__ais-container">
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5 }}
          className="app__ais-list">
          {filterTools.map((tool, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
              transition={{ duration: 0.3 }}
              className="app__ais-item"
              key={tool.name + index}
            >
              <a
                href={tool.link}
                key={tool.name + index} target="_blank"
                aria-label={`Go to ${tool.name} section`}
              >

                <div>
                  <p className="p-text p-link">{tool.name}</p>
                  <span className="p-text">{tool.useCase}</span>
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--secondary-color)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(MotionWrap(AITools, 'app__ais'), 'aitools', 'app__whitebg');
