import { useReducer } from 'react'

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  function reducer(state, { type, payload = 100 }) {
    switch (type) {
      case 'plus': return { ...state, count: state.count + payload }
      case 'minus': return { ...state, count: state.count - payload }
      case 'reset': return init()
      default: throw new Error()
    }
  }
  console.log(state)
  function init(state) {
    return {...state, theme: 'dark', count: 0}
  }
  const styles = {
    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      backgroundColor: state.theme ? 'grey' : 'white'
    }
  }
  return (
    <div style={styles.div}>
      <div>Rezult: {state.count}</div>
      <button onClick={() => dispatch({type: 'plus', payload: 200})}>Plus 100 or 200</button>
      <button onClick={() => dispatch({ type: 'minus', payload: 200 })}>Minus 100 or 200</button>
      <button onClick={() => dispatch({ type: 'reset'})}>Reset and add dark theme</button>
    </div>
  )
}
export default UseReducerComponent