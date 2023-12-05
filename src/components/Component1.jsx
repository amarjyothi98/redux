import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../redux/userSlice';

const Component1 = () => {

    const [name, setName] = useState('');
    const [anything, setAnything] = useState('');


    const UserName = useSelector(state => state.user.name);
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
      // e.preventDefault();
      dispatch(update({name, anything}));
    };

  return (
    <div>
      <input type="text" placeholder='name' onChange={e => setName(e.target.value)}/>
      <input type="text" placeholder='anthing else' onChange={e => setAnything(e.target.value)}/>

      <p>{name}</p>
      <p>{anything}</p>

      <button onClick={handleUpdate}>Update</button>
    
      <h1>{UserName ? UserName : "Nothing Yet"}</h1>
    </div>
  )
}

export default Component1
