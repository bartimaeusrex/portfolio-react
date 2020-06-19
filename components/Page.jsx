import React from 'react'
import styled from 'styled-components'

import Column from '../components/Column'
import Content from '../components/Content'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

const Page = styled.div`
  /* background-color: white; */
  margin:0 auto;
  width:600px;
  position:relative;
  top:0px;
  text-decoration:none;
  box-shadow: 5px 5px 35px rgb(0, 0, 0, .3);
`

const Background = styled.div`
  border-radius:100%;
  background-image: url('./images/tile_foliage.gif');
  background-size:120px;
  /* background-repeat: repeat;
  background-blend-mode: multiply;
  background-color: #888; */
  width: 1000px;
  height: 1000px;
  position:fixed;
  z-index:-1;
  bottom:-50%;
  /* margin:auto 0; */
  left: 500px;
  /* transform: translateX(50%); */
  animation: rotation 180s infinite linear;
  transform: rotate(360deg);
    @keyframes rotation {
		from { transform: rotate(359deg);	}
		to { transform: rotate(0deg); }
}
`

export default ({ children }) => (
  <Page>
    {/* <Background /> */}
    <Content>
      <Header />
      <Navigation />
        <Column>
          { children }
        </Column>
      <Footer />
    </Content>
  </Page>
)
