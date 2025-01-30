function Option({
  value
}) {
  return (
   
        value.map(item => (
          <option key={item.value} value={item.value}>{item.name || item.value}</option>
        ))
      
  )
}

export default Option