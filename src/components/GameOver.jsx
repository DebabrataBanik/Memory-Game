import { useRef, useEffect } from "react"

function GameOver({
  handleClick
}) {

  const sectionRef = useRef(null)

  useEffect(() => {
    sectionRef.current.focus()
  },[])

  return (
    <div className="wrapper wrapper--accent" ref={sectionRef} tabIndex={-1}>
      <p className="p--large">Great job! You've matched all the memory cards.</p>
      <button className="btn" onClick={handleClick}>Play Again</button>
    </div>
  )
}

export default GameOver