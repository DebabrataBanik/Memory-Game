import { useRef, useEffect } from "react"

function ErrorCard({
  resetError
}) {
  const sectionRef = useRef(null)

  useEffect(() => {
    sectionRef.current.focus()
  },[])

  return (
    <div className="wrapper wrapper--accent" ref={sectionRef} tabIndex={-1}>
      <p className="p--large">Sorry, there was an error.</p>
      <p className="p--regular">
        Please come back later or click the button below to try again.
      </p>
      <button className="btn" onClick={resetError}>Restart Game</button>
    </div>
  )
}

export default ErrorCard