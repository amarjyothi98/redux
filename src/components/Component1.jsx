import React, { useState } from 'react'

const Component1 = () => {

    const [name, setName] = useState('');
    const [anything, setAnything] = useState('');

  return (
    <div>
      <input type="text" placeholder='name' onChange={e => setName(e.target.value)}/>
      <input type="text" placeholder='anthing else' onChange={e => setAnything(e.target.value)}/>

      <p>{name}</p>
      <p>{anything}</p>
    </div>
  )
}

export default Component1
