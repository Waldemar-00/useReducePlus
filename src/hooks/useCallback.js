import { useCallback, useEffect, useState } from 'react'
const [nameArr, surNameArr] = ['Uladzimir', 'React']
const Call = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [counter, setCounter] = useState(0)
  const [theme, setTheme] = useState(null)

  const onChangeFullName = useCallback((name, surname) => {
    console.log(surname)
    setName(name)
    setSurname(surname)
  }, [])
  useEffect(() => {
    onChangeFullName(nameArr, surNameArr)
  }, [onChangeFullName])
  const styles = {
    div: {
      display: 'flex',
      marginTop: '50px',
      flexDirection: 'column',
      gap: '20px',
      backgroundColor: theme ? theme : 'white'
    }
  }

  return (
  <div style={styles.div}>
  <h2>{`${name} ${surname}`}</h2>
  <div>Rezult: {counter}</div>
      <button onClick={() => {
        setCounter(counter + 1)
        setTheme('white')
      }}>Counter++</button>
      <button onClick={() => {
        setTheme('orange')
        setCounter(0)
      }}>Reset and add dark theme</button>
</div>
  )
}
export default Call