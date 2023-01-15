import React from 'react'

type PersonProps = {
  name: {
    first: string
    last: string
  }
}

export default function Person(props: PersonProps) {
  return (
    <div>
      <p>
        hello {props.name.first} {props.name.last}
      </p>
    </div>
  )
}
