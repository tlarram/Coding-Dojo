import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
      <p><Link to={'/author/add'}>Create Author</Link></p>
    </div>
  )
}

export default ErrorPage