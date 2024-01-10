import React, { useEffect, useState } from 'react'
import { YT_API } from '../utils/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const menu = useSelector(store => store.app.isMenuOpen)
  // const items = useSelector(store=>store.searchitem.searchitem)
  const [videodata,setvideodata] = useState([]);
  useEffect(()=>{
    // if (items != []){
    //    setvideodata(items)
    // }
    
      getdata()
    
    
  
      
    
      
  },[])
  const getdata = async()=>{
     const data = await fetch(YT_API);
     const json = await data.json()
     console.log(json)
     setvideodata(json.items)
  }

  return (
    <div className={ menu?' justify-around w-fit flex flex-wrap pl-6 ':'flex flex-wrap pl-6  w-screen justify-around'}>
      {(videodata.map((it)=><Link to={"/watch?v="+it.id}><VideoCard key={it.id} item = {it}/></Link>))}
       
    </div>
  )
}

export default VideoContainer