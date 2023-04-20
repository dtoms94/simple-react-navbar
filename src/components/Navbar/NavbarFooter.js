import styles from './NavbarStyles.module.css'

import React from 'react'

export default function NavbarFooter({ children, shadowed }) {
  return (
    <div className={`${shadowed && styles.navbarTopShadow}`}>
      {children}
    </div>
  )
}
