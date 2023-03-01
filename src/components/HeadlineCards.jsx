import React from 'react'
import HeadlineCard from './HeadlineCard'
import { cards } from '../constants'

const HeadlineCards = () => {
  return (
    <section className='max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6'>
      {cards.map((card) => (
        <HeadlineCard
          img={card.bgImage} 
          title={card.title}
          description={card.description}
          />
      ))}
    </section>
  )
}

export default HeadlineCards