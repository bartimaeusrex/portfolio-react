import React from 'react'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import Header from '../components/Header'

export default () => (
  <Page>
    <Header />
    <NotFound message="Sorry, unable to find the page you are looking for" />
  </Page>
)
