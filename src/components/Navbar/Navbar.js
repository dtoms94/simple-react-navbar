import styles from './NavbarStyles.module.css'

import React, { useState, createContext } from 'react'
import NavbarCollapseButton from './NavbarCollapseButton'

export const NavbarContext = createContext()

export default function Navbar({ children, expandedWidth, collapsed, collapsable, compact }) {
  const [open, setOpen] = useState(!collapsed)

  const toggleNavbarOpen = () => {
    setOpen(prev => !prev)
  }

  return (
    <div className={`${styles.navbar} ${((collapsed && !open) || !open) && styles.navbarCollapsed} ${compact && styles.navbarCompact}`} style={expandedWidth && { width: expandedWidth, minWidth: expandedWidth, maxWidth: expandedWidth }}>
      <div className={styles.navbarContainer}>
        {collapsable && <NavbarCollapseButton toggleOpen={toggleNavbarOpen} open={open} />}
        { children }
      </div>
    </div>
  )
}
