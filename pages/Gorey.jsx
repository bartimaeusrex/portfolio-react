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
    <BookCover src="../images/curioussofa.jpg" />
    <Paragraph>
      May I suggest reading "The Curious Sofa" by Edward Gorey? It's epic and super duper.
    </Paragraph>
    <Title>Try again:</Title>
    <DoodadRadio />
  </Page>
)
