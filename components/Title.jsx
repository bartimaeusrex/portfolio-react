import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-family:"Press Start 2P", cursive;
  font-size:20px;
  color:rgba(58, 61, 75, 0.473);
`

export default ({ children }) => (<Title>{children}</Title>)
