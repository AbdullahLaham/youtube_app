import React, { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchData';
import { Store } from '../utils/store';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'
import { AiFillCheckCircle } from 'react-icons/ai';
import VideoCard from './VideoCard';
const VideoDetails = () => {
  const {state, dispatch} = useContext(Store);
  const {id} = useParams();
    const [videoId, setVideoId] = useState('');
    const [videoDetails, setVideoDetails] = useState({});
    const [relatedVideos, setRelatedVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        const data1 = await fetchFromApi(`search?part=snippet&q=${id}`);
        const data2 = await fetchFromApi(`videos?part=contentDetails,snippet,statistics&id=${data1.items[0].id.videoId}`)
        setVideoId(data1.items[0].id.videoId);
        setVideoDetails(data2.items[0].snippet);
        setRelatedVideos(data1.items);
        console.log('data2data2', data1.items)
        //   dispatch({type: 'ADD_VIDEOS', payload: data,})
    }
    fetchData();
  }, [id]);
  return (
    <div className='mt-[.5rem] flex items-start flex-col justify-between lg:flex-row bg-[#464343] lg:min-h-[600vh] text-[#fff] min-w-[100%]'>
        <div className='w-[45%] md:ml-[5rem] '>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} className='min-w-[100%] h-[20rem]' controls />
            <p className='text-2xl'>{videoDetails.title}</p>
            <div className='flex items-center mt-[1rem] '>    
                <p >{videoDetails.channelTitle}</p>
                <AiFillCheckCircle className='ml-[.8rem]'/>
            </div>
           
        </div>
        <div className='max-w-[100%] md:ml-[5rem] mt-[2rem] mr-[3rem] lg:min-h-[600vh] flex lg:flex-col flex-row flex-wrap justify-end'>
            {relatedVideos.map((item) => {
                return (
                    <VideoCard data={item} />
                )
            })}
        </div>
    </div>
  )
}

export default VideoDetails;
