import React from 'react'
import styled from 'styled-components'

const Quote = styled.p`
  border-left:1px solid black;
  padding:10px 25px 0 25px;
  font-family: 'IM Fell DW Pica', serif;
  font-size:20px;
`

export default ({ children }) => (<Quote>{children}</Quote>)
