import React from 'react'

export default function Fa({ name, className = null }) {
    return (
        <span 
            className={`${className} fa fa-${name}`} 
        ></span>
    );
}
