import React from 'react';

export default function Navlist({ nav, onClick }) {
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

  return (
    <div
      className={`overflow-y-hidden ease-in duration-500 absolute z-50 bg-[#d9d9d9] opacity-95 text-[#574237] w-1/3 h-screen top-0 ${
        nav ? 'right-[0%]' : 'right-[-50%]'
      }`}
      onClick={onClick}
    >
      <ul className="py-8 px-4 flex flex-col items-center justify-evenly h-3/4">
        {navLinks.map(({ name }, index) => (
          <li key={index} className="py-1 text-base font-medium cursor-pointer">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
