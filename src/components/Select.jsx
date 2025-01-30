import { data } from "../data"
import Option from "./Option"

function Select({
  handleChange
}) {
  return (

        Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <label htmlFor={key}>{key.charAt(0).toUpperCase()
              + key.slice(1)}: </label>
            <select id={key} name={key} onChange={handleChange}>
              <Option value={value} />
            </select>
          </div>
      )) 
  )
}

export default Select