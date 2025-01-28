function Form({
  startGame
}) {
  return (
    <form onSubmit={startGame}>
      <button className="btn">Start Game</button>
    </form>
  )
}

export default Form