import React from 'react'

const Comment = ({data}) => {
  const {name,comment} = data
  return (
    <div className='flex my-3 py-3 bg-gray-200 rounded-lg'>
       <div>
        <img  className='w-8 h-8 ml-2' alt='user' src="https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png"/>
       </div>
       <div>
        <h3 className='px-2 font-bold'>{name}</h3>
        <h3 className='px-2'>{comment}</h3>
       </div>
    </div>
  )
}

export default Comment