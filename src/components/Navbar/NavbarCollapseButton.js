import styles from './NavbarStyles.module.css'

import React from 'react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'

export default function NavbarCollapseButton({ toggleOpen, open }) {
  return (
    <button 
      className={styles.navbarCollapseButton}
      onClick={toggleOpen}
    >
      {open ? <IconArrowLeft size={20} /> : <IconArrowRight size={20} />}
    </button>
  )
}
