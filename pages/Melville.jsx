import React from 'react'
import styled from 'styled-components'

// import BookCover from '../components/BookCover'
import Page from '../components/Page'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'
import DoodadRadio from '../components/DoodadRadio'

const BookCover = styled.img`
  object-fit: scale-down;
  width: 100%;
  `

export default () => (
  <Page>
    <Title>Your book...</Title>
    <BookCover src="../images/mobydick.jpg" />
    <Paragraph>
      May I suggest reading "Moby Dick; or, The Whale" by Herman Melville? It might be long and wordy, but boy howdy is it worth it in the end.
    </Paragraph>
    <Title>Try again:</Title>
    <DoodadRadio />
  </Page>
)
