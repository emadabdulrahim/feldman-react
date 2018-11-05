import React from 'react'
import { SectionTitle, SectionSuperTitle, Hero } from 'components/typography'
import { Container } from 'components'
import NewsletterForm from 'components/newsletter-form'
import s from './newsletter.module.scss'

export default () => (
  <section className={s.section}>
    <Container>
      <div className={s.section_wrapper}>
        <div>
          <SectionTitle className={s.section_title}>
            Don't miss a thing
          </SectionTitle>
          <p className={s.section_blurp}>
            When engaging in stories you have the opportunity to teach your
            child in a fun and indirect way how to co-operate with diverse
            people.
          </p>
        </div>
        <div className={s.form}>
          <NewsletterForm />
        </div>
      </div>
    </Container>
  </section>
)
