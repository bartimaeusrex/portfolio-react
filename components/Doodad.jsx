import React, { useState } from 'react'
import styled from 'styled-components'
import Paragraph from '../components/Paragraph'

const Doodad = styled.div`
  width:300px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  margin:0 auto;
`
const Column = styled.div`
  float:left;
`
const Radio = styled.input`
  display: inline;
`
const Button = styled.button`
  margin:0 auto 16px auto;
  display:block;
  padding:8px;
  border-radius:3px;
  border:1px solid black;
  background-color:white;
  box-shadow: 4px 4px 2px 1px rgba(80, 0, 0, .2);
  font-family:"Press Start 2P", cursive;
  font-size:16px;
  color:rgba(0, 0, 0, 0.6);
  &:hover {
    background-color:yellow;
  }
  &:active {
    background-color:orange;
    position:relative;
    top:2px;
    left:2px;
    box-shadow: 1px 1px 0px 0px rgba(80, 0, 0, .2);
  }
`
const SmallTitle = styled.h2`
  font-family:"Press Start 2P", cursive;
  font-size:16px;
  color:rgba(58, 61, 75, 0.473);
  text-align:left;
`

// The all important actual dang React thingamabob!!

// Butterfly, Purple - Nights at the Circus by Angela Carter
// Butterfly, Yellow - Against the Grain by Joris-Karl Huysmans, translated by Brendan King
// Fox, Purple  - Little Big by John Crowley
// Fox, Yellow  - The Curious Sofa by Edward Gorey

export default ({ term, setter }) => {
  const [animal, setAnimal] = useState('')
  const [color, setColor] = useState('')
  const [book, setBook] = useState('')
  const [message, setMessage] = useState('')

  const updateColor = event => setColor(event.target.value)
  const updateAnimal = event => setAnimal(event.target.value)

  const updateBook = (event) => {
    if (color, animal) {
      if (message) setMessage('')
        switch (book) {
          case 'yellow' && 'fox':
            setBook(goToGorey)
            break
          case 'yellow' && 'butterfly':
            setBook(goToHuysmans)
            break
          case 'purple' && 'fox':
            setMessage('Purple Fox')
            break
          case 'purple' && 'butterfly':
            setBook(goToCarter)
            break
          default:
            setBook('')
        }
    } else {
      setMessage('Something\'s not right')
      setBook('')
    }
  }

  return (
    <>
      <Paragraph>Based on the following criteria, allow me to recommend you a good book:</Paragraph>
      <Doodad>
        <Column>
          <SmallTitle>Color:</SmallTitle>
          <select id="color" onChange={updateColor}>
            <option value="yellow">YELLOW</option>
            <option value="purple">PURPLE</option>
          </select>
          {/* <Radio type="radio" id="yellow" name="color" value="yellow" />
          <label for="yellow">Yellow</label><br />
          <Radio type="radio" id="purple" name="color" value="purple" />
          <label for="purple">Purple</label> */}
        </Column>
        <Column>
          <SmallTitle>Animal:</SmallTitle>
          <select id="animal" onChange={updateAnimal}>
            <option value="fox">FOX</option>
            <option value="butterfly">BUTTERFLY</option>
          </select>
          {/* <Radio type="radio" id="fox" name="animal" value="fox" />
          <label for="fox">Fox</label><br />
          <Radio type="radio" id="butterfly" name="animal" value="butterfly" />
          <label for="butterfly">Butterfly</label> */}
        </Column>
      </Doodad>
      <Paragraph>{ message ? `${message}` : null }</Paragraph>
      <Button value={term} onChange={event => setter(event.target.value)} onClick={updateBook} type="submit">BOOK, HO!</Button>
    </>
  )
}
