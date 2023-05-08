import React from 'react';
import ItemCard from '../components/ItemCard';

function Schedule() {

  return (
    <section className='text-white text-center m-10'>
    {/*header section*/}
        <div className='my-20 h-10 z-10'>
            <span className='text-4xl font-semibold'>The schedule</span>
            <p className='text-dark-grey m-2'>April 27th, 28th, & 29th 2023</p>
        </div>
    {/*activities section*/}
        <section className={`w-full md:flex md:flex-row flex-col justify-between md:m-10 md:pt-11`}>
            <div className='flex-1'>
                <span className='text-xl font-semibold'>Wednesday 27th</span>
                <ItemCard/>
            </div>

             <div className='flex-1 md:border-x'>
                <span className='flex-1 text-xl font-semibold'>Thursday 28th</span>
                <ItemCard/>
                <ItemCard/>
            </div>

             <div className='flex-1'>
                <span className='flex-1 text-xl font-semibold'>Wednesday 27th</span>
                <ItemCard/>
                <ItemCard/>
            </div>

        </section>
    </section>
  )
}

export default Schedule