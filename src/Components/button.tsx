import React from 'react'

type btnProps = {
  handleClick: () => void
}

const button = (props: btnProps) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click me</button>
    </div>
  )
}

export default button
