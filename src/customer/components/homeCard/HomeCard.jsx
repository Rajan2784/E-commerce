import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeCard = ({item}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${4}`)} className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 z-1'>
      <div className="h-[13rem] w-[10rem]">
        <img src={item.imageUrl} alt="" className="object-cover object-top w-full h-full" />
      </div>

      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{item.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{item.title}</p>
      </div>


    </div>
  )
}

export default HomeCard
