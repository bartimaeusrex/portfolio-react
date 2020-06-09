import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  /* padding:10px 25px 0 25px; */
  display:inline-block;
  font-family: 'Catamaran', sans-serif;
  font-weight:400;
  color:black;
  font-size:16px;
`

export default ({ children }) => (<Paragraph>{children}</Paragraph>)
