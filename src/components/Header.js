import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';
import {BsYoutube} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import {CgMenuGridR} from 'react-icons/cg';
import {RiVideoAddLine} from 'react-icons/ri';
import {IoIosNotificationsOutline} from 'react-icons/io';
const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = () => {
    setSearchTerm('');
    navigate(`/search/${searchTerm}`);

  }
  return (
    <div className='flex justify-between items-center h-[3rem] bg-[#212121] min-w-[100%] '>
      <div className='flex items-center w-[10%] justify-between mx-[1rem]'>
        <FiMenu style={{color: '#909090'}}/>
        <Link to='/' className='flex'>
            <BsYoutube style={{ color: "red", fontSize: "1.5em" }} />
            <p className='ml-1 text-[#ffffff]'>Premium</p>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className='flex items-center w-[30%] border-solid border-3 border-[#424242] rounded-[.5rem] px-2 text-[#fff]'>
        <input value={searchTerm} type='text' placeholder='search' className='h-[2rem] w-[90%] border-none outline-none bg-[#181818] px-2  'onChange={(e) => setSearchTerm(e.target.value)}  />
        <button type='submit' className='bg-[#424242] w-[2rem] h-[2rem] flex justify-center items-center '>
            <AiOutlineSearch style={{color: '#909090',}} />
        </button>
      </form>
      <div className='flex items-center w-[10%] justify-between text-[#fff]'>
        <RiVideoAddLine style={{  fontSize: "1.2rem" }} />
        <CgMenuGridR style={{  fontSize: "1.2rem" }}/>
        <IoIosNotificationsOutline style={{  fontSize: "1.2rem" }}/>
        <img src='/logo192.png' className='block w-[2rem] h-[2rem]' />
      </div>  
    </div>
  )
}

export default Header
