import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { API_KEY, YT_SEARCH_API } from '../utils/constant';
import { cacheSearch } from '../utils/searchSlice';
import { addsearchItems } from '../utils/searchitemSlice';

const Head = () => {
  const dispatch = useDispatch();
  const searchcache = useSelector((store)=>store.search)
  const [searchvalue,setsearchvalue ] = useState("");
  const [suggestvalue,setsuggestvalue ] = useState([]);
  const [showsuggestion,setshowsuggestion ] = useState(false);
  const [suggest,setsuggest] = useState("");
  useEffect(()=>{
      
      const timer = setTimeout(()=>{
      if (searchcache[searchvalue]){
        setsuggestvalue(searchcache[searchvalue])
      }else{
        getSuggestions()
      }},200);
      return ()=>{
        clearTimeout(timer)
      }
      
  },[searchvalue])

  useEffect(()=>{
    togglesuggest();
  },[])
  
  
  const getSuggestions = async() => {
    const data = await fetch(YT_SEARCH_API+searchvalue);
    const json = await data.json()
    setsuggestvalue(json[1])
    dispatch(cacheSearch({
      [searchvalue]:json[1]
    }))    
  }

  const togglesuggest = async ()=>{
    const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+{suggest}+"&type=video&key="+API_KEY);
    const json = await data.json()
    // console.log(json)
    dispatch(addsearchItems(json.items))
    // console.log(suggest)
  }

  const togglemenu = ()=>{
        dispatch(toggleMenu())
  }
  return (
    <div className=' grid grid-flow-col p-0.5 m-0 shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-14 cursor-pointer' alt = "hamburger" src='https://icon-library.com/images/hamburger-menu-icon-png-white/hamburger-menu-icon-png-white-15.jpg'
            onClick={togglemenu}/>
            <img className='h-14 cursor-pointer' alt = "logo" src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg'/>
        </div>
        
        <div className='col-span-10 py-3 px-[25%]'>
          <div>
            <input type='text' className= ' border border-gray-400 w-[75%] py-1 px-4 rounded-l-full' value={searchvalue} 
            onChange={(e)=>setsearchvalue(e.target.value)}
            onFocus={()=>setshowsuggestion(true)}
            onBlur={()=>setshowsuggestion(false)}/>
            <button className='border p-1 border-gray-400 rounded-r-full'
             onClick={()=>{
              setsuggest(searchvalue)
              togglesuggest()
                              }}>search</button>
            </div>
           {showsuggestion && ( <div className='absolute bg-slate-50 w-[30%] rounded-xl'>
          <ul className=''>
            {suggestvalue.map((s)=><li key={s} onClick={()=>{setsearchvalue(s)}}
           
            className='py-2 px-3 rounded-xl border-b  text-base hover:bg-gray-200'>{s}</li>)}
          </ul>
        </div>)}
        </div>
        
       
        <div className='col-span-1 pt-2'>
            <img className='h-8' alt="user" src='https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png'/>
        </div>
    </div>
  )
}

export default Head