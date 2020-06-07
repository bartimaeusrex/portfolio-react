import React from 'react'
import styled from 'styled-components'

const Column = styled.div`
  width: 50%;
  padding: 15px;
  margin: 0 auto;
  text-align:justify;
  font-family:"Catamaran";
  font-weight:400;
  & a:link, & a:visited {
    text-decoration:none;
    background-color: rgba(186, 103, 109, .1);
    color:black;
    border-radius:8px;
  }
  & a:hover {
    text-decoration:none;
    background-color:rgba(194, 85, 93, 0.267);
    color:black;
    border-radius:8px;
  }
  `

export default ({ children }) => (<Column>{children}</Column>)
