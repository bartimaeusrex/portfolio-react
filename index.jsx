import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import BookPage from './pages/Book'
import BringhurstPage from './pages/Bringhurst'
import CrowleyPage from './pages/Crowley'
import CarterPage from './pages/Carter'
import FfordePage from './pages/Fforde'
import HuysmansPage from './pages/Huysmans'
import GoreyPage from './pages/Gorey'
import MelvillePage from './pages/Melville'
import PeakePage from './pages/Peake'
import TolkienPage from './pages/Tolkien'
import ErrorPage from './pages/Error'
import MainPage from './pages/Main'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/book" component={BookPage} />
      <Route path="/purple-fox" component={CrowleyPage} />
      <Route path="/purple-butterfly" component={CarterPage} />
      <Route path="/purple-goat" component={TolkienPage} />
      <Route path="/yellow-butterfly" component={HuysmansPage} />
      <Route path="/yellow-fox" component={GoreyPage} />
      <Route path="/yellow-goat" component={BringhurstPage} />
      <Route path="/turquoise-butterfly" component={MelvillePage} />
      <Route path="/turquoise-goat" component={FfordePage} />
      <Route path="/turquoise-fox" component={PeakePage} />
      <Redirect from="/-" to="/" />
      <Redirect from="/*-*" to="/" />
      <Route exact path="/" component={MainPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
