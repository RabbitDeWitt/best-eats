import React from 'react'
import { categories } from '../data/data'

const CategoryCard = ({ name, id, img }) => (
  <div key={id} className='bg-gray-100 rounded-lg p-4 float-right justify-between items-center'>
    <h2 className='font-bold sm:text-xl'>{name}</h2>
    <img
      src={img}
      alt=""
      className='w-20'
    />
  </div>
)

const Category = () => {

  return (
    <section className='max-w-[1640px] mx-auto py-12 px-4'>
      <h2 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h2>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-4'>
        {categories.map(({ id, name, image }) => (
          <CategoryCard key={id} name={name} img={image} />
        ))}
      </div>
    </section>
  )
}

export default Category