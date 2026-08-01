import Link from 'next/link'
import React from 'react'

const UsersPage = () => {
  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        <Link href={"/dashboard/users/1"}><li>User 1</li></Link>
        <Link href={"/dashboard/users/2"}><li>User 2</li></Link>
        <Link href={"/dashboard/users/3"}><li>User 3</li></Link>

      </ul>
    </div>
  )
}

export default UsersPage