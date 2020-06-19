import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-family:"Press Start 2P", cursive;
  font-size:20px;
  color:rgba(58, 61, 75, 0.473);
  text-align:left;
  line-height: 1.5;
`

export default ({ children }) => (<Title>{children}</Title>)
