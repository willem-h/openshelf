import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const baseURL = 'https://wxt9njnxk9.execute-api.ap-southeast-2.amazonaws.com/dev/'

function Home() {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    try {
      const response = await fetch(baseURL + 'books')
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

      <h1 className="text-2xl">Books</h1>
      <ul className="bg-white">
        {
          books.map(({ id, title, author }) => (
            <Link key={id} to={`/books/${id}`}>
              <li>
                { title } by { author }
              </li>
            </Link>
          ))
        }
      </ul>

    </div>
  )
}

export default Home
