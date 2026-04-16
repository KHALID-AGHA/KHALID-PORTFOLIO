import { motion } from 'framer-motion';

const MotionWrap = (Component, classNames) => function HOC(props ) {
    return (
        <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`${classNames} app__flex`}
        >
            <Component {...props} />
        </motion.div>
    );
};

export default MotionWrap;
