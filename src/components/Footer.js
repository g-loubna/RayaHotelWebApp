import React from 'react';
import {  Company, Quicklinks, Reseaux_sociaux} from './Menu';
import Item from './Item';
import logo from '../assets/Hotel Raya.png';
import '../Styles/style.css'

function Footer() {
    return (
        <footer className='bg-beige  grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 py-12'>
            <div className='flex w-72 flex-col ml-5 py-4'>
                <img src={logo} width={135} height={80} alt='' />
                <p className='text-sm text-justify text-white mt-5'>The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us)</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 md:grid-cols-3 md:px-1 gap-0'>
                <Item Links={Quicklinks} title='Quick links' />
                <Item Links={Company} title='Company' />
                <Item Links={Reseaux_sociaux} title='Réseaux sociaux' />
                <div className="text-white flex flex-col">
                    <h3 className='mt-4 font-semibold'>Boîte de réception</h3>
                    <p className='w-60 text-sm'>Abonnez-vous à notre newsletter pour recevoir nos offres de chambre et bénéficier de réductions pour vos vacances.</p>
                    <div className="flex">
                        <input type="email" placeholder="Votre adresse e-mail" className="w-48 rounded-md py-2 px-4 mt-2 mr-2" />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-2 shadow-md">
                            S'abonner
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
