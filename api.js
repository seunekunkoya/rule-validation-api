const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const { verifyJson } = require('./server/helper/json.check')

const Routes = require('./server/routes')

const app = express()
const port = process.env.PORT || 5000

app.set('post', port)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
//app.use(verifyJson)

//verify JSON helps to check if the payload is JSON

app.use('/', verifyJson, Routes)

app.listen(port, () => { console.log(`App running on port ${port}`)})
