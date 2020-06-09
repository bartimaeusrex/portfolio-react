import React from 'react'
import styled from 'styled-components'

const Bartx = styled.div`
  display:block;
  margin:0 auto;
  width:48px;
  height:48px;
  background-image: url('./images/bartxsword.gif');
  background-size: contain;
  /* background-color: ${props => props.primary ? "red" : "black"}; */
`

export default () => (
  <Bartx />
  )