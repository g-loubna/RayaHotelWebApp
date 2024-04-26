import React from 'react';
import img1 from  '../assets/Rectangle 5.png';
import ReservationBar from './ReservationBar';
import img2 from '../assets/Hotel.png'

function Hero() {
  return (
    <div className='  bg-zinc-50 py-14 w-fit h-fit relative'>

      <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-32'>

        <div className='md:w-3/5 mx-auto'>
            <img  className ='w-60 py-4' src={img2}  alt=''/>
          <h2 className='text-5xl text-black font-bold mb-4 md:w-4/5 tracking-wider'> Plongez dans le luxe et le confort</h2>
          <p className='md:w-3/4 text-xm text-neutral-500 mb-8 '>
            Votre séjour inoubliable dans notre hôtel de prestige, au coeur des villes les plus en vogue du monde entier.
          </p>
        </div>

        <img src={img1} width={526} height={700} alt='' />

        <div className="absolute top-52 left-0 w-full h-full flex justify-center items-center">
          <ReservationBar />
        </div>

      </div>
    </div>
  );
}

export default Hero;
