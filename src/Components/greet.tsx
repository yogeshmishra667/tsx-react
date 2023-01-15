import React from 'react'

type greetProps = {
  name: string
}

export default function greet(props: greetProps) {
  return (
    <div>
      <p> hello {props.name}</p>
    </div>
  )
}