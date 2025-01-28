function GameOver({
  handleClick
}) {
  return (
    <div className="wrapper wrapper--accent">
      <p className="p--large">You've matched all the memory cards.</p>
      <button onClick={handleClick}>Play Again</button>
    </div>
  )
}

export default GameOver