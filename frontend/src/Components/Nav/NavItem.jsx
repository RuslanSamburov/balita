import React from 'react'

export default function NavItem({ dropdown=false, children }) {
    return (
        <li class={`nav-item ${dropdown ? 'dropdown' : ''}`}>
            {children}
        </li>
    )
}
