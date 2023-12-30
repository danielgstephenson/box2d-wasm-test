import express from 'express'
import path from 'path'
import http from 'http'
import { version } from '../shared/constants'

console.log(version)

const app = express()
const staticPath = path.join(__dirname, '..','..','public')
const staticMiddleware = express.static(staticPath)
app.use(staticMiddleware)

const server = new http.Server(app)
server.listen(3000,() => {
  console.log('Listening...')
})


