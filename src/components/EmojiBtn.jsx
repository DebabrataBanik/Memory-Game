
function EmojiBtn({
  content,
  handleClick,
  isCardSelected,
  isCardMatched
}) {
  return (
    <button
      className={`card ${isCardMatched ? 'card--matched' : isCardSelected ? 'card--selected' : ''}`}
      disabled={isCardSelected || isCardMatched}
      onClick={handleClick}
    >
      {
        isCardSelected || isCardMatched ? content : '?'
      }
    </button >
  )
}

export default EmojiBtn