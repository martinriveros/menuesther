const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const fs = require('fs')

let data =fs.readFileSync('./public/archivo.pdf');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send(data))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


