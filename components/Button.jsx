import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  margin:16px auto;
  display:block;
  padding:8px;
  border-radius:3px;
  border:1px solid black;
  background-color:white;
  box-shadow: 4px 4px 2px 1px rgba(80, 0, 0, .2);
  font-family:"Press Start 2P", cursive;
  font-size:16px;
  color:rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease;
  &:hover {
    background-color:yellow;
    transition: all 0.5s ease;
  }
  &:active {
    background-color:orange;
    transition: all 0.5s ease;
    position:relative;
    top:2px;
    left:2px;
    box-shadow: 1px 1px 0px 0px rgba(80, 0, 0, .2);
  }
`

export default ({ children }) => (<Button>{children}</Button>)
