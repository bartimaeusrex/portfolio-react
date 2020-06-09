export default () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [oper, setOper] = useState('+')
  const [calc, setCalc] = useState('')
  const [message, setMessage] = useState('')

  const updateNum1 = event => setNum1(event.target.value)
  const updateNum2 = event => setNum2(event.target.value)
  const updateOper = event => setOper(event.target.value)

  const updateCalc = (event) => {
    if (Number(num1) && Number(num2)) {
      if (message) setMessage('')
      switch (oper) {
        case 'subtract':
          setCalc(Number(num1) - Number(num2))
          break
        case 'multiply':
          setCalc(Number(num1) * Number(num2))
          break
        case 'divide':
          setCalc(Number(num1) / Number(num2))
          break
        default:
          setCalc(Number(num1) + Number(num2))
      }
    } else {
      setMessage('Please provide valid numbers.')
      setCalc('')
    }
  }
}
