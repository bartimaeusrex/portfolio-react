import React from 'react'
import styled from 'styled-components'

import Column from '../components/Column'
import Content from '../components/Content'
import Header from '../components/Header'
import LineBreak from '../components/LineBreak'
import Navigation from '../components/Navigation'

const Page = styled.div`
  background-color: white;
  margin:0 auto;
`

export default ({ children }) => (
  <Page>
  <Content>
  <Header />
  <Navigation />
  <Column>
  { children }
    </Column>
    <LineBreak />
  </Content>
</Page>
)
