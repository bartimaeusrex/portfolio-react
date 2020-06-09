import React, { useState } from 'react'
import styled from 'styled-components'


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
  }
`

const SmallTitle = styled.h2`
  font-family:"Press Start 2P", cursive;
  font-size:16px;
  color:rgba(58, 61, 75, 0.473);
  text-align:left;
`

// The all important actual goddang react thingamabob!!

// Butterfly, Yellow - The Curious Sofa by Edward Gorey
// Butterfly, Purple - Nights at the Circus by Angela Carter
// Fox, Yellow       - Against the Grain by Joris-Karl Huysmans, translated by Brendan King
// Fox, Purple       - Little Big by John Crowley

export default ({ term, setter }) => {
  const [num1, setNum1] = useState('')
  const [oper, setOper] = useState('+')

  const updateNum1 = event => setNum1(event.target.value)

  const updateBook = (event) => {
    if (Number(num1) && Number(num2)) {
      if (message) setMessage('')
      switch (oper) {
        case 'animal':
          setCalc(Number(num1) - Number(num2))
          break
        case 'multiply':
          setCalc(Number(num1) * Number(num2))
          break
        default:
          setCalc(Number(num1) + Number(num2))
    }
  } else {
    setMessage('Please provide valid numbers.')
    setCalc('')
  }
  }

  return (
    <>
      <div>Based (extremely loosely) on the following criteria, allow me to recommend you a good book:</div>
      <Doodad>
      <Column>
      <SmallTitle>Animal:</SmallTitle>
      <Radio type="radio" id="fox" name="animal" value="fox" checked={true} />
        <label for="fox">Fox</label><br />
      <Radio type="radio" id="butterfly" name="animal" value="butterfly"/>
        <label for="butterfly">Butterfly</label>
    </Column>
    <Column>
      <SmallTitle>Color:</SmallTitle>
      <Radio type="radio" id="yellow" name="color" value="yellow" checked={true} />
        <label for="yellow">Yellow</label><br />
      <Radio type="radio" id="purple" name="color" value="purple"/>
          <label for="purple">Purple</label>
        </Column>
      </Doodad>
      <Button value={term} onClick={event => setter(event.target.value)} type="submit">BOOK, HO!</Button>
    </>
  )
}
