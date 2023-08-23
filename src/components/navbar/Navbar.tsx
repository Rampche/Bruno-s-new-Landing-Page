import React, { useState } from 'react';
import { EventType } from '../../models/types';
import HbgMenu from './HbgMenu';
import Navlist from './Navlist';

export default function Navbar() {
  const [nav, setNav] = useState<true | false>(false);

  const handleClick = (e: EventType) => {
    e.preventDefault;
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex justify-between items-center align-middle py-4 md:py-10 px-4 md:px-16 select-none font-gothic">
        <div className="flex flex-col text-[#574237] cursor-pointer text-[1.25rem] w-1/2">
          <h1>BRUNO</h1>
          <h1 className="-mt-1">ASFORA</h1>
        </div>
        <button onClick={handleClick}>
          <HbgMenu />
        </button>

        <Navlist nav={nav} onClick={handleClick} />
      </nav>
    </>
  );
}
