import React from 'react'
// import styled from 'styled-components'
import { Link } from "react-router-dom";

import NotFound from '../components/NotFound'
import Page from '../components/Page'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'
import Doodad from '../components/Doodad'
import BartxRun from '../components/BartxRun'
import Quote from '../components/Quote'
// import MainPage from '../pages/Main'

export default () => (
  <Page>
    <Title>
      Error!
      <NotFound message="Sorry, I am unable to find the page you are looking for!!!!" />
    </Title>
    <Paragraph>
      <Link to="./pages/Main">Link to main page...(?)</Link>
      Normal text.
    </Paragraph>
    <Paragraph>What the main page is supposed to look like:</Paragraph>
    <Title>Hello! Nice to meet you.</Title>
    <Paragraph>I am an ever-developing web developer and graphic designer, and among other things I am currently developing <a href="https://curiouser.house/">Curiouser House Publishing</a> in my spare time, redesigning and republishing classic literature in uniform editions. Throughout my time I have helped develop and design websites for several startups and small businesses, including <a href="https://www.tomthebookguy.com">Tom the Book Guy</a>, where I worked for nearly seven years. Hence the following little React app!</Paragraph>
    <Title>Book recommendation:</Title>
    <Doodad />
    <BartxRun />
    <Quote>“Ideas are like fish. If you want to catch little fish, you can stay in the shallow water. But if you want to catch the big fish, you’ve got to go deeper. Down deep, the fish are more powerful and more pure.” - David Lynch</Quote>
  </Page>
)
