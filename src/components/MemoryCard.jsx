import EmojiBtn from "./EmojiBtn"

function MemoryCard({
  emojiArray = [],
  handleClick,
  selectedCards = [],
  matchedCards = []
}) {

  return (
    <ul>
      {
        emojiArray.map((each, index) => {

          const isCardSelected = selectedCards.find(card => card.index === index)
          const isCardMatched = matchedCards.find(card => card.index === index)

          return (
            <li
              key={index}>
              <EmojiBtn
                emoji={each}
                handleClick={() => handleClick(each.name, index)}
                isCardSelected={isCardSelected}
                isCardMatched={isCardMatched}
              />
            </li>
          )
        }
        )
      }
    </ul>
  )
}

export default MemoryCard