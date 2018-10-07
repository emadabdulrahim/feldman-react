const express = require('express')
const path = require('path')
const Parser = require('rss-parser')
const request = require('request')

const port = 5000
const app = express()
const parser = new Parser()

// const dev = process.env.NODE_ENV !== 'production'

const LIST_ID = '1152e7d2e3'
const API_KEY = '4d69a7624879770450f163c70c3f3840-us12'
const REGION = 'us12'

app.use(express.static(path.join(__dirname, '/build')))
app.use(express.json())

function mailchimpApi({ path, data }) {
  const ROOT_URI = `https://${REGION}.api.mailchimp.com/3.0`

  return new Promise((resolve, reject) => {
    request.post(
      {
        uri: `${ROOT_URI}${path}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString(
            'base64'
          )}`,
        },
        json: true,
        body: data,
      },
      (error, response, body) => {
        if (error) {
          reject(error)
        } else {
          resolve(body)
        }
      }
    )
  })
}

async function subscribe({ email }) {
  const data = {
    email_address: email,
    status: 'subscribed',
  }

  const path = `/lists/${LIST_ID}/members/`

  const mailchimpResponse = await mailchimpApi({ path, data })

  return mailchimpResponse
}

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

  try {
    const response = await subscribe({ email })

    res.json(JSON.stringify({ response }))
  } catch (error) {
    res.json({ error: error.message || error.toString() })
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app
//   .prepare()
//   .then(() => {
//     server
//
//     // server.get('/book/:id', (req, res) => {
//     //   const actualPage = '/book'
//     //   const queryParams = { title: req.params.id }
//     //   app.render(req, res, actualPage, queryParams)
//     // })
//
//
//
//     server.get('*', (req, res) => handle(req, res))
//
//     server.listen(3000, err => {
//       if (err) throw err
//       console.log('> Ready on http://localhost:3000')
//     })
//   })
//   .catch(ex => {
//     console.error(ex.stack)
//     process.exit(1)
//   })
