import React from 'react'
import { Link } from 'react-router-dom'

export default function DropdownItem({ children, ...props }) {
    return (
        <Link className="dropdown-item" {...props}>{children}</Link>
    )
}
