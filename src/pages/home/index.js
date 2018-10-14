import React from 'react'
import { AppContext } from 'app'
import Hero from './hero'

export default () => (
  <AppContext.Consumer>
    {state => (
      <div>
        {console.log('state: ', state)}
        <Hero />
      </div>
    )}
  </AppContext.Consumer>
)
