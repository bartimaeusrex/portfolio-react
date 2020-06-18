import React from 'react'
import styled from 'styled-components'

const Column = styled.div`
  /* width: 50%; */
  padding: 25px 8%;
  margin: 0 auto;
  display:inline-block;
  text-align:justify;
  font-family:"Catamaran";
  font-weight:400;
  transition: all 0.5s ease;
  & a:link, & a:visited {
    text-decoration:none;
    background-color: rgba(186, 103, 109, .1);
    color:black;
    border-radius:8px;
    transition: all 0.5s ease;
  }
  & a:hover {
    text-decoration:none;
    background-color:rgba(194, 85, 93, 0.267);
    /* background: linear-gradient(#e66465, #9198e5); */
    color:black;
    border-radius:8px;
    transition: all 0.5s ease;
  }
  `

export default ({ children }) => (<Column>{children}</Column>)
