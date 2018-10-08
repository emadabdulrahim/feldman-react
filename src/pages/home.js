import React from 'react'
import { AppContext } from 'app'

export default () => (
  <AppContext.Consumer>
    {state => (
      <div>
        {console.log('state: ', state)}
        Home Page
      </div>
    )}
  </AppContext.Consumer>
)
