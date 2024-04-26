import React from 'react';
import Card from './Card';
import '../Styles/style.css';

function Chambre() {
  return (
    <div className="chambre-background h-full  flex flex-col items-center justify-center">
      <div className="text-center  pt-20">
        <h1 className="text-6xl text-white tracking-wider font-medium mb-4">Chambres De Luxe</h1>
        <p className="text-lg tracking-wider text-white">
        Toutes les chambres sont conçues pour votre confort
        </p>
      </div>
      <div className='pb-20 pt-10 grid gap-10 grid-cols-3 items-center justify-between'><Card/> <Card/> <Card/></div>
      
    </div>
  );
}

export default Chambre;
