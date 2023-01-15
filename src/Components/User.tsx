import { useState } from 'react'

type userProps = {
  name: string
  email: string
}
const User = (props: userProps) => {
  const [isUser, setIsUser] = useState<userProps | null>(null)
  const handleLogin = () => {
    setIsUser({
      name: 'john',
      email: 'john@gmail.com',
    })
  }
  const handleLogout = () => {
    setIsUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        user is {isUser?.name} and email is {isUser?.email}
      </div>
    </div>
  )
}

export default User
