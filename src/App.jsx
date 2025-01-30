import { useState, useEffect } from "react"
import { Form, MemoryCard, AssistiveTechInfo, GameOver, ErrorCard } from "./components"

function App() {

  const initialFormData = {
    category: 'animals-and-nature',
    count: 10
  }
  
  const [formData, setFormData] = useState(initialFormData)
  const [isGameOn, setIsGameOn] = useState(false)
  const [emojiArray, setEmojiArray] = useState([])
  const [selectedCards, setSelectedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [isGameOver, setIsGameOver] = useState(false)
  const [isError, setIsError] = useState(false)

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

  async function startGame(e) {
    e.preventDefault()
    try {
      const response = await fetch(`https://emojihub.yurace.pro/api/all/category/${formData.category}`)
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
      setIsError(true)
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
  function getRandomIndices(data) {
    // return Array.from({ length: 5 }, () => Math.floor(Math.random() * data.length))

    const randomIndices = []
    for (let i = 0; i < (formData.count / 2); i++) {
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

    if (selectedCards.length < 2) {
      setSelectedCards(prev => [...prev, { name, index }])
    } else if (selectedCards.length === 2) {
      setSelectedCards([{ name, index }])
    }
  }

  function resetGame(){
    setIsGameOn(false)
    setIsGameOver(false)
    setMatchedCards([])
    setSelectedCards([])
  }

  function resetError(){
    setIsError(false)
  }

  function handleFormChange(e){
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  return (
    <main>
      <h1>MEMORY GAME</h1>
      {
        !isGameOn && !isError && 
        <Form 
          startGame={startGame} 
          handleChange={handleFormChange}
        />
      }
      { isGameOn && !isGameOver && 
      <AssistiveTechInfo 
        emojis={emojiArray}
        matchedCards={matchedCards}
      /> }
      {
        isGameOver && <GameOver handleClick={resetGame}/>
      }
      {isGameOn &&
        <MemoryCard
          emojiArray={emojiArray}
          handleClick={handleCardClick}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />
      }
      {isError && <ErrorCard resetError={resetError} />}
    </main>
  )
}

export default App