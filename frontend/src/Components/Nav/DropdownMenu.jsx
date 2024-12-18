import React from 'react'

export default function DropdownMenu({ children, ...props }) {
    return (
        <div class="dropdown-menu" {...props}>{children}</div>
    )
}
