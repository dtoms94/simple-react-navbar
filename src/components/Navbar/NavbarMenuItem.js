import styles from './NavbarStyles.module.css'
import React, { Fragment } from 'react'

export default function NavbarMenuItem({
  link,
  title,
  description,
  icon,
  badge,
  asButton
}) {

  const content = (
    <Fragment>
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
    </Fragment>
  )

  return (
    <li className={styles.navbarMenuItem} data-tooltip={title}>
      {
        asButton ?
        <button className={styles.navbarMenuItemLink}>
          {content}
        </button>
        :
        <a href={link} className={styles.navbarMenuItemLink}>
          {content}
        </a>
      }
    </li>
  )
}
