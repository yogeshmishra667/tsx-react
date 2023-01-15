import React from 'react'

type btnProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, Id: number) => void
}

const button = (props: btnProps) => {
  return (
    <div>
      <button onClick={event => props.handleClick(event, 1)}>Click me</button>
    </div>
  )
}

export default button
