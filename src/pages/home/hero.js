import React from 'react'
import styles from './hero.module.scss'
import cx from 'classnames'

export default () => (
  <section className={cx(styles.section, styles.wrapper)}>
    <div className={styles.wrapper}>
      <div className={styles.profile_wrapper}>
        <h4 className={styles.name}>David B. Feldman PhD</h4>
      </div>
    </div>
  </section>
)
