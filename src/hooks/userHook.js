import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [state, setState] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data => setState(data)))
  }, [url])
  return [state]
}
export default useFetch