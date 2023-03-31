import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const baseURL = 'https://api.openshelf.willemhandreck.com/'
const initialState = {
  title: 'Loading...',
  author: ''
}

function Book() {
  const { bookId } = useParams()
  const [book, setBook] = useState(initialState)

  const fetchBook = async () => {
    try {
      const response = await fetch(baseURL + `books/${bookId}`)
      const data = await response.json()
      setBook(data)
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBook()
  }, [])

  return (
    <div className="h-screen bg-slate-100">
      <h1 className="text-2xl">{book.title}</h1>
      <h2>By {book.author}</h2>
      <Link to={'/'}>← Home</Link>
    </div>
  )
}

export default Book
