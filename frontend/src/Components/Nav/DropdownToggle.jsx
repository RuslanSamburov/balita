import React from 'react'

export default function DropdownToggle({ children, ...props }) {
    return (
        <p className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" {...props}>{children}</p>
    )
}
