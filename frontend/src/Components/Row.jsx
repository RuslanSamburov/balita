import React from 'react'

export default function Row({ children, className = null }) {
    return (
        <div className={`row ${className}`}>
            {children}
        </div>
    )
}
