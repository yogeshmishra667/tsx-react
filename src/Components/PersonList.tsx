import React from 'react'

type personListProps = {
  name: {
    first: string
    last: string
  }[]
}

export const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.name.map(person => (
        <p>{person.first}</p>
      ))}
    </div>
  )
}
