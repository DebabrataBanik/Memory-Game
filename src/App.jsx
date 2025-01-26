import { useState, useEffect } from "react"
import Form from "./components/Form"
import MemoryCard from "./components/MemoryCard"

function App() {

  const [isGameOn, setIsGameOn] = useState(false)
  const [emojiArray, setEmojiArray] = useState([])
  const [selectedCards, setSelectedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    if (selectedCards.length === 2 && selectedCards.every(card => card.name === selectedCards[0].name)) {
      const alreadyMatched = matchedCards.some(card => card.name === selectedCards[0].name)
      if (!alreadyMatched) {
        setMatchedCards(prev => [...prev, ...selectedCards])
      }
    }
  }, [selectedCards, matchedCards])

  useEffect(() => {
    if (matchedCards.length > 0 && matchedCards.length === emojiArray.length) {
      setIsGameOver(true)
    }
  }, [matchedCards, emojiArray])

  console.log('selected cards', selectedCards)
  console.log('matched cards', matchedCards)
  console.log('GAME OVER', isGameOver)
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
  // selecting atmost 2 cards at once and also making sure that the same card is not selected twice
  function handleCardClick(name, index) {
    const selectedCard = selectedCards.find(emoji => emoji.index === index)

    if (!selectedCard && selectedCards.length < 2) {
      setSelectedCards(prev => [...prev, { name, index }])
    } else if (!selectedCard && selectedCards.length === 2) {
      setSelectedCards([{ name, index }])
    }
  }

  return (
    <main>
      <h1>Memory Game</h1>
      {!isGameOn && <Form startGame={startGame} />}
      {isGameOn &&
        <MemoryCard
          emojiArray={emojiArray}
          handleClick={handleCardClick}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />}
    </main>
  )
}

export default App