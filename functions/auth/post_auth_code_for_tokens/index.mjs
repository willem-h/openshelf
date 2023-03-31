const clientId = process.env.COGNITO_CLIENTID
const clientSecret = process.env.COGNITO_CLIENTSECRET
const redirectURI = ''
const tokenEndpoint = 'https://auth.openshelf.willemhandreck.com/oauth2/token'

export const handler = async (event) => {
  const code = event.queryStringParameters.code

  const data = {
    grant_type: 'authorization_code'
  }


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