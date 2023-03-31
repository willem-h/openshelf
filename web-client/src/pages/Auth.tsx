import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const baseURL = 'https://wxt9njnxk9.execute-api.ap-southeast-2.amazonaws.com/dev/'

function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const hashParams = new URLSearchParams(location.search);
  const code = hashParams.get('code');
  console.log('Location:', location)
  console.log('Code:', code)

  // const fetchTokens = async () => {
  //   try {
  //     const response = await fetch(baseURL + 'auth', {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ code })
  //     })
  //     const data = await response.json()
  //     const accessToken = data.get('accessToken')
  //     console.log('Access token', accessToken)
  //   }
  //   catch (error) {
  //     console.error(error)
  //   }
  // }

  useEffect(() => {
    // fetchTokens()
    navigate('/')
  }, [])

  return <>Signing in...</>
}

export default Auth
