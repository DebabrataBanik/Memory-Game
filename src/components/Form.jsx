function Form({
  startGame,
  handleChange
}) {
  return (
    <div>
      <form onSubmit={startGame}>
        <div>
          <label htmlFor="category">Category: </label>
          <select id="category" name="category" onChange={handleChange}>
            <option value="animals-and-nature">Animals and Nature</option>
            <option value="travel-and-places">Travel and Places</option>
            <option value="food-and-drink">Food and Drink</option>
            <option value="objects">Objects</option>
            <option value="symbols">Symbols</option>
          </select>
        </div>
        <div>
          <label htmlFor="count">Count: </label>
          <select id="count" name="count" onChange={handleChange}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
        <button className="btn">Start Game</button>
      </form>
    </div>
  )
}

export default Form