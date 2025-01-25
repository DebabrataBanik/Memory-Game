import { useState } from "react"
import Form from "./components/Form"
import MemoryCard from "./components/MemoryCard"

function App() {

  const [isGameOn, setIsGameOn] = useState(false)
  const [emojiArray, setEmojiArray] = useState([])

  async function startGame(e) {
    e.preventDefault()
    try {
      const response = await fetch('https://emojihub.yurace.pro/api/all/category/animals-and-nature')
      if (!response.ok) {
        throw new Error("Could not fetch data")
      } else {
        const data = await response.json()
        setEmojiArray(data.slice(0, 5))
        setIsGameOn(true)
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <main>
      <h1>Memory Game</h1>
      {!isGameOn && <Form startGame={startGame} />}
      {isGameOn && <MemoryCard emojiArray={emojiArray} />}
    </main>
  )
}

export default App