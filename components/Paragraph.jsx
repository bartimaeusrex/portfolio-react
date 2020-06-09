import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  /* padding:10px 25px 0 25px; */
  display:block;
  font-family: 'Catamaran', sans-serif;
  font-weight:400;
  color:black;
  font-size:16px;
  text-align:justify;
`

export default ({ children }) => (<Paragraph>{children}</Paragraph>)
