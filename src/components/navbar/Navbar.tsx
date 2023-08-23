import React, { useState } from 'react';
import { EventType } from '../../models/types';
import HbgMenu from './HbgMenu';
import Navlist from './Navlist';

export default function Navbar() {
  const [nav, setNav] = useState<true | false>(false);

  const navLinks = [
    {
      name: 'Home',
      /* path: '/home' */
    },
    {
      name: 'Sobre',
      /* path: '/about', */
    },
    {
      name: 'Área de Atuação',
      /* path: '/areas' */
    },
  ];

  const handleClick = (e: EventType) => {
    e.preventDefault;
    setNav(!nav);
    console.log(nav);
  };

  return (
    <>
      <div className="flex justify-between items-center align-middle py-4 md:py-10 px-4 md:px-16 select-none font-gothic">
        <div className="flex flex-col text-[#574237] cursor-pointer text-[1.25rem] w-1/2">
          <h1>BRUNO</h1>
          <h1 className="-mt-1">ASFORA</h1>
        </div>
        <button onClick={handleClick}>
          <HbgMenu />
        </button>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className={
          nav
            ? 'ease-in duration-500 absolute z-50 transform translate-x-0 right-0 top-0 w-1/3 h-full bg-[#d9d9d9] opacity-95 text-[#574237] '
            : 'ease-in duration-500 absolute z-50 transform translate-x-full right-0 top-0 overflow-x-hidden w-1/3 h-full bg-[#d9d9d9] opacity-95 text-[#574237]'
        }
      >
        <ul className="py-8 px-4 flex flex-col items-center justify-evenly h-3/4 select-none">
          {navLinks.map(({ name }, index) => (
            <li
              key={index}
              className="py-1 text-base font-medium cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
