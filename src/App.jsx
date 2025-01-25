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
        const emojisArray = getEmojisArray(data)
        setEmojiArray(emojisArray)
        setIsGameOn(true)
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  function getEmojisArray(data) {
    const randomIndices = getRandomIndices(data);
    const emojiArr = randomIndices.map(index => data[index]);
    const pairedEmojisArray = [...emojiArr, ...emojiArr]

    // Fisher-Yates algorithm to shuffle array
    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = pairedEmojisArray[i]
      pairedEmojisArray[i] = pairedEmojisArray[j]
      pairedEmojisArray[j] = temp
    }
    return pairedEmojisArray
  }

  // generating random indices to get random emojis
  function getRandomIndices(data, count = 5) {
    // return Array.from({ length: 5 }, () => Math.floor(Math.random() * data.length))

    const randomIndices = []
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * data.length)
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex)
      } else {
        i--
      }
    }
    return randomIndices
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