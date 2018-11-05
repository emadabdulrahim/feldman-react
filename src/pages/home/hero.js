import React from 'react'
import { SectionTitle, Hero } from 'components/typography'
import { Container } from 'components'
import avatar from 'static/profile.jpg'
import s from './hero.module.scss'

export default () => (
  <section className={s.section}>
    <Container>
      <div className={s.profile_wrapper}>
        <figure className={s.avatar}>
          <img src={avatar} alt="headshot" />
        </figure>
        <div className={s.profile_content}>
          <h4 className={s.name}>David B. Feldman PhD</h4>
          <Hero className={s.title}>
            Author, <br /> Speaker, <br /> Professor
          </Hero>
          <p className={s.intro_blurb}>
            David B. Feldman, PhD is a professor, author, speaker, and host of
            the Psychology in 10 Minutes podcast. Chair of the Department of
            Counseling Psychology at Santa Clara University, Dr. Feldman has
            published three books, lectured for organizations around the world,
            appeared on national television and radio, and writes regularly for
            Psychology Today. His research on how people maintain hope and
            meaning in the face or trauma, loss, and setbacks has been published
            in top academic journals.
          </p>
        </div>
      </div>
    </Container>
  </section>
)
