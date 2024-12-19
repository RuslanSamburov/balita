import React from 'react'

export default function Container({ children, className = null, }) {
    return (
        <div className={`container ${className}`}>
            {children}
        </div>
    )
}
