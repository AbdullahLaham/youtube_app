import logo from './logo.svg';
import {Routes, Route, useNavigte} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Layout from './components/Videos';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
import Videos from './components/Videos';
import ChannelVideos from './components/ChannelVideos';
import VideoDetails from './components/VideoDetails';
import SearchFeed from './components/SearchFeed';
function App() {
  useEffect(() => {
    document.title = "Youtube"; 
  }, []);
  return (
    <div className='flex flex-col justify-start max-w-[100%] bg-[#464343]'>
      <div className='w-full h-[2rem]'>
        <Header />
      </div>
      <div className='flex  h-[90vh] mt-[1rem]'>
        <Sidebar />
        <div className='flex flex-col justify-start '>
            <Menu />
            <Routes>
              <Route path='/' element={<Videos />} />
              <Route path='login' element={<Login />} />
              <Route path='/channel/:id' element={<ChannelVideos />} />
              <Route path='/video/:id' element={<VideoDetails />} />
              <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </div>
      </div>
    </div> 
  );
}

export default App;
