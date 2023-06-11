import { useReducer, useMemo } from 'react'
const array = ['Uladzimir', 'React']
const createUser = ([name, surname]) => {
  console.log(name)
  const obj = {
    name,
    surname
  }
  return obj
}
const Memo = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })
  
  function reducer(state, {type, payload = 1}) {
    switch (type) {
      case 'plus': return { counter: state.counter + payload }
      case 'reset': return init(payload)
      default: throw new Error()
    }
  }
  function init(payload, state) {
    return {...state, theme: payload, counter: 0 }
  }
  const styles = {
    div: {
      display: 'flex',
      marginTop: '50px',
      flexDirection: 'column',
      gap: '20px',
      backgroundColor: state.theme ? state.theme : 'white'
    }
  }
  const user = useMemo(()=> createUser(array), [])
  return (
  <div style={styles.div}>
  <h2>{`${user.name} ${user.surname}` }</h2>
  <div>Rezult: {state.counter}</div>
  <button onClick={() => dispatch({type: 'plus', payload: 2})}>Counter++</button>
  <button onClick={() => dispatch({ type: 'reset', payload: 'pink'})}>Reset and add dark theme</button>
</div>
  )
}
export default Memo