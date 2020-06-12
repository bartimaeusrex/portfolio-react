import React from 'react'
import styled from 'styled-components'

// import BookCover from '../components/BookCover'
import Page from '../components/Page'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'
import Doodad from '../components/Doodad'

const BookCover = styled.img`
  object-fit: scale-down;
  width: 100%;
  `

export default () => (
  <Page>
    <Title>Your book...</Title>
    <BookCover src="./images/littlebig1.jpg" />
    <Paragraph>
      May I suggest reading "Little, Big: or, The Fairies′ Parliament" by John Crowley? It's epic and super duper.
    </Paragraph>
    <Title>Try again:</Title>
    <Doodad />
  </Page>
)
