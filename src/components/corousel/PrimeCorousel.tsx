'use client'

import { SmallShowInterface } from '@/interface/SmallShowInterface';
import { Carousel } from 'primereact/carousel'
import ImageOverlay from '../overlay/ImageOverlay';


export default function PrimeCarousel({list}: {
  list: SmallShowInterface[];
}) {
  const itemTemplate = (item: SmallShowInterface) => {
    return (
      <div className="ml-1">
        <div className={`h-40 rounded-lg min-w-[220px] shadow-md text-white text-xl`}>
          <ImageOverlay show={item} />
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
        nextIcon={<i/>}
        prevIcon={<i/>}
      />
    </div>
  )
}
