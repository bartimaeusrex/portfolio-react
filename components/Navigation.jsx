import React from 'react'
import styled from 'styled-components'

const Navigation = styled.div`
  overflow: hidden;
  background-color: #333;
  background-image:url("./images/texture_black.png");
  display: flex;
  height:60px;
  /* justify-content: space-between; */
`
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    display: block;
    }
`
const DropContent = styled.div`
  display: none;
  position: absolute;
  background-image:url("./images/texture_black.png");
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  &:hover {
    display: block;
    }
`
const Link = styled.a`
  float: left;
  display: block;
  color: grey;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family:"Press Start 2P", cursive;
  transition: all 0.5s ease;
  &:hover {
    transition: all 0.5s ease;
    background-image: url("./images/texture_white.png");
    color: black;
    display: block;
  }
`
const NavBurger = styled(Link)`
  background-image:url("./images/texture_white.png");
  color: black;
  transition: all 0.5s ease;
  &:hover {
    transition: all 0.5s ease;
    background-image: url("./images/texture_black.png");
    color: #f2f2f2;
    display: block;
  }
`

export default () => (
  <Navigation>
    <Dropdown>
      <NavBurger href="/skills"><i className="fas fa-bars fa-2x"></i></NavBurger>
      <DropContent>
        <Link>Linkypoo</Link>
      </DropContent>
    </Dropdown>
    <Link href="https://github.com/bartimaeusrex"><i className="fab fa-github-square fa-2x"></i></Link>
    <Link href="https://www.linkedin.com/in/mrpatrickreinhart"><i className="fab fa-linkedin fa-2x"></i></Link>
    <Link href="https://www.twitter.com/MrPatch"><i className="fab fa-twitter-square fa-2x"></i></Link>
    <Link href="https://mrpat.ch"><i className="fas fa-palette fa-2x"></i></Link>
    <Link href="https://www.instagram.com/mrpatrickreinhart"><i className="fab fa-instagram fa-2x"></i></Link>
  </Navigation>
)
