import React from 'react'
// import styled from 'styled-components'
import { Link } from "react-router-dom"

import NotFound from '../components/NotFound'
import Page from '../components/Page'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'

export default () => (
  <Page>
    <Title>
      <NotFound message="Sorry, I am unable to find the page you are looking for!" />
    </Title>
    <img src="./images/bounce.gif" width="48" />
    <Paragraph>
      <Link to="./"> &lt;&lt; Get thee hence!</Link>
    </Paragraph>
  </Page>
)
