const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/nongao', function (req, res,) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(3001,console.log('CORS-enabled web server listening on port 3001'))