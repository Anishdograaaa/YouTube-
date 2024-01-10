import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)
  if (!isMenuOpen) return null;
  return (
  <div className='sticky top-[6px] p-2 w-48 shadow-lg h-screen'>
    
      <ul className='pt-4 pb-5 border-b border-gray-300 ' >
        <Link to="/"><li className='p-2'>Home</li></Link>
        <li className='p-2'>Shorts</li>
        <li className='p-2'>Subscription</li>
      </ul>
      <h3 className='font-bold pt-4'>You</h3>
      <ul className='pb-5 border-b border-gray-300 '>
        
        <li className='p-2'>Your Channel</li>
        <li className='p-2'>Your Videos</li>
        <li className='p-2'>History</li>
      </ul>
     
      <h3 className='font-bold pt-4'>Subscriptions</h3>
      <ul className='border-b border-gray-300 pb-5'>
        <li className='p-2'>Mr.Beast</li>
        <li className='p-2'>Netflix</li>
        <li className='p-2'>Pewewidie</li>
      </ul>
     
  </div>
    
  )
}

export default Sidebar