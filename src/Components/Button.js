import React from 'react'

const Button = ({name}) => {
  return (
   <div className=''>
    <button className='px-3 py-1 bg-gray-300 rounded-lg my-2 mx-4  hover:bg-gray-600'>{name}</button>
   </div>
  )
}

export default Button