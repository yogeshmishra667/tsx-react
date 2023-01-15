import React from 'react'

type containerProps = {
  style: React.CSSProperties
}

const Container = (props: containerProps) => {
  return <div style={props.style}>text is cool in the container</div>
}

export default Container
