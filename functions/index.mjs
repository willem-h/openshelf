import pg from 'pg'
const { Client } = pg

const client = new Client({
    host: 'openshelf.cngodqq9yemw.ap-southeast-2.rds.amazonaws.com',
    port: 5432,
    user: 'postgres',
    password: 'gm8uvDHmGTKQevHQ8bZ'
})

client
    .connect()
    .then(() => console.log('connected'))
    .catch((err) => console.error('connection error', err.stack))

export const handler = async (event) => {
    const result = await client.query('SELECT 2')
    // const response = {
    //     statusCode: 200,
    //     text: "Hello 1",
    //     body: JSON.stringify(result)
    // }
    return result
}