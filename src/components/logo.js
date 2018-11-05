import React from 'react'
import { Link } from 'react-router-dom'
import s from './logo.module.scss'

const Logo = ({ theme }) => (
  <Link to="/" className={s.link}>
    <div className={s.container}>
      <span className={s.text}>DF</span>
    </div>
  </Link>
)

export default Logo
