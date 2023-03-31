import pg from 'pg'
const { Client } = pg

const client = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
})

try {
    client.connect()
    console.log('Connected to Postgres')
}
catch (err) {
    console.error('Error connecting to Postgres', err.stack)
}

export const handler = async (event) => {
    try {
        const result = await client.query(
            'SELECT * FROM books WHERE id=$1::int',
            [event.bookId]
        )
        return result.rows[0]
    }
    catch (err) {
        console.error('Postgres query error', err.stack)
        return {}
    }
}
