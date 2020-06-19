import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  justify-content: center;
  margin: 0 auto;
  padding:0;
  width: 600px;
  border:1px solid black;
  background-image:url("./images/texture_white.png");
`

export default ({ children }) => (
  <Content>{children}</Content>
  )
