import React from 'react'

export default function NavItem({ children, dropdown=false }) {
    return (
        <li className={`nav-item ${dropdown ? 'dropdown' : ''}`}>
            {children}
        </li>
    )
}
