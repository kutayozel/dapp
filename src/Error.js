import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      Error Page
      Return to <Link to="/">Home Page</Link>
    </div>
  )
}
