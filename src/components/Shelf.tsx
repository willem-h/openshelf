import ShelfBook from "./ShelfBook"

function Shelf({ name, books }) {
  return (
    <>
      <h1 className="text-2xl">{ name }</h1>
      <ul className="bg-white">
        {
          books.map(({ title, author }) => (
            <ShelfBook title={title} author={author} />
          ))
        }
      </ul>
    </>
  )
}

export default Shelf
