import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ChannelCard = ({data, url='', title=''}) => {
    const {snippet: channel} = data ? data : {};
  
  // if (!data) return null;
  
  return (
    <Link to={data  ? `/channel/${channel.channelId}` : ''}>
      <div className={data ? 'w-[16.3rem] mx-[.5rem] flex flex-col justify-between cursor-pointer mb-[1rem] mt-[.5rem]' : 'w-[16.3rem] mx-[.5rem] md:flex flex-col justify-between cursor-pointer mb-[1rem] mt-[.5rem] absolute -bottom-[7rem] left-[35%] hidden '}>
        <img className='w-[13rem] h-[13rem] rounded-[50%] m-auto object-cover  ' src={data ? channel.thumbnails.high.url : url} />
        <div className='flex items-center justify-center w-[13rem] m-auto mt-[.5rem]'>
          <p >{data ? channel.channelTitle : title}</p>
          <AiFillCheckCircle className='ml-[.8rem]'/>
        </div>
      </div>
    </Link>
  )
}

export default ChannelCard
