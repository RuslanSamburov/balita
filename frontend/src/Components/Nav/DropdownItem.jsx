import React from 'react'
import { Link } from 'react-router-dom'

export default function DropdownItem({ children, to, ...props }) {
    return (
        <Link to={to} class="dropdown-item" {...props}>{children}</Link>
    )
}
