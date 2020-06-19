import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from './Button'

const Doodad = styled.div`
  width:250px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  margin:0 auto;
  object-fit: scale-down;
`
const Column = styled.div`
  float:inline-start;
`
const Radio = styled.input`
  display: inline;
  &:checked + label {
  /* color: red; */
  font-weight: bold;
}
`
const SmallTitle = styled.h2`
  font-family:"Press Start 2P", cursive;
  font-size:16px;
  color:rgba(58, 61, 75, 0.5);
  text-align:left;
`

export default () => {
  const [animal, setAnimal] = useState('')
  const [color, setColor] = useState('')

  const updateColor = event => setColor(event.target.value)
  const updateAnimal = event => setAnimal(event.target.value)

  const bookLink = `/${color.concat('-', animal)}`

  return (
    <>
      <Doodad>
        <Column>
          <SmallTitle>Color:</SmallTitle>
          <form onChange={updateColor}>
            <Radio type="radio" name="color" id="color" value="purple" /><label>Purple</label><br />
            <Radio type="radio" name="color" id="color" value="yellow" /><label>Yellow</label><br />
            <Radio type="radio" name="color" id="color" value="turquoise" /><label>Turquoise</label>
          </form>
        </Column>
        <Column>
          <SmallTitle>Animal:</SmallTitle>
            <form onChange={updateAnimal}>
            <Radio type="radio" name="animal" id="animal" value="fox" /> <label>Fox</label><br />
            <Radio type="radio" name="animal" id="animal" value="butterfly" /><label>Butterfly</label><br />
            <Radio type="radio" name="animal" id="animal" value="goat" /><label>Goat</label>
          </form>
        </Column>
      </Doodad>
      <Link to={bookLink}><Button>BOOK, HO!</Button></Link>
    </>
  )
}