function Form({
  startGame
}) {
  return (
    <form onSubmit={startGame}>
      <button>Start Game</button>
    </form>
  )
}

export default Form