import React from 'react'
import styled from 'styled-components'

const BartxRun = styled.div`
  background-image:url("./images/bartxrun.gif");
  display:block;
  margin:0 auto;
  width:42px;
  height:64px;
  background-size: contain;
  &:hover {
    background-image:url("./images/bartxsword.gif");
    background-position:bottom;
    background-repeat:no-repeat;
    width:52px;
    }
`

export default () => (
  <BartxRun />
  )
