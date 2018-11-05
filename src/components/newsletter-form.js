import React from 'react'
import {
  Label,
  InputGroup,
  Button,
  Position,
  Toaster,
  Intent,
} from '@blueprintjs/core'
import s from './newsletter-form.module.scss'
import cx from 'classnames'
import { INTENT_SUCCESS } from '@blueprintjs/core/lib/esm/common/classes'

const toasterType = res => {
  if (res.statusCode === 200) {
    return {
      message: 'Success! check your mail.',
      intent: Intent.SUCCESS,
    }
  } else {
    return {
      message: res.error || res.title,
      intent: Intent.WARNING,
    }
  }
}

class NewsletterForm extends React.Component {
  state = { email: '' }

  sendRequest = (path, options = {}) => {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    }

    fetch(path, { method: 'POST', headers: { ...headers }, ...options })
      .then(res => res.json())
      .then(result => {
        Toaster.create({
          position: Position.TOP,
        }).show({
          ...toasterType(result),
          className: s.toaster,
          timeout: 3000,
        })
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
          <Label htmlFor="email" className={s.label}>
            Email
          </Label>
          <InputGroup
            id="email"
            onChange={this.handleChange}
            leftIcon="envelope"
            large
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
