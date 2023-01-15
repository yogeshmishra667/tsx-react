import React from 'react'

type inputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: inputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    console.log(event.target.value)
  }
  return (
    <div>
      <input type="text" value={props.value} onChange={handleInputChange} />
    </div>
  )
}

export default Input
