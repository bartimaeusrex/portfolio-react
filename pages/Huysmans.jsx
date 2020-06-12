import React from 'react'

import BookCover from '../components/BookCover'
import Page from '../components/Page'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'
import Doodad from '../components/Doodad'

export default () => (
  <Page>
    <Title>Your book...</Title>
    <BookCover src="../images/againstnature.jpg" />
    <Paragraph>
      May I suggest reading "Against Nature" by Joris-Karl Huysmans? It's epic and super duper.
    </Paragraph>
    <Title>Try again:</Title>
    <Doodad />
  </Page>
)
