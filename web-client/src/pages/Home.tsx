import { useEffect, useState } from 'react'

import Shelf from '../components/Shelf'

function Home() {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://wxt9njnxk9.execute-api.ap-southeast-2.amazonaws.com/dev/books')
      const data = await response.json()
      setBooks(data)
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className="h-screen bg-slate-100">

      <Shelf id={1} name={'Books'} books={books} />

    </div>
  )
}

export default Home
