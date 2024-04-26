import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo4.gif';
import '../Styles/style.css';

const links = [
  { id: 'home', label: 'Accueil' },
  { id: 'explore', label: 'Explore' },
  { id: 'chambres', label: 'Chambres' },
  { id: 'propos', label: 'A propos' },
  { id: 'contact', label: 'Contact' }
];

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <nav className='bg-white dark:bg-black justify-between items-center pb-4 text-xl md:flex md:px-10 px-7 mt-5 mx-10 '>
      <div className='flex mb-1.5  '> 
        <div className='ml-4 mt-2'><a href='/'><img src={Logo} width={48} height={44} alt='Logo' /></a></div>
        {/* <div className='ml-5 mt-3'><h1 className='text-2c3484'>Raya hotel</h1></div> */}
      </div>
      <div className='flex justify-between items-center'>
      <div className='mr-32 flex space-x-16 mt-2 font-semibold '>
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleLinkClick(link.id)}
            className={`nav-link ${activeLink === link.id ? 'text-beige' : 'text-blue-500 hover:text-beige'}`}
          >
            {link.label}
          </button>
        ))}
        
      </div>
      <button className='bg-beige font-normal text-white hover:bg-blue rounded-lg  w-auto py-3 px-3'> 
          <Link to="/reserv">Réserver Maintenant</Link>
        </button>
        </div>
    </nav>
  );
}

export default Navbar;
