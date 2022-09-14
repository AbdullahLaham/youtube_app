import React, { useEffect } from 'react';
import { items } from '../utils/menuItems';
import {fetchFromApi} from '../utils/fetchData';
const Sidebar = () => {
  
  return (
    <div className='lg:flex hidden flex-col w-[15rem] bg-[#212121] text-[#686464] '>
      {items && items.map((item, i) => {
        return (
          <>
            <div className='flex items-center mx-7 w-[60%] mt-[.5rem] cursor-pointer hover:bg-[#2b2a2a] p-[.5rem] '>
              <p className=' mr-[1rem]'>{item.icon}</p>
              <p className='w-[12rem]'>{item.name}</p>
            </div>
            {(i == 3 || i == 9) && <hr className='mt-[1rem] mx-auto w-[90%]'/>} 
          </>
        )
      })}
    </div>
  )
}

export default Sidebar
