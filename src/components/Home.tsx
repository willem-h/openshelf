import { useState } from 'react'

import Shelf from './Shelf'

function Home() {
  const [loanedBooks, setLoanedBooks] = useState([
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Mere Christianity", author: "C.S. Lewis" },
  ])

  const borrowedBooks = [
    { title: "Silmarilion", author: "J.R.R. Tolkien" },
  ]

  const wantedBooks = [
    { title: "1984", author: "George Orwell" },
  ]

  const ownedBooks = [
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "The Martian", author: "Andy Weir" },
  ]

  return (
    <div className="h-screen bg-slate-100">

      <Shelf name="Loaned" books={loanedBooks} />

      <Shelf name="Borrowed" books={borrowedBooks} />

      <Shelf name="Wanted" books={wantedBooks} />

      <Shelf name="Owned" books={ownedBooks} />

    </div>
  )
}

export default Home
