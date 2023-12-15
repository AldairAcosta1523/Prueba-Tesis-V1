import React from 'react';
import Image from 'next/image';

function Section1Dev() {
  return (
    <div className="relative h-[35rem] w-full">
      <img
        src="https://images.unsplash.com/photo-1682687220566-5599dbbebf11?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Section1"
        width={500}
        height={500}
        className="w-full h-full object-cover "
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-end lg:left-3/4 md:left-3/4">
        <h1 className="text-3xl text-center font-bold tracking-tight text-white p-10 sm:text-6xl ">
          ¡Bienvenidos a nuestra tienda, aqui podras ver todo sobre Devoluciones!
        </h1>
      </div>
    </div>
  );
}

export default Section1Dev;