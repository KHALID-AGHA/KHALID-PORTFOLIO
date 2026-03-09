import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { client, urlFor } from '../../client';
import AppWrapper from '../../Wrapper/AppWrapper';
import MotionWrap from '../../Wrapper/MotionWrapper';

import './Numbers.scss';
const Numbers = () => {
    const [experience, setExperience] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experience"]';

        client.fetch(query).then((data) => {
            setExperience(data);
        });

        const queryB = '*[_type == "brands"]';

        client.fetch(queryB).then((data) => {
            setBrands(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">
                <span>Numbers </span> &amp; <span>Brands </span>
            </h2>

            <div className="app__numbers-container">
                <motion.div className="app__numbers-list">
                    {experience.map((ex, index) => (
                        <motion.div
                            key={ex._id || ex.field}
                            whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__numbers-item app__flex"
                        >
                            <div key={ex.number + index} className="app__flex"
                            >
                                <CountUp
                                    start={0} end={ex.number} duration={2} enableScrollSpy={true} scrollSpyOnce={true}>
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} />
                                    )}
                                </CountUp>
                                <span>+</span>
                            </div>
                            <p className="p-text">{ex.unit}</p>
                            <p className="p-text">{ex.field}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className="app__brands app__flex">
                    {brands.map((brand) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            key={brand._id}
                        >
                            <a href={brand.link} target='_blank' aria-label={`Check out ${brand.name}`} rel='noopener noreferrer'>
                                <img src={urlFor(brand.imgUrl).width(200).format('webp').url()}
                                    alt={`${brand.name} logo` || "brand logo"}
                                    loading="lazy" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </>
    )
}

export default AppWrapper(
    MotionWrap(Numbers, 'app__numbers'),
    'numbers',
    'app__primarybg',
);