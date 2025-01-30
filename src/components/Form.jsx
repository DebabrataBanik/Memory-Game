import { Select } from "./index"

function Form({
  startGame,
  handleChange
}) {
  return (
    <div>
      <form onSubmit={startGame}>
        <Select handleChange={handleChange} />
        <button className="btn">Start Game</button>
      </form>
    </div>
  )
}

export default Form