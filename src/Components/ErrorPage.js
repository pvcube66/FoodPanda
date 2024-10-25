import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const err=useRouteError();
    console.log(err)
  return (
    <div>
        <h1>{err.status+" error"}</h1>
        <h1>Are you lost baby girl??</h1>
      
    </div>
  )
}

export default ErrorPage
