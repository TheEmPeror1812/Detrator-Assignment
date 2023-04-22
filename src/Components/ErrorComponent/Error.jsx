import React from 'react'
import "./Error.css"

function Error({error}) {
  return (
    <div className='Err'>
      <h1>{error}</h1>
    </div>
  )
}

export default Error