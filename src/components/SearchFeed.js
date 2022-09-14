import React, { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchData';
import { Store } from '../utils/store';
import { useParams } from 'react-router-dom';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
const SearchFeed = () => {
  const {state, dispatch} = useContext(Store);
  const {searchTerm} = useParams();
    const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromApi(`search?part=snippet&q=${searchTerm}`);
      setSearchResult(data?.items);
    //   dispatch({type: 'ADD_VIDEOS', payload: data,})
    console.log('data', data);
    }
    fetchData();
  }, [searchTerm]);

  return (
    <div className='flex flex-wrap w-[100%] bg-[#464343] text-[#fff]  items-start'>
        {searchResult?.map((item, i) => {
          return (
            <div className=''>
              {item?.id?.channelId && <ChannelCard data={item} />}
              {item?.id?.videoId && <VideoCard data={item} />}
            </div>
          )
        })}
    </div>
  )
}

export default SearchFeed;
