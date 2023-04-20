import styles from './NavbarStyles.module.css'

import React from 'react'
import NavbarSection from './NavbarSection'

export default function NavbarContent({ children, scrollable  }) {
  return (
    <div className={styles.navbarContent} style={{ 
      overflow: scrollable ? 'hidden auto' : 'visible',
    }}>
      {children}
    </div>
  )
}
