import React, { useState } from 'react'
import { categories, prices } from '../constants'
import { items } from '../data/data'
import FoodCard from './FoodCard'

const Food = () => {
  const [foods, setFoods] = useState(items)


  const filterType = (category) => {
    setFoods(
      items.filter((item) => item.category === category)
    )
  }

  const filterPrice = (price) => {
    setFoods(
      items.filter((item) => item.price === price)
    )
  }

  return (
    <section className='max-w-[1640px] mx-auto px-4 py-12'>
      <h2 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h2>

      <div className='flex flex-col lg:flex-row justify-between'>

        <div className='mt-4'>
          <p className='font-bold text-gray-700 text-center'>Filter Type</p>
          <div className='flex justify-between flex-wrap gap-1 m-1'>
            {categories.map((category, index) => (
              <button onClick={index > 0 ? () => filterType(category.name) : () => setFoods(items)} className='border-orange-600 text-orange-600 text-white hover:bg-orange-600 hover:text-white duration-300'>
                <p className='capitalize'>
                  {category.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className='mt-4'>
          <p className='font-bold text-gray-700 text-center'>Filter Price</p>
          <div className='flex justify-between flex-wrap gap-1 m-1 max-w-[350px]'>
            {prices.map((price, index) => (
              <button onClick={index > 0 ? () => filterPrice(price.tag) : () => setFoods(items) } className='border-orange-600 text-orange-600 text-white hover:bg-orange-600 hover:text-white duration-300'>
                {price.tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item) => (
          <FoodCard name={item.name} category={item.category} img={item.image} price={item.price} key={item.id} />
        ))}
      </div>
    </section>
  )
}


export default Food