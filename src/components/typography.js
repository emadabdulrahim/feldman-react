import React from 'react'
import cx from 'classnames'
import s from './typography.module.scss'

export const Hero = ({ children, className, ...rest }) => (
  <h1 className={cx(s.hero, className)} {...rest}>
    {children}
  </h1>
)

export const SectionTitle = ({ children, className, ...rest }) => (
  <h2 className={cx(s.section_title, className)}>{children}</h2>
)

export const SectionSuperTitle = ({ children, className, ...rest }) => (
  <h3 className={cx(s.section_super_title, className)}>{children}</h3>
)
