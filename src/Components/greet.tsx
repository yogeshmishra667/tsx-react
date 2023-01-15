import React from 'react'

type greetProps = {
  name: string
  age: number
  isLoggedin: boolean
}

export default function greet(props: greetProps) {
  return (
    <div>
      {props.isLoggedin ? (
        <p>
          hello {props.name} your age is {props.age}
        </p>
      ) : (
        <p>hello guest</p>
      )}
    </div>
  )
}
