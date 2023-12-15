'use client'
import Image from "next/image"
import { Typography } from "@material-tailwind/react"
function Section3(props) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-2 py-10 bg-gradient-to-r from-white via-gray-100 to-gray-300 border-b">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image className="mx-auto h-12 filter saturate-150" src="/logo_splashcontacto.svg" width={500} height={500} alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <Typography >
            {props.name}
            </Typography>            
          </blockquote>
          <figcaption className="mt-10">
            <Image
              className="mx-auto h-12 w-12 rounded-full"
              src={props.image}
              height={500}
              width={500}
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{props.encargado}</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">{props.cargo}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
export default Section3