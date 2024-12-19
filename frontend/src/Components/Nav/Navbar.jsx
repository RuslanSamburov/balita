import React from 'react'

export default function Navbar({ children, className = null }) {
    return (
        <ul className={"navbar-nav " + className}>
            {children}
        </ul>
    )
}
