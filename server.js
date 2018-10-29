require('dotenv').config()
const express = require('express')
const path = require('path')
const Parser = require('rss-parser')
var Mailchimp = require('mailchimp-api-v3')

const LIST_ID = process.env.REACT_APP_LIST_ID
const API_KEY = process.env.REACT_APP_API_KEY

var mailchimp = new Mailchimp(API_KEY)

const port = 5000
const app = express()
const parser = new Parser()

// const dev = process.env.NODE_ENV !== 'production'

app.use(express.static(path.join(__dirname, '/build')))
app.use(express.json())

app.get('/api/blog', (req, res) => {
  ;(async () => {
    const feed = await parser.parseURL(
      'https://www.psychologytoday.com/blog/supersurvivors/feed'
    )
    res.send(JSON.stringify(feed))
  })()
})

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body

  if (!email || email === '') {
    res.json({ error: 'Email is required' })
    return
  }

  mailchimp
    .post(`/lists/${LIST_ID}/members`, {
      email_address: email,
      status: 'subscribed',
    })
    .then(results => res.json(results))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
