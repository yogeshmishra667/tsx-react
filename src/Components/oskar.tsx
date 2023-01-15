import React from 'react'

type Props = {
  children: React.ReactNode
}

const oskar = (props: Props) => {
  return <div>{props.children}</div>
}

export default oskar
