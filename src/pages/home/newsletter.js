import React from 'react'
import { SectionTitle, SectionSuperTitle, Hero } from 'components/typography'
import { SectionWrapper } from 'components'
import NewsletterForm from 'components/newsletter-form'
import s from './newsletter.module.scss'

export default () => (
  <section className={s.section}>
    <SectionWrapper className={s.section_wrapper}>
      <SectionTitle className={s.section_title}>Stay in the know</SectionTitle>
      <p className={s.section_blurp}>
        When engaging in stories you have the opportunity to teach your child in
        a fun and indirect way how to co-operate with diverse people.
      </p>
      <NewsletterForm />
    </SectionWrapper>
  </section>
)
