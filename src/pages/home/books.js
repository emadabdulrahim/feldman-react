import React from 'react'
import { map } from 'lodash'
import { SectionTitle } from 'components/typography'
import { Container } from 'components'
import text from 'content/books'
import { ReactComponent as BookCover1 } from 'static/supersurvivors-bookcover.svg'
import { ReactComponent as BookCover2 } from 'static/end-of-life-bookcover.svg'
import { ReactComponent as BookCover3 } from 'static/public-speaking-bookcover.svg'
import s from './books.module.scss'

const bookCover = slug => {
  switch (slug) {
    case 'supersurvivors':
      return <BookCover1 />
    case 'end-of-life-handbook':
      return <BookCover2 />

    case 'public-speaking-for-psychologists':
      return <BookCover3 />

    default:
      break
  }
}

const Book = ({
  title,
  subtitle,
  slug,
  short_description,
  image,
  cover,
  link,
}) => (
  <li className={s.book_wrapper}>
    <figure className={s.book_cover}>{bookCover(slug)}</figure>
    <h4>{title}</h4>
  </li>
)

export default () => (
  <section className={s.section}>
    <Container>
      <div className={s.heading_container}>
        <SectionTitle className={s.decorated_heading}>
          <span className={s.heading}>Published Books</span>
        </SectionTitle>
        <p className={s.section_blurb}>
          We all yearn to know more about ourselves and better understand the
          thoughts, feelings, and behaviors of the people we care about.
        </p>
      </div>
      <div className={s.books_wrapper}>
        <ul className={s.books_list}>
          {map(text, book => (
            <Book {...book} key={book.title} />
          ))}
        </ul>
      </div>
    </Container>
  </section>
)
