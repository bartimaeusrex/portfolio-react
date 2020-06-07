import React from 'react'
import { render } from 'react-dom'

import Bartx from './components/Bartx'
import Calculator from './components/Calculator'
import Column from './components/Column'
import Content from './components/Content'
import Doodad from './components/Doodad'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Page from './components/Page'
import Quote from './components/Quote'
import Title from './components/Title'

render(
  <Page>
    <Content>
    <Header />
    <Navigation />
    <Column>
      <Title>Hello! Nice to meet you.</Title>
        I am an ever-developing web developer and graphic designer, and among other things I am currently developing <a href="https://curiouser.house/">Curiouser House Publishing</a> in my spare time, redesigning and republishing classic literature in uniform editions. Throughout my time I have helped develop and design websites for several startups and small businesses, including <a href="https://www.tomthebookguy.com">Tom the Book Guy</a>, where I worked for nearly seven years.
        <Doodad />
        <Bartx />
        <Quote>“Ideas are like fish. If you want to catch little fish, you can stay in the shallow water. But if you want to catch the big fish, you’ve got to go deeper. Down deep, the fish are more powerful and more pure.” - David Lynch</Quote>
        <Calculator />
      </Column>
    </Content>
  </Page>,
  document.getElementById('root'),
)
