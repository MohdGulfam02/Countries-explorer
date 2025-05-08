import React from 'react'
import { useRouteError } from 'react-router'

export default function ErrorPage() {
    const error = useRouteError();

  return (
    <h1>Page not found! {error.status}</h1>
  )
}
