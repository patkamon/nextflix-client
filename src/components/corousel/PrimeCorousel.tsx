'use client'

import { Carousel } from 'primereact/carousel'


export default function PrimeCarousel({list}: {
  list: any[];
}) {
  const itemTemplate = (item: any) => {
    return (
      <div className="ml-1">
        <div className={`h-40 rounded-lg min-w-[220px] shadow-md text-white text-xl ${item.color}`}>
          {item.name}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <Carousel
        value={list}
        itemTemplate={itemTemplate}
        numVisible={6}
        numScroll={1}
        circular
        autoplayInterval={3000}
        page={0}
      />
    </div>
  )
}
