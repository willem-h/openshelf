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
    console.log('connected')
}
catch (err) {
    console.error('connection error', err.stack)
}

export const handler = async (event) => {
    try {
        const result = await client.query('SELECT * FROM books')
        return result.rows
    }
    catch (err) {
        console.error('query error', err.stack)
        return {}
    }
}