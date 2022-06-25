const path = require('path')
const express = require('express')
const app = express()
const port = 3355

app.use(express.static('public'))

app.listen(port,() => {
  console.log(`Server is running on port ${port}`)
});
