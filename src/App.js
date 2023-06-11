import './App.css'
import UseReducerComponent from './hooks/useReducer'
import Memo from './hooks/useMemo'
import Call from './hooks/useCallback'
const styles = {
  div: {
    margin: '0 auto',
    width: '1000px',
    height: '100vh'
  },
  h: {
    textAlign: 'center',
    margin: '50px auto 40px auto'
  }
}
const App = () => {
  return (
    <div style={styles.div}>
      <h1 style={styles.h}>useReducePlus</h1>
      <UseReducerComponent />
      <Memo />
      <Call/>
    </div>
  )
}

export default App
