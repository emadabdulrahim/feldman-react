import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from 'pages/home'
import schema from './schema'
import About from 'pages/about'
import SiteHeader from 'components/site-header'

export const AppContext = React.createContext()

class App extends Component {
  state = { feed: [], isFetching: false }

  componentDidMount() {
    if (this.state.feed.length > 0) {
      return
    }

    this.fetchBlogFeed()
  }

  fetchBlogFeed = () => {
    this.setState(state => ({
      ...state,
      isFetching: true,
    }))

    fetch('/api/blog')
      .then(res => res.json())
      .then(result => {
        console.log('result', result)
        this.setState(state => ({
          ...state,
          feed: schema(result),
          isFetching: false,
        }))
      })
  }

  render() {
    return (
      <BrowserRouter>
        <AppContext.Provider value={this.state}>
          <SiteHeader />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
