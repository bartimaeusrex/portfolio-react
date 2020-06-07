import React from 'react'

import Column from './components/Column'
import Content from './components/Content'
import Header from '../components/Header'
import Navigation from './components/Navigation'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import Title from './components/Title'

export default () => (
  <Page>
  <Content>
  <Header />
  <Navigation />
  <Column>
    <Title>
      <NotFound message="Sorry, I am unable to find the page you are looking for!" />
    </Title>
    </Column>
  </Content>
  </Page>
)
