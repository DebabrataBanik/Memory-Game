import { decodeEntity } from "html-entities"

function MemoryCard({
  emojiArray = []
}) {

  return (
    <ul>
      {
        emojiArray.map((each, index) =>
          <li className="card" key={index}>
            {decodeEntity(each.htmlCode[0])}
          </li>
        )
      }
    </ul>
  )
}

export default MemoryCard