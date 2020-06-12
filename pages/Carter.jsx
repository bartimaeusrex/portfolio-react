import React from 'react'

import BookCover from '../components/BookCover'
import Page from '../components/Page'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'
import Doodad from '../components/Doodad'

export default () => (
  <Page>
    <Title>Your book...</Title>
    <BookCover src="../images/nightsatthecircus.jpg" />
    <Paragraph>
      May I suggest reading "Nights at the Circus" by Angela Carter? It's epic and super duper.
    </Paragraph>
    <Title>Try again:</Title>
    <Doodad />
  </Page>
)
