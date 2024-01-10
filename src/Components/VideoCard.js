import React from 'react'

const VideoCard = ({item}) => {
    
    const {title,channelTitle,thumbnails} = item.snippet
    const {viewCount} = item.statistics
  return (
    <div className='bg-gray-200 rounded-lg w-[290px] h-[290px] m-2'>
         <div className='justify-center'>
            <img className='rounded-lg p-1' alt="thumbnail" src={thumbnails.medium.url}/>
         </div>
         <div>
            <h2 className='text-sm font-bold px-2 pt-1 break-words'>
                {title}
            </h2>
            <p className='font-bold text-gray-600 pl-2 text-sm'>{channelTitle}</p>
         </div>
         <div>
            <p className='font-bold text-gray-600 pl-2 text-sm pb-2'>{viewCount} views</p>

         </div>
    </div>
    
  )
}

export default VideoCard