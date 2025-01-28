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
      {
        isCardSelected || isCardMatched ? decodeEntity(emoji.htmlCode[0]) : '?'
      }
    </button >
  )
}

export default EmojiBtn