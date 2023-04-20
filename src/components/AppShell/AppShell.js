import styles from './AppShellStyles.module.css'

import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function AppShell({ children, navbar }) {
  return (
    <div className={styles.appShell}>
      { navbar }
      <div className={styles.appContent}>
        {children}
      </div>
    </div>
  )
}
