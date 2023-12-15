// Componente listo y Funcional
'use client'
import { Typography } from "@material-tailwind/react";


function Box(props) {
  return (
    <figure className="relative h-[500px] w-full flex-shrink-0">
      <img
        className="h-full w-full object-cover object-center brightness-75"
        src="/pagina.jpg"
        alt="nature image"
      />
      <figcaption className="absolute bottom-48 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-center rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h2" color="blue-gray" className="text-center">
            {props.name}
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            {props.description}
          </Typography>
        </div>
      </figcaption>
    </figure>
  );
}
export default Box