import React from 'react'

export default function Navbar({ children, classes }) {
    return (
        <ul class={"navbar-nav " + classes.join(' ')}>
            {children}
        </ul>
    )
}
