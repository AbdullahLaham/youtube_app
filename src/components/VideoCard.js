import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {AiFillCheckCircle} from 'react-icons/ai';
const VideoCard = ({data}) => {
    const {snippet: video} = data;
    console.log('u', data)
    const navigate = useNavigate();
  return (
    <Link to={`/video/${data?.snippet?.title}`} className=' w-[16.3rem] mt-[.5rem] flex flex-col cursor-pointer ml-[4rem] md:ml-[.5rem] md, sm:mx-auto'>
      {/* {video.channelTitle} */}
      <img className='w-[100%] ' src={video.thumbnails.high.url} />
      <p className='w-[12rem] h-[3.2rem] overflow-y-hidden'>{video.title}</p>
      <div className='flex items-center  '>
        <p >{video.channelTitle}</p>
        <AiFillCheckCircle className='ml-[.8rem]'/>
      </div>
    </Link>
  )
}

export default VideoCard
