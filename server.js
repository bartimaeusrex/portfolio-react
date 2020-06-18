import express from 'express'
import path from 'path'

import MainPage from './pages/Main'

const app = express()

app.use(express.static('public'))

app.get('/pages/main', MainPage)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(8080, () => {
  console.log('Listening on port 8080...') // eslint-disable-line no-console
})
