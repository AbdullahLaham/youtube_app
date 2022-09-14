import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchData';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
const ChannelVideos = () => {
  const {id} = useParams();
  console.log('id', id);
  const [videos, setVideos] = useState([]);
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetchFromApi(`channels?part=snippet,statistics&id=${id}`);
      const data2 = await fetchFromApi(`search?part=snippet&channelId=${id}`)
      setVideos(data2?.items)
      setData(data1);
      console.log('data1' ,data1.items[0]);
      setData(data1.items[0]);
    }
    fetchData();
  }, []);
  console.log('data', data?.brandingSettings
  ?.image.bannerExternalUrl, data?.brandingSettings
  ?.channel?.title)
  return (
    <div className='flex flex-wrap w-[100%] bg-[#464343] text-[#fff] '>
        <header className='from-slate-200 w-[100%] h-[25rem] relative mb-[6rem]'>
          <img src='https://media.istockphoto.com/photos/sunset-backgrounds-picture-id1068270866?k=20&m=1068270866&s=170667a&w=0&h=FTLGG5nI2lWZ4C2bhN39YOPji7Lhasx3XiWAh78o3P8=' className='w-[100%] max-h-[100%] ' />
          <ChannelCard url={data?.brandingSettings
            ?.image.bannerExternalUrl} title={data?.brandingSettings
            ?.channel?.title}  />
        </header>

        {videos?.map((item, i) => {
          return (
            <div className=''>
              {/* {item?.id?.channelId && <ChannelCard data={item} />} */}
              {item?.id?.videoId && <VideoCard data={item} />}
            </div>
          )
        })}
    </div>
  )
}

export default ChannelVideos
