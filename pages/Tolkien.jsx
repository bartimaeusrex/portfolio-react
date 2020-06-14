import React from 'react'
import styled from 'styled-components'

// import BookCover from '../components/BookCover'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'
import DoodadRadio from '../components/DoodadRadio'
import Page from '../components/Page'

const BookCover = styled.img`
  object-fit: scale-down;
  width: 100%;
  `

export default () => (
  <Page>
  <Title>Your book...</Title>
  <BookCover src="./images/silmarillion.jpg" />
  <Title>The Silmarillion by J.R.R. Tolkien</Title>
      <Paragraph>
        May I suggest reading "The Silmarillion" by J.R.R. Tolkien? It's SUPER epic and mythically super duper.
      </Paragraph>
  <Title>Try again:</Title>
  <DoodadRadio />
  </Page>
)
