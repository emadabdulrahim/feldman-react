import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import s from './link.module.scss'

const cx = classNames.bind(s)

const BasicLink = ({ type, children, ...rest }) => {
  const className = cx({
    base: true,
    linkNav: type === 'nav',
  })

  return (
    <Link className={className} {...rest}>
      {children}
    </Link>
  )
}

export default BasicLink
