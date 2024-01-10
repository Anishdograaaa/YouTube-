import React from 'react'

const Chatmsg = ({text,name}) => {
  return (
    <div className='flex items-center ml-2 shadow-md p-1'>
        <div>
        <img className='h-8' alt="user" src='https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png'/>
        </div>
        <span className='px-2 font-bold'>{name}</span>
        <span>{text}</span>
    </div>
  )
}

export default Chatmsg