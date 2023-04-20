import styles from './NavbarStyles.module.css'
import React from 'react'

export default function NavbarMenuItem({
  link,
  title,
  description,
  icon,
  badge
}) {
  return (
    <li className={styles.navbarMenuItem} data-tooltip={title}>
      <a href={link} className={styles.navbarMenuItemLink}>
        <div className={styles.navbarLinkContainer}>
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
        </div>
      </a>
    </li>
  )
}
