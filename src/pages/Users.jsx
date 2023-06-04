import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

export const Users = () => {
    const setTitle = useOutletContext()
  useEffect(() => {
    setTitle("Users")
  }, [])
  return (
    <div>Users</div>
  )
}
