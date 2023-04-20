import styles from './NavbarStyles.module.css'

import React, { useState } from 'react'

import { IconChevronRight } from '@tabler/icons-react'

export default function NavbarSubMenu({
  children,
  title,
  description,
  icon,
  badge,
  startOpen
}) {

  const [open, setOpen] = useState(startOpen)

  const toggleOpen = () => {
    setOpen(prev => !prev)
  }

  return (
    <li className={`${styles.navbarSubMenu} ${open && styles.navbarSubMenuOpen}`}>
      <button className={styles.navbarSubMenuAccordion} onClick={toggleOpen}>
        <div className={styles.navbarSubMenuAccordionContainer}>
          {icon && React.cloneElement(icon, { size: 25, className: styles.navbarIcon })}
          <div className={styles.navbarLinkTextContainer}>
            <p className={styles.navbarLinkTitle}>
              {title}
            </p>
            { description &&
              <p className={styles.navbarLinkDescription}>
                {description}
              </p>
            }
          </div>
          { badge &&
            <div className={styles.navbarBadge} style={{ backgroundColor: badge.color }}>
              {badge.text}
            </div>
          }
          <IconChevronRight size={25} className={styles.navbarSubMenuAccordionArrow} />
        </div>
      </button>
      <ul className={styles.navbarSubMenuItemsContainer}>
        {children}
      </ul>
    </li>
  )
}
