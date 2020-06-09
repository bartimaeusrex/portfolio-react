import express from 'express'
import path from 'path'
// import { getAllManufacturers, getManufacturerById } from './controllers/manufacturers'
// import { getAllProducts, getProductsById } from './controllers/products'
import MainPage from './pages/Main'

const app = express()

app.use(express.static('public'))

app.get('/pages/main', MainPage)

// app.get('/api/manufacturers/:id', getManufacturerById)

// app.get('/api/products', getAllProducts)

// app.get('/api/products/:id', getProductsById)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(8080, () => {
  console.log('Listening on port 8080...') // eslint-disable-line no-console
})
