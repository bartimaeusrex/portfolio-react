import React from 'react'
import styled from 'styled-components'

import Page from '../components/Page'
import Title from '../components/Title'

const UnList = styled.ul`
  list-style-type: square;
  `

export default () => (
  <Page>
    <Title>Skills + Obsessions</Title>
      <UnList>
      <li>HTML5, CSS3, JavaScript</li>
      <ul>
        <li>I have been working with HTML and CSS for over twenty years, to one extent or another. Javascript is a more recent development that I am excited to explore further in conjunction with other facets of web development. From coding in Notepad and uploading my fansites thru FTP to Tripod and FortuneCity, to Wordpress (and many inbetween), and finally finding my way to React.</li>
      </ul>
      <li>React, SQL, Express, Node.js</li>
      <ul>
        <li>Similarly with Javascript, my experience with these is much more recent. I am especially enamored with React, and all its inherent possibilities.</li>
      </ul>
      <li>Adobe InDesign, Illustrator, Photoshop</li>
      <li>Social Media Management</li>
      <ul>
        <li>I have always been fascinated by the usage and evolution of blogging platforms and social media (shoutouts to LiveJournal, Yahoo! Groups, Blogspot, Wordpress, Tumblr, Diaspora, Ello, Pillowfort, as well as the usual suspects). I ran the website and social media for <a href="http://www.tomthebookguy.com/">Tom The Book Guy</a> for seven years, utilizing Facebook, Twitter, Pinterest. For a short while I ran the social media for a costume shop in Denver, where I also got to design a billboard campaign.</li>
      </ul>
      <li>Wordpress</li>
      <li>Typography</li>
      <ul><li>A fascination and side obsession, that plays nicely into all my design projects, especially in book design and my <a href="https://curiouser.house/">Curiouser House Publishing</a>. Yes, I've even made <a href="https://gumroad.com/mrpatch">a couple of fonts</a>.</li></ul>
      <li>Tenor Guitar</li>
      <ul><li>What is a tenor guitar, I hear you ask? Like a regular guitar, but with only four strings, and is generally tuned in fifths. I even helped start <a href="http://www.tenorguitar.com/">TenorGuitar.com</a> back in the day, which came out of the Yahoo! group for tenor guitar enthusiasts. I don't play much these days, but I used to accompany my brother with his fiddle and we'd go around playing at the Texas Fiddle competitions. Fun times. We've released some music on bandcamp as <a href="https://reinhartbrothers.bandcamp.com/">The Reinhart Brothers</a>.</li></ul>
      <li>BOOKS! Good golly, gosh darn, BOOKS. Literature. Reading, listening, collecting, buying, selling, researching, reading, stacking, rearranging, reading, browsing, hunting, exploring, making, designing, publishing... Books.</li>
      <li>Interactive Fiction + Pixel Art</li>
      <ul><li>My most recent obsession has been discovering the wealth of possibility with interactive fiction/narratives in games. That may mean no art at all (beyond the art of typography!), but I also love the constraints of old school-style pixel art. As yet I have only dipped my big toe into the pool that is Ink (the scripting language and game engine from Inkle Studios), and made the simplest of pixel art such as little Bartimaeus Rex that you see at the top of the page with the crown and sword. I've often thought that if I had a religion, it would be that of the all-encompassing, very capital S, <em>Story</em>... but that's a diatribe to tell another tribe another time.</li></ul>
    </UnList>
  </Page>
)
