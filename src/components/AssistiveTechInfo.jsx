function AssistiveTechInfo({
  emojis = [],
  matchedCards = []
}) {
  return (
    <section className="sr-only" aria-live="polite" aria-atomic='true'>
      <h2>Game Status</h2>
      <p>Number of matched pairs: { matchedCards.length / 2 }</p>
      <p>Number of cards left to match: {emojis.length - matchedCards.length }</p>
    </section>
  )
}

export default AssistiveTechInfo