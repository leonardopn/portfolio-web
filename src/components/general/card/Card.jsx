import React from 'react';
import { useSpring, animated } from 'react-spring'
import "./card.css"

export default props => {
    const estilo = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 200 }});

    return(
        <animated.div style={estilo} className="cardDefault" id={props.id}>
            {props.children}
        </animated.div>
    )
}