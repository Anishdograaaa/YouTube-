import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'


const Buttonlist = () => {
  const menu = useSelector(store => store.app.isMenuOpen)
  
  const list = ["All","Sports","Kids","Anime","Bollywood","Cricket","News","Hollywood","Soccer","Pop","Indie","English","Hindi","Live","Gaming","TV","New","General"]
  return (
  <div className={menu? " w-12/12 m-1" :"m-1  w-screen"}>
    <div className='flex overflow-auto ml-8 pr-4 no-scrollbar'>
    {list.map(lis =>  <Button name={lis}/>)}
    </div>
  </div>
    
  ) 
}

export default Buttonlist