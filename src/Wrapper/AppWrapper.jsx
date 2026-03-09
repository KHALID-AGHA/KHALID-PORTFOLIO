import NavigationDots from "../components/NavigationDots"
import SocialMedia from "../components/SocialMedia"


const AppWrapper = (Component, idName, classNames) => function HOC() {
    return (
        <section id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />
            <div className="app__wrapper app__flex">
                <Component />
             </div>
            <NavigationDots active={idName} />
        </section>
    );
};

export default AppWrapper