import React from 'react'
import s from './newsletter-form.module.scss'
import { TextInputField, Button, toaster } from 'evergreen-ui'
import cx from 'classnames'

// const toasterType = res => {
//   if (res.statusCode === 200) {
//     return {
//       message: 'Success! check your mail.',
//       intent: Intent.SUCCESS,
//     }
//   } else {
//     return {
//       message: res.error || res.title,
//       intent: Intent.WARNING,
//     }
//   }
// }

class NewsletterForm extends React.Component {
  state = { email: '' }

  sendRequest = (path, options = {}) => {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    }

    fetch(path, { method: 'POST', headers: { ...headers }, ...options })
      .then(res => res.json())
      .then(result => {
        let message = ''
        if (result.statusCode === 200) {
          message = 'Success! check your mail.'
        } else {
          message = result.error || result.title
        }
        toaster.notify(message)
        console.log('result: ', result)
      })
      .catch(console.log)
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
      <form className={cx('bp3-dark', s.form)} onSubmit={this.subscribe}>
        <div className={s.input_group}>
          <TextInputField
            className={s.input}
            id="email"
            label="Email"
            onChange={this.handleChange}
            value={this.state.email}
            marginBottom={0}
          />
        </div>
        <Button type="submit" large>
          Subscribe
        </Button>
      </form>
    )
  }
}

export default NewsletterForm
