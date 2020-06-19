import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from '../components/Button'

const Doodad = styled.div`
  width:250px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  margin:0 auto;
  float:inline-start;
  object-fit: scale-down;
`
const Column = styled.div`
  float:inline-start;
`
const Radio = styled.input`
  display: inline;
`
const SmallTitle = styled.h2`
  font-family:"Press Start 2P", cursive;
  font-size:16px;
  color:rgba(58, 61, 75, 0.5);
  text-align:left;
`

export default ({ term, setter }) => {
  const [animal, setAnimal] = useState('fox')
  const [color, setColor] = useState('purple')

  const updateColor = event => setColor(event.target.value)
  const updateAnimal = event => setAnimal(event.target.value)

  const bookLink = `/${color.concat('-', animal)}`

  return (
    <>
      <Doodad>
        <Column>
          <SmallTitle>Color:</SmallTitle>
          <select id="color" onChange={updateColor}>
            <option value="purple">PURPLE</option>
            <option value="yellow">YELLOW</option>
          </select>
          <br />
        </Column>
        <Column>
          <SmallTitle>Animal:</SmallTitle>
          <select id="animal" onChange={updateAnimal}>
            <option value="fox">FOX</option>
            <option value="butterfly">BUTTERFLY</option>
          </select>
        </Column>
      </Doodad>
      <Link to={bookLink}><Button>BOOK, HO!</Button></Link>
    </>
  )
}