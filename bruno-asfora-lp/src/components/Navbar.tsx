import React from 'react';
import HbgMenu from './HbgMenu';

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center py-4 md:py-10 font-gothic text-[1.25rem] px-4 md:px-16">
        <div className="flex flex-col text-[#574237]">
          <h1 className="font-semibold">BRUNO</h1>
          <h1 className="font-bold">ASFORA</h1>
        </div>
        <HbgMenu />
      </nav>
    </>
  );
}
