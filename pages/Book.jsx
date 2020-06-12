import React from 'react'
import styled from 'styled-components'

import Page from '../components/Page'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'

// const BookCover = styled.img`
//   /* object-fit: scale-down; */
//   background-size:contain;
//   width: 100%;
//   height: 600px;
//   /* background-attachment: fixed; */
//   /* The following DOES work within this component, it's just that calling these
//   EXternally does NOT appear to work!, ie <BookCover crowley /> in another component file. Sad. Face.
//   BUT.... maybe it would if I could get the Book.jsx page to work for all books... */
//   background-image: ${props =>
//     props.crowley ? "url('/images/littlebig1.jpg')" :
//     props.carter ? "url('/images/nightsatthecircus.jpg')" :
//     props.gorey ? "url('/images/thecurioussofa.jpg')" :
//     props.huysmans ? "url('/images/againstnature.jpg')" : "none" };
// `

export default () => (
  <Page>
    <Title>Your book...</Title>
    <Paragraph>
      Having chosen {animal} and {color}, may I suggest reading {book}. It's good stuff.
    </Paragraph>
  </Page>
)
