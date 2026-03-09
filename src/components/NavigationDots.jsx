
const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">


            {['home', 'about', 'work', 'skills', 'numbers', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                    aria-label={`Go to ${item} section`}
                >
                </a>
            ))}
        </div>
    )
}

export default NavigationDots