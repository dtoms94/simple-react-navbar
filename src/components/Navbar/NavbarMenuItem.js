import styles from './NavbarStyles.module.css'
import React, { Fragment } from 'react'

export default function NavbarMenuItem({
  link,
  title,
  description,
  icon,
  badge,
  disabled,
  asButton,
  onClick
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
    <li className={`${styles.navbarMenuItem} ${disabled && styles.navbarMenuItemDisabled}`} data-tooltip={title}>
      {
        asButton ?
        <button className={styles.navbarMenuItemLink} onClick={!disabled && onClick} disabled={disabled}>
          {content}
        </button>
        :
        <a href={!disabled && link} className={styles.navbarMenuItemLink} disabled={disabled}>
          {content}
        </a>
      }
    </li>
  )
}
