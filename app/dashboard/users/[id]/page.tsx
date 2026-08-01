import React from 'react'

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
  return (
    <div>User Page: {id}</div>
  )
}

export default UserPage