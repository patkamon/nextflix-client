'use client'

import { SmallShowInterface } from '@/interface/SmallShowInterface';
import { Carousel } from 'primereact/carousel'
import { toast } from 'react-toastify';
import ShowDialog from '../dialog/ShowDialog';

export default function PrimeCarousel({ shows }: {
  shows: SmallShowInterface[] | null;
}) {
  console.log(shows)
  if (!shows) {
    toast.error("Failed to fetch shows");
  } else if (shows.length === 0) {
    toast.warn("Empty list, no shows to display");
    return <div className="text-white text-center">No shows available</div>;
  }

  const itemTemplate = (item: SmallShowInterface) => {
    return (
      <div className="ml-1">
        <div className={`h-fit rounded-lg shadow-md text-white text-xl`}>
          <ShowDialog show={item} />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <Carousel
        value={shows || []}
        itemTemplate={itemTemplate}
        numVisible={8}
        numScroll={1}
        circular
        autoplayInterval={3000}
        nextIcon={<i/>}
        prevIcon={<i/>}
        responsiveOptions={
          [
            {
              breakpoint: '1600px',
              numVisible: 7,
              numScroll: 1
            },
            {
              breakpoint: '1200px',
              numVisible: 6,
              numScroll: 1
            },
            {
              breakpoint: '1024px',
              numVisible: 5,
              numScroll: 1
            },
            {
              breakpoint: '768px',
              numVisible: 4,
              numScroll: 1
            },
            {
              breakpoint: '560px',
              numVisible: 3,
              numScroll: 1
            },
          ]
        }
      />
    </div>
  )
}
