import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [userName, setUsername] = useState('')

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const response = await axios.get('http://localhost:5001/name')
    setUsername(response.data)
  }

  return (
    <>
      <h1>My Website</h1>
      <h3>My name is {userName}</h3>
    </>
  )
}

export default App
