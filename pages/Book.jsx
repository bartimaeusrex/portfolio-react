import React from 'react'
import styled from 'styled-components'
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Page from '../components/Page'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'

import CrowleyPage from './Crowley'
import CarterPage from './Carter'
import HuysmansPage from './Huysmans'
import GoreyPage from './Gorey'
// import TolkienPage from './Tolkien'

export default () => {
  // const url = new URL('this.pathname')
  const bookUrl = URL(pathname)

  switch (bookUrl) {
    case 'purple-fox':
      console.log('Oranges are $0.59 a pound.');
      break
    case 'purple-butterfly':
      { CarterPage }
      break
    case 'yellow-butterfly':
      { HuysmansPage }
      break
    case 'yellow-fox':
      { GoreyPage }
      break
    default:
      break
  }

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

  return (
    <Page>
        <Paragraph component={displayBook()}>jjjjjjjjj</Paragraph>
    </Page>
  )
}
