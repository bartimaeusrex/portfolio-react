import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: inherit;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding:0;
  width: 100%;
`

export default ({ children }) => (
  <Page>{children}</Page>
  )
