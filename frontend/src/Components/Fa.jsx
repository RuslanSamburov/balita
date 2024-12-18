import React from 'react'

export default function Fa({ name, classes = [] }) {
    return (
        <span 
            className={`${classes.join(' ')} fa fa-${name}`} 
        ></span>
    );
}
