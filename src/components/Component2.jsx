import React from 'react'
import { useSelector } from 'react-redux'

const Component2 = () => {

  const user = useSelector(state => state.user);

  return (
    <div>
      <h3>Component 2</h3>
      <p>Name: {user.name}</p>
      <p>kuch bhi: {user.anything}</p>
    </div>
  )
}

export default Component2
