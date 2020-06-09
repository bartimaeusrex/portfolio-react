import React from 'react'
// import styled from 'styled-components'

import Page from '../components/Page'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'


export default () => (
  <Page>
    <Title>Generic Book Page</Title>
    <Paragraph>
      Having chosen {animal} and {color}, may I suggest reading {book}. It's good stuff.
    </Paragraph>
  </Page>
)
