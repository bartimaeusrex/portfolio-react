import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
  background-image:url("./images/tile_foliage.gif");
  display:block;
  margin:0 auto;
  width:600px;
  height:60px;
  /* background-size: contain; */
  background-repeat: repeat;
`

// ////////////////

const Navigation = styled.div`
  overflow: hidden;
  background-color: #333;
  background-image:url("./images/tile_foliage.gif");
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  justify-content: space-between;
  transition: all 0.5s ease;
  /* font-family:"Press Start 2P", cursive; */

  &:hover {
    background-color: #ddd;
    background-image: url("./images/texture_white.png");
    color: #4A806B;
    transition: all 0.5s ease;
  }
`

export default () => (
  <Footer>
      <Navigation>
        <Link href="https://github.com/bartimaeusrex"><i className="fab fa-github-square fa-2x"></i></Link>
        <Link href="https://www.linkedin.com/in/mrpatrickreinhart"><i className="fab fa-linkedin fa-2x"></i></Link>
        <Link href="https://www.twitter.com/MrPatch"><i className="fab fa-twitter-square fa-2x"></i></Link>
        <Link href="https://mrpat.ch"><i className="fas fa-palette fa-2x"></i></Link>
        <Link href="https://www.instagram.com/mrpatrickreinhart"><i className="fab fa-instagram fa-2x"></i></Link>
        <Link href="/"><i className="fas fa-home fa-2x"></i></Link>
      </Navigation>
  </Footer>
  )
