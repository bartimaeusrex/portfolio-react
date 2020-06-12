import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BookPage from './pages/Book'
import CrowleyPage from './pages/Crowley'
import CarterPage from './pages/Carter'
import HuysmansPage from './pages/Huysmans'
import GoreyPage from './pages/Gorey'
import ErrorPage from './pages/Error'
import MainPage from './pages/Main'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/book" component={BookPage} />
      <Route path="/purplefox" component={CrowleyPage} />
      <Route path="/purplebutterfly" component={CarterPage} />
      <Route path="/yellowbutterfly" component={HuysmansPage} />
      <Route path="/yellowfox" component={GoreyPage} />
      <Route exact path="/" component={MainPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
