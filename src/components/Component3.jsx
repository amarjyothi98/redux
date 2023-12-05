import React from 'react'
import { useSelector } from 'react-redux'

const Component3 = () => {

  const user = useSelector(state => state.user);

  return (
    <div>
      <h3>third component</h3>

      <p>here also {user.name}</p>
      <p>kuch bhi hehe: {user.anything}</p>
    </div>
  )
}

export default Component3
