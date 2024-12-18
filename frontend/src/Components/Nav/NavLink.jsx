import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({ children, to, active = false, dropdown = false, ...props }) {
    return (
        <Link to={to} className={`nav-link ${active ? 'active' : ''} ${dropdown ? 'dropdown-toggle' : ''}`} {...props}>{children}</Link>
    )
}
