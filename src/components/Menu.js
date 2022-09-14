import React, { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchData';
import { categories } from '../utils/menuItems';
import { Store } from '../utils/store';
const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const {state, dispatch} = useContext(Store);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromApi(`search?part=snippet&q=${selectedCategory}`);
      dispatch({type: 'ADD_VIDEOS', payload: data,})
    }
    fetchData();
  }, [selectedCategory]);

  return (
    <div className='bg-[#212121] h-[2.3rem] w-[100%]  items-center justify-between hidden lg:flex '>
      {
        categories.map((item) => {
          return <Link to='/' className='bg-[#2e2d2d] mr-[.2rem] text-center text-[rgb(184,182,182)] p-[.2rem] px-[.4rem] cursor-pointer rounded-[.7rem] ' onClick={() => setSelectedCategory(item.name)}>{item.name}</Link>
        })

      }
    </div>
  )
}

export default Menu
