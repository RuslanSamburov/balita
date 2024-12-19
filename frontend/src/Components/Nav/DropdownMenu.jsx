import React from 'react'

export default function DropdownMenu({ children, ...props }) {
    return (
        <div className="dropdown-menu" {...props}>{children}</div>
    )
}
