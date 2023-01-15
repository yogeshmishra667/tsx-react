import { useState } from 'react'

type Props = {}
const IsLoggedin = (props: Props) => {
  const [isLoggedin, setIsLoggedin] = useState(false)
  const handleLogin = () => {
    setIsLoggedin(true)
  }
  const handleLogout = () => {
    setIsLoggedin(false)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>user is {isLoggedin ? 'loggedIn' : 'logged out'}</div>
    </div>
  )
}

export default IsLoggedin
