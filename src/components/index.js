import React from 'react'
import s from './index.module.scss'
import cx from 'classnames'

export const Container = ({ children, className, ...rest }) => (
  <div className={cx(s.section_wrapper, className)} {...rest}>
    {children}
  </div>
)

export const Separator = () => <div className={s.separator} />
