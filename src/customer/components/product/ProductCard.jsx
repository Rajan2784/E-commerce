import React from 'react'
import './productCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer' onClick={()=>navigate(`/product/${5}`)}>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={item.imageUrl} alt=""  />
      </div>

      <div className='textPart bg-white p-3'>
        <div>
            <p className='font-bold opacity-60'>{item.brand}</p>
            <p className=''>{item.title}</p>
        </div>

        <div className='flex items-center'>
            <p className='font-semibold'>{`₹${item.discountedPrice}`}</p>
            <p className='line-through opacity-50 m-1'>{`₹${item.price}`}</p>
            <p className='text-green-600 font-semibold'>{`${item.discountPersent}% off`}</p>
        </div>

      </div>
    </div>
  )
}

export default ProductCard
