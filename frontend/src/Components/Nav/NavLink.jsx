import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavLink({ children, ...props }) {
    const isActive = useLocation().pathname == props.to;

    return (
        <Link className={`nav-link ${isActive ? 'active' : ''}`} {...props}>{children}</Link>
    )
}
