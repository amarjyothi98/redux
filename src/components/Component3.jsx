import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/userSlice';

const Component3 = () => {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(remove());
  };  

  return (
    <div>
      <h3>third component</h3>

      <p>here also {user.name}</p>
      <p>kuch bhi hehe: {user.anything}</p>

      <button onClick={handleRemove}>clear everything</button>
    </div>
  )
}

export default Component3
