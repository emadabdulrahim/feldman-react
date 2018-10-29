import React from 'react'

class Newsletter extends React.Component {
  state = { email: '' }

  sendRequest = (path, options = {}) => {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    }

    fetch(path, { method: 'POST', headers: { ...headers }, ...options })
      .then(res => res.json())
      .then(result => console.log('result: ', result))
  }

  subscribe = async e => {
    e.preventDefault()

    const { email } = this.state

    this.sendRequest('/api/subscribe', {
      body: JSON.stringify({ email }),
    })
  }

  handleChange = e => {
    const { value } = e.target

    this.setState(() => ({
      email: value,
    }))
  }

  render() {
    return (
      <form onSubmit={this.subscribe}>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          placeholder="john@gmail.com"
          type="email"
          required
        />
        <button type="submit">subscribe</button>
      </form>
    )
  }
}

export default Newsletter
