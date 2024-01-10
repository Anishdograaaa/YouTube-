import React, { useEffect } from 'react'
import Chatmsg from './Chatmsg'
import { useDispatch, useSelector } from 'react-redux'
import { generateRandomname, makeid } from '../utils/helper';
import { addchats } from '../utils/chatSlice';

const Chatbox = () => {
  const dispatch = useDispatch();
  const messageses = useSelector(store=>store.chat.messages)
  useEffect(()=>{
      const i = setInterval(()=>{
            
            dispatch(addchats({
              name : generateRandomname(),
              message: makeid(20)
            }))

      },2000)

      return () => clearInterval(i);
  },[])
  return (
    
  <div className='w-full overflow-y-scroll flex flex-col'>{messageses.map((c,index)=>
    
        <Chatmsg key={index} text = {c.message} name = {c.name}/>
    )}
    </div>
     
  
    
    
    
  )
}

export default Chatbox