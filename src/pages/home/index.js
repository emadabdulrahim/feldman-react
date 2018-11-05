import React from 'react'
import Hero from './hero'
import Blog from './blog'
import Newsletter from './newsletter'
import Books from './books'

const googleSheet = window.Tabletop

export default () => {
  googleSheet.init({
    key:
      'https://docs.google.com/spreadsheets/d/1mj72cR05-VrG6mL8jqBPUwXmjNTdLDJO94NzvdcLU94/edit?usp=sharing',
    callback: showInfo,
    simpleSheet: true,
  })

  function showInfo(data) {
    console.log('sheet data: ', data)
  }

  return (
    <div>
      <Hero />
      <Blog />
      <Newsletter />
      <Books />
    </div>
  )
}
