const httpProxy = require('express-http-proxy')
const express = require('express')
const app = express()
const port = 3005

function selectProxyHost(req) {
  const { path } = req

  if (path.startsWith('/wallet')) {
    return 'http://localhost:3000/'
  } else if (path.startsWith('/income')) {
    return 'http://localhost:3001/'
  }
}

app.use((req, res, next) => {
  httpProxy(selectProxyHost(req))(req, res, next)
})

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}!`)
})
