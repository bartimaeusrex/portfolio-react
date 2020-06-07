import React from 'react'
import { render } from 'react-dom'

import Quote from './components/Quote'
import Header from './components/Header'
import Page from './components/Page'
import Row from './components/Row'
import Column from './components/Column'
import Navigation from './components/Navigation'

render(
  <Page>
    <Header />
    <Navigation />
    <Row>
      <Column>
        I am currently developing <a href="https://curiouser.house/">Curiouser House Publishing</a> in my spare time, redesigning and republishing classic literature in uniform editions.

        Throughout my time I have helped develop and design websites for: a Thai restaurant, an Americana band, a Waldorf school, TenorGuitar.com, a startup company that designed interactive children’s book apps, a costume and vintage clothing shop, and Tom The Book Guy, where I worked for nearly seven years.
      </Column>
      <Column>
      I am currently developing <a href="https://curiouser.house/">Curiouser House Publishing</a> in my spare time, redesigning and republishing classic literature in uniform editions.

Throughout my time I have helped develop and design websites for: a Thai restaurant, an Americana band, a Waldorf school, TenorGuitar.com, a startup company that designed interactive children’s book apps, a costume and vintage clothing shop, and Tom The Book Guy, where I worked for nearly seven years.
      </Column>
      </Row>
  </Page>,
  document.getElementById('root'),
)
