import React from 'react'

type Props = {
  status: 'loading' | 'success' | 'error'
}

export const Status = (props: Props) => {
  if (props.status === 'loading') {
    ;<p>Loading....</p>
  } else if (props.status === 'success') {
    ;<p>Success</p>
  } else if (props.status === 'error') {
    ;<p>Error</p>
  }

  return (
    <div>
      <p>Status - {props.status}</p>
    </div>
  )
}
