import React from 'react'
import ch1 from '../assets/Rectangle 10.png'



function Card() {
    return (

        <div className='bg-white  flex items-center justify-center  rounded-xl   '>
            
            <div className=' grid grid-cols-1 font-poppins w-72  p-3 bg-white border-x border-y   rounded-xl md:w-16 lg:w-80 '>
                <img className=' object-cover rounded-xl md:w-32 lg:w-80' src={ch1} width={70} alt='pc' />
                {/* <p className='-mt-36 rounded-lg border border-white'>Developpement</p> */}
                <div className='p-2 mt-2'>
                    <h2 className='font-bold tracking-wider dark:text-white  '> Title here </h2>
                    <p className='text-gray-500 text-xs mt-1  dark:text-gray-1  dark:text-neutral-400'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et . </p>

                    
                </div>

                
            </div>
        </div >

    )
}

export default Card
