// COMPONENTE LISTO Y FUNCIONAL
'use client'
import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const SITEMAP = [
  {
    title: "Servicios",
    links: ["Terminos y Condiciones", "Preguntas Frecuentes", "Devolucion"],
  },
  {
    title: "Tecshop",
    links: [
      "Contactanos",
      "Politicas de Privacidad",
      "Informacion Pagos",
    ],
  },
  {
    title: "Redes Sociales",
    links: ["Facebook", "Instagram"],
  },
];

const currentYear = new Date().getFullYear();

function FooterPag() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="mx-auto w-full px-8 justify-around">
        <div className="mx-auto grid w-full flex-col gap-8 py-10 md:grid-cols-3 lg:grid-cols-4 sm:justify-items-center justify-center grid-cols-2">
          <a href="/">
            <Image
              src="/logo_splash.svg"
              alt="logo-ct"
              height={500}
              width={500}
              className="w-[15rem] mb-8 filter saturate-150 sm:justify-items-center justify-center"
            />
          </a>
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full border-r justify-items-center justify-center">
              <Typography variant="small" color="blue-gray" className="mb-4 font-bold uppercase opacity-50 text-center">
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography key={key} as="li" color="blue-gray" className="font-normal text-center">
                    <a
                      href={
                        link === "Facebook"
                          ? "https://www.facebook.com/"
                          : link === "Instagram"
                          ? "https://www.instagram.com/"
                          : `/${link.toLowerCase().replace(/ /g, "-")}`
                      }
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-center">
          <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            © {currentYear} <a>Tecshop Consulting</a>. Todos Los Derechos Reservados
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center"></div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPag;