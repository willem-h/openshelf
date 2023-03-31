import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const baseURL = 'https://api.openshelf.willemhandreck.com/'
// const redirectURI = 'https://auth.openshelf.willemhandreck.com/oauth2/authorize?client_id=fctdccmihu7nns0ji0dbggnjk&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fopenshelf.willemhandreck.com'
const redirectURI = 'https://auth.openshelf.willemhandreck.com/oauth2/authorize?client_id=fctdccmihu7nns0ji0dbggnjk&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost:5173/auth'

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

      <Link to={redirectURI}>Sign In</Link>

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
