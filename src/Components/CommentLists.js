import React from 'react'
import Comment from './Comment'

const CommentLists = ({data}) => {
  return data.map((c,index)=><div key={index}>
    < Comment  data={c}/>
    <div className='pl-5 ml-5 border border-l-black'>
      <CommentLists data={c.reply}/>
    </div>
    </div>)
}

export default CommentLists