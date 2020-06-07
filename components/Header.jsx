import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  background-color: #666666;
  background-image: url("./images/endpapers_antique.jpg");
  background-attachment: fixed;
  background-blend-mode: multiply;
  padding: 20px;
  text-align: center;
  font-family:"Press Start 2P", cursive;
  font-size:0.8em;
  color:rgb(255, 255, 255);
  text-shadow: 5px 5px 10px rgb(0, 0, 0);
`
const Dude = styled.img`
  display: inline;
  position:relative;
  top:6px;
`

export default () => (
  <Header>
    <h1>PATRICK DAVID REINHART</h1>
    <p>Web Developer <Dude src="./images/bartxsword.gif" width="30px" /> Graphic Designer</p>
  </Header>
)
