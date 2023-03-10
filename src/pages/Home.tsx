import { useState } from 'react'

import Shelf from '../components/Shelf'

function Home() {
  const [shelves, setShelves] = useState([
    {
      id: 1,
      title: "Loaned",
      books: [
        {
          id: 1,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
        },
        {
          id: 2,
          title: "Mere Christianity",
          author: "C.S. Lewis",
        },
      ]
    },
    {
      id: 2,
      title: "Borrowed",
      books: [
        {
          id: 3,
          title: "Silmarilion",
          author: "J.R.R. Tolkien",
        },
      ]
    },
    {
      id: 3,
      title: "Wanted",
      books: [
        {
          id: 4,
          title: "1984",
          author: "George Orwell",
        },
      ]
    },
    {
      id: 4,
      title: "Owned",
      books: [
        {
          id: 5,
          title: "Pride and Prejudice",
          author: "Jane Austen",
        },
        {
          id: 6,
          title: "Harry Potter",
          author: "J.K. Rowling",
        },
        {
          id: 7,
          title: "The Martian",
          author: "Andy Weir",
        },
      ]
    }
  ])

  return (
    <div className="h-screen bg-slate-100">

      {shelves.map(({ id, title, books }) => (
        <Shelf id={id} name={title} books={books} />
      ))}

    </div>
  )
}

export default Home
