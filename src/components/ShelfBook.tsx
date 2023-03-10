import { Link } from "react-router-dom"

function ShelfBook({ shelfId, id, title, author }) {
  return (
    <Link to={`/shelf/${shelfId}/books/${id}`}>
      <li>
        { title } by { author }
      </li>
    </Link>
  )
}

export default ShelfBook
