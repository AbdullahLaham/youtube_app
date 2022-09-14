import React, { useContext } from 'react'
import {Store} from '../utils/store';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import Menu from './Menu';
const Layout = () => {
  const {state, dispatch} = useContext(Store);
  const {videos} = state;
  console.log('videos', videos);

  return (
    <div className='flex flex-wrap items-center  max-w-[100%] w-[100%] bg-[#464343] text-[#fff]  '>
        {videos?.items?.map((item, i) => {
          return (
            <div className='flex flex-col items-start'>
              {item?.id?.channelId && <ChannelCard data={item} />}
              {item?.id?.videoId && <VideoCard data={item} />}
            </div>
          )
        })}
    </div>
  )
}

export default Layout
