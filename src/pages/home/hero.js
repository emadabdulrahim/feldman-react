import React from 'react'
import s from './hero.module.scss'
import { SectionTitle, Hero } from 'components/typography'
import avatar from 'static/profile.jpg'
import cx from 'classnames'

export default () => (
  <section className={s.section}>
    <div className={s.wrapper}>
      <div className={s.profile_wrapper}>
        <figure className={s.avatar}>
          <img src={avatar} alt="headshot" />
        </figure>
        <div className={s.profile_content}>
          <h4 className={s.name}>— David B. Feldman PhD</h4>
          <Hero>Author,</Hero>
          <Hero>Spaker,</Hero>
          <Hero>Professor</Hero>
        </div>
      </div>
    </div>
  </section>
)
