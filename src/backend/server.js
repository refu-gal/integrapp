import express from 'express'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import path from 'path'
import request from 'request'
import config from '../../webpack.config.dev'

const port = 3000
const app = express()
const compiler = webpack(config)

request.debug = true

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))
app.use(bodyParser.json())

app.post('/api/refugees', (req, res) => {
})

app.get('*', (req, res) => {
    res.sendFile(path.join( __dirname, '../index.html'))
})

app.listen(port, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('App listening on port', port)
    }
})
