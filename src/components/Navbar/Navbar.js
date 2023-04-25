import styles from './NavbarStyles.module.css'

import React, { useState, useEffect } from 'react'
import NavbarCollapseButton from './NavbarCollapseButton'

const themeMap = {
  backgroundColor: '--navbar-main-bg-color',
  hoverColor: '--navbar-main-hover-color',
  textColor: '--navbar-main-text-color',
  shadowColor: '--navbar-main-shadow-color',
  defaults: {
    '--navbar-main-bg-color': '#F1F1F1',
    '--navbar-main-hover-color': '#e9e9e9',
    '--navbar-main-text-color': '#7E909A',
    '--navbar-main-shadow-color': '#dddddd'
  }
}

export default function Navbar({ children, expandedWidth, collapsed, collapsible, compact, theme, extraStyles }) {
  const [closed, setClosed] = useState(collapsed)

  const toggleNavbarOpen = () => {
    setClosed(prev => !prev)
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
    setClosed(collapsed)
  }, [collapsed])

  let style = {}
  style = (expandedWidth && !closed ) && {width: expandedWidth, minWidth: expandedWidth, maxWidth: expandedWidth}
  style = { ...style, ...extraStyles }

  return (
    <div className={`${styles.navbar} ${closed && styles.navbarCollapsed} ${compact && styles.navbarCompact}`} style={style}>
      <div className={styles.navbarContainer}>
        {collapsible && <NavbarCollapseButton toggleOpen={toggleNavbarOpen} open={!closed} />}
        { children }
      </div>
    </div>
  )
}
