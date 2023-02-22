import React, { useEffect } from 'react';

export const Boutom = (props) => {
  return (
    <button className='bg-pink-400 text-white font-bold rounded px-2 py-1' onClick={props.onClick}>{props.name}</button>
  )
}
