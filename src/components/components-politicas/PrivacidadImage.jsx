'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

import Image from "next/image";

function PrivacidadImage() {
    return (
      <Card className="relative w-full flex-row rounded-none bg-gradient-to-r from-white via-gray-100 to-gray-300 justify-start border-t">
        <CardHeader
          shadow={true}
          floated={true}
          className="m-0 w-1/2 shrink-0 rounded-none hidden md:block lg:block"
        >
           <Image
            src="/image-politicas/privacidad.svg"
            alt="card-image"
            width={500}
            height={500}
            className="w-[45rem] h-[37rem] object-cover justify-start shrink-0 filter saturate-150"
          />
        </CardHeader>
        <CardBody style={{maxWidth: '50rem'}} className="text-center">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Politicas
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mt-16">
          Nuestro enfoque tecnológico se basa en la protección de tu privacidad, el respeto a tus derechos y nuestro compromiso inquebrantable.          </Typography>
          <Typography color="gray" className="mb-8 font-normal mt-16">
          En nuestro ecommerce nos comprometemos a proteger tu privacidad y tus derechos. Utilizamos tus datos para crear herramientas que faciliten tu vida cotidiana y mejoren tu experiencia de compra. Queremos asegurarte que tu información está protegida y que la utilizamos de manera responsable.
          </Typography>
        </CardBody>
      </Card>
    );
  }

export default PrivacidadImage