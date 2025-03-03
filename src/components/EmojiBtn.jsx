import { decodeEntity } from "html-entities"
function EmojiBtn({
  emoji = {},
  handleClick,
  isCardSelected,
  isCardMatched  
}) {

  const ariaLabel = isCardSelected ? emoji.name : 'Card upside down.'
  return (
    <button
      aria-live="polite"
      aria-label={ariaLabel}
      className={`card ${isCardMatched ? 'card--matched' : isCardSelected ? 'card--selected' : '' }`}
      disabled={isCardSelected || isCardMatched}
      onClick={handleClick}
    >
      {/* previous api code {
        isCardSelected || isCardMatched ? decodeEntity(emoji.htmlCode[0]) : '?'
      } */}
      
      {
        isCardSelected || isCardMatched ? 
        <img src={emoji.image}/> : '?'
      }
    </button >
  )
}

export default EmojiBtn