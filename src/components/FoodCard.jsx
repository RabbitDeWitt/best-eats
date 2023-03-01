import React from 'react'

const FoodCard = ({name, category, price, img}) => {
  return (
    <div className='border shadow-lg hover:scale-105 duration-300'>
      <img 
        src={img}
        alt={name}
        className='w-full h-[200px] object-cover rounded-lg'  
      />
      <div className='flex justify-between px-2 py-4'>
        <p className='font-bold'>{name}</p>
        <p>
          <span className='bg-orange-500 text-white p-1 rounded-full'>{price}</span>
        </p>
      </div>
    </div>
  )
}

export default FoodCard