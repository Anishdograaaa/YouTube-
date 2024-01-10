import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closetoggleMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { API_KEY } from '../utils/constant';
import VideoDetails from './VideoDetails';
import Chatbox from './Chatbox';
import { addchats } from '../utils/chatSlice';

const Watch = () => {
    const dispatch = useDispatch();
    const [videoinfo,setvideoinfo] = useState({});
    const [searchParams] = useSearchParams();
    const [chatmsg,setchatmsg] = useState("");
    
    
    useEffect(()=>{
      // eslint-disable-next-line
        dispatch(closetoggleMenu())
        videodetail()
        
    },[])
    
  const videodetail = async()=>{
      const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+searchParams.get("v")+"&key="+API_KEY)
      const json = await data.json()
      // console.log(json.items[0])
      setvideoinfo(json.items)
    }
  
    
  return (
    <div className='m-2 flex w-full'>
      <div className='w-[1050px]'>
      <iframe width="1050"
      className='rounded-lg'
       height="615"
       src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?&si=jvVEFzsVzYTpkAtM"}
       title="YouTube video player"
       frameBorder="0"
       allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowFullScreen>
       </iframe>
       
       { (videoinfo.length > 0) && <div>
        <VideoDetails li={videoinfo[0]}/>
              </div>
        
       }

 </div>
 <div className='w-full'>
 <div className='w-full bg-slate-200 rounded-lg ml-2 h-[615px] overflow-y-auto no-scrollbar'>
  <Chatbox/>
  </div>    
  <form className='py-2 ml-2 ' onSubmit={
    (e)=>{e.preventDefault()
    dispatch(addchats({
      name:"Anish Dogra",
      message:chatmsg
    }))
     setchatmsg("")  
  }}>
    <input type='text' className='border border-black w-[360px] px-2' value={chatmsg} onChange={(e)=>setchatmsg(e.target.value)}></input>
    <button className='mx-2 bg-gray-300 px-2 py-1 rounded-lg' >Send</button>
  </form> 
  
 </div>
 
  
 
  
      
       
    </div>
  )
}

export default Watch