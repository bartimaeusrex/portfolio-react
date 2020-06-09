import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BookPage from './pages/Book'
import ErrorPage from './pages/Error'
import MainPage from './pages/Main'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/book" component={BookPage} />
      <Route exact path="/" component={MainPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
