import React from 'react'
import styled from 'styled-components'

import Page from '../components/Page'
import Title from '../components/Title'
import RefColor from '../components/RefColor'
import RefGame from '../components/RefGame'
import RefType from '../components/RefType'

const UnList = styled.ul`
  list-style-type: square;
  `

export default () => (
  <Page>
    <Title>Resources + References</Title>
      <UnList>
      <RefColor />
      <RefType />
      <RefGame />
      <li>UX/UI</li>
      <li>Adobe InDesign, Illustrator, Photoshop</li>
      <li>Social Media Management</li>
      <ul>
        <li>I have always been fascljkkjljiard campaign.</li>
      </ul>
      <li>Wordpress</li>
      <li>This and that</li>
      <li>Tenor Guitar</li>
      <ul><li>What is t Brother.</li></ul>
      <li>BOOKS! Good golly...</li>
    </UnList>
  </Page>
)
