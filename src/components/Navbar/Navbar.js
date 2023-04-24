import styles from './NavbarStyles.module.css'

import React, { useState, useEffect } from 'react'
import NavbarCollapseButton from './NavbarCollapseButton'

const themeMap = {
  backgroundColor: '--navbar-main-bg-color',
  hoverColor: '--navbar-main-hover-color',
  textColor: '--navbar-main-text-color',
  defaults: {
    '--navbar-main-bg-color': '#F1F1F1',
    '--navbar-main-hover-color': '#e9e9e9',
    '--navbar-main-text-color': '#7E909A',
  }
}

export default function Navbar({ children, expandedWidth, collapsed, collapsible, compact, theme }) {
  const [open, setOpen] = useState(!collapsed)

  const toggleNavbarOpen = () => {
    setOpen(prev => !prev)
  }

  useEffect(() => {
    Object.keys(themeMap.defaults).forEach(key => {
      document.documentElement.style.setProperty(key, themeMap.defaults[key]);
    })
    if(theme) {
      Object.keys(theme).forEach(key => {
        if (themeMap[key]) {
          document.documentElement.style.setProperty(themeMap[key], theme[key]);
        }
      })
    }
  }, [theme])

  useEffect(() => {
    setOpen(collapsed)
  }, [collapsed])

  return (
    <div className={`${styles.navbar} ${((collapsed && !open) || !open) && styles.navbarCollapsed} ${compact && styles.navbarCompact}`} style={expandedWidth && { width: expandedWidth, minWidth: expandedWidth, maxWidth: expandedWidth }}>
      <div className={styles.navbarContainer}>
        {collapsible && <NavbarCollapseButton toggleOpen={toggleNavbarOpen} open={open} />}
        { children }
      </div>
    </div>
  )
}
