import styles from './NavbarStyles.module.css'

import React from 'react'

export default function NavbarHeader({ shadowed, custom, basicBrand, title, tagline }) {
  if (custom) {
    return (
      <div className={`${styles.navbarHeader} ${shadowed && styles.navbarBottomShadow}`}>
        {custom}
      </div>
    )
  }
  return (
    <div className={`${styles.navbarHeader} ${shadowed && styles.navbarBottomShadow}`}>
      { basicBrand && 
        <p className={styles.navbarHeaderBrand} style={ basicBrand.color && {backgroundColor: basicBrand.color}}>
            {basicBrand.text}
        </p>
      }
      <div className={styles.navbarHeaderTextContainer}>
        <h2 className={styles.navbarHeaderTitle}>
          { title }
        </h2>
        {tagline && <h4 className={styles.navbarHeaderTagline}>
          { tagline }
        </h4>}
      </div>
    </div>
  )
}
