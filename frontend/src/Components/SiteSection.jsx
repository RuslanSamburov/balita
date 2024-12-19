import React from 'react'

export default function SiteSection({ children, className = null }) {
    return (
        <section className={`site-section ${className}`}>
            {children}
        </section>
    )
}
