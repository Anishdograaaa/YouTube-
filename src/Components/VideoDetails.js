import React, { useState } from 'react'
import Comment from './Comment'
import CommentLists from './CommentLists'

const comments = [{
    name:"Lorem",
    comment:"lorem das fjnbf kofkbslg jhkgld",
    reply:[{

        name:"Lorem",
        comment:"lorem das fjnbf kofkbslg jhkgld",
        reply:[{
              name:"Lorem",
              comment:"lorem das fjnbf kofkbslg jhkgld",
              reply:[]
    }]
    },
    {
        name:"Lorem",
        comment:"lorem das fjnbf kofkbslg jhkgld",
        reply:[]
    },{
        name:"Lorem",
        comment:"lorem das fjnbf kofkbslg jhkgld",
        reply:[
            {
                name:"Lorem",
                comment:"lorem das fjnbf kofkbslg jhkgld",
                reply:[
                    {
                        name:"Lorem",
                        comment:"lorem das fjnbf kofkbslg jhkgld",
                        reply:[]
                    },
                    {
                        name:"Lorem",
                        comment:"lorem das fjnbf kofkbslg jhkgld",
                        reply:[]
                    }
                ]
            }
        ]
    }
    ]
},
{
        name:"Lorem",
        comment:"lorem das fjnbf kofkbslg jhkgld",
        reply:[]
},{
    name:"Lorem",
        comment:"lorem das fjnbf kofkbslg jhkgld",
        reply:[]
},{
        name:"Lorem",
        comment:"lorem das fjnbf kofkbslg jhkgld",
        reply:[]
},{
        name:"Lorem",
        comment:"lorem das fjnbf kofkbslg jhkgld",
        reply:[]
},{
        name:"Lorem",
        comment:"lorem das fjnbf kofkbslg jhkgld",
        reply:[]
}]


const VideoDetails = ({li}) => {
    
    const { channelTitle,title,description } = li.snippet 
    const { viewCount,likeCount,commentCount } = li.statistics 
    const [desc,setdesc] = useState(false)
    const [tool,settool] = useState(false)
    
    
    
    
    const toggledesc = () => {
             setdesc(!desc)
    }
    const toggletool = () => {
             settool(!tool)
    }
    const toggletoolblur = () => {
             settool(false)
    }
  return (
    <div className='p-2 w-[1050px]'>
        <div className=''>
            <h1 className='text-lg font-bold'>{title}</h1>
        </div>
        <div className=' flex justify-between py-2'>
            <div className='flex'>
                <div>
                <h3 className='font-bold'>{channelTitle}</h3>
                <div>
                    <h5 className='text-[10px]'>1.2M subscribers</h5>
                </div>
                </div>
                
                <button className='mx-4 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-500'>Subscribe</button>
            </div>
            <div className='flex'>
                
                <button className='py-1 border border-black hover:bg-gray-300 px-2 rounded-full text-black'>👍{likeCount} <span className=''>|</span> 👎</button>
                <button className='py-1 border border-black hover:bg-gray-300 px-5 rounded-full text-black mx-2'>Share</button>
                <button className='py-1 border border-black hover:bg-gray-300 px-2 rounded-full text-black mx-2'>Download</button>
                <span><button onClick={toggletool}
                 className='py-1 border border-black hover:bg-gray-300 px-2 rounded-full text-black'
                //  onFocus={toggletool}
                 onBlur={toggletoolblur} >...
                {tool && <div className='border absolute mt-2 bg-slate-50 w-[150px] p-1 rounded-lg'> 
                    <ul>
                        <li className='border-b p-1 hover:bg-gray-200'>Clip</li>
                        <li className='border-b p-1 hover:bg-gray-200'>Save</li>
                        <li className='border-b p-1 hover:bg-gray-200'>Report</li>
                    </ul>
                </div>}
                </button></span>
                
            </div>
        </div>
        <div className='bg-gray-200 p-2 rounded-lg'>
            <div>
                <h3 className='font-bold'>{viewCount} views</h3>
            </div>
            <div>
                {desc?description:description.slice(0,description.length/5)}<span className='font-bold cursor-pointer' onClick={toggledesc}>{desc?"Show less":"... Show more"}</span>
            </div>
        </div>
        <div className='pt-5'>
            <h3 className='font-bold'>{commentCount} Comments</h3>
            <div>
                <CommentLists data={comments}/>
            </div>
            
        </div>
    </div>
  )
}

export default VideoDetails