import React from 'react'
import s from './typography.module.scss'

export const Hero = ({ children, ...rest }) => (
  <h1 className={s.hero}>{children}</h1>
)

export const SectionTitle = ({ children, ...rest }) => (
  <h2 className={s.section_title}>{children}</h2>
)
