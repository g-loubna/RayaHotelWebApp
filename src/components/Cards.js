import React from 'react';
import img1 from '../assets/Frame 1418.png';
import img2 from '../assets/Frame 1420.png';
import img3 from '../assets/Frame 1431.png';
import img4 from '../assets/Frame 1421.png';
import img5 from '../assets/Frame 1423.png';
import img6 from '../assets/Frame 1425.png';
import img7 from '../assets/Frame 1427.png';
import img8 from '../assets/Frame 1429.png';

function Cards() {
  return (
    <div className='bg-white m-60 grid gap-4 grid-cols-4 items-center justify-center rounded-xl'>
      <div className="col-span-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold tracking-wider py-8  text-center">Nos équipements</h1>
        <p className="text-center pb-4">Nous proposons des installations modernes dignes d'un hôtel 5 étoiles pour votre confort.</p>
      </div>

      <img className='object-cover rounded-xl md:w-32 lg:w-80' src={img1} alt='pc' />
      <img className='object-cover rounded-xl md:w-32 lg:w-80' src={img4} alt='pc' />
      <img className='object-cover rounded-xl md:w-32 lg:w-80' src={img2} alt='pc' />
      <img className='object-cover rounded-xl md:w-32 lg:w-80' src={img5} alt='pc' />
      <img className='object-cover rounded-xl md:w-32 lg:w-80' src={img7} alt='pc' />
      <img className='object-cover rounded-xl md:w-32 lg:w-80' src={img6} alt='pc' />
      <img className='object-cover rounded-xl md:w-32 lg:w-80' src={img3} alt='pc' />
      <img className='object-cover rounded-xl md:w-32 lg:w-80' src={img8} alt='pc' />
    </div>
  );
}

export default Cards;
