import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  margin: 0 10%;
  display: flex;
  flex-direction: row;
`

export default ({ children }) => (<Row>{children}</Row>)
