import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">


            {['home', 'about', 'work', 'skills', 'numbers', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                    aria-label={`Maps to ${item}`}
                >
                    {""}
                </a>
            ))}
        </div>
    )
}

export default NavigationDots