import { decodeEntity } from "html-entities"

function MemoryCard({
  emojiArray = [],
  handleClick
}) {

  return (
    <ul>
      {
        emojiArray.map((each, index) =>
          <li
            onClick={() => handleClick(each.name, index)}
            className="card" key={index}>
            {decodeEntity(each.htmlCode[0])}
          </li>
        )
      }
    </ul>
  )
}

export default MemoryCard