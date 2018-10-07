import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import GlobalStyle from 'styles/global'
import Home from 'pages/home'

class App extends Component {
  componentDidMount() {
    fetch('/api/blog')
      .then(res => res.json())
      .then(result => {
        console.log('result', result)
      })
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <GlobalStyle />
          <Route path="/" component={Home} />
        </main>
      </BrowserRouter>
    )
  }
}

export default App
