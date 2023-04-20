import styles from './NavbarStyles.module.css'

import React from 'react'

export default function NavbarSection({ children, title}) {
  return (
    <div className={styles.navbarSection}>
      { title && <h4 className={styles.navbarSectionTitle}>{title}</h4> }
      <ul className={styles.navbarMenuItemList}>
        {children}
      </ul>
    </div>
  )
}
