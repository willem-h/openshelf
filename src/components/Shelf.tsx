import ShelfBook from "./ShelfBook"

function Shelf({ id: shelfId, name, books }) {
  return (
    <>
      <h1 className="text-2xl">{ name }</h1>
      <ul className="bg-white">
        {
          books.map(({ id, title, author, link }) => (
            <ShelfBook shelfId={shelfId} id={id} title={title} author={author} />
          ))
        }
      </ul>
    </>
  )
}

export default Shelf
