'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Image from "next/image";

const cards = [
    {
      imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tecnologia",
      description: "Política de devolución: Aceptamos devoluciones de productos tecnológicos dentro de los 3 días posteriores a la compra. Los productos deben estar en su estado original, sin abrir y con todos los accesorios incluidos. Se aplicará un cargo por reposición del 10% del valor del producto devuelto."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1511843511279-cfd764c09659?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Souvenirs",
      description: "Política de devolución: Aceptamos devoluciones de souvenirs dentro de los 7 días posteriores a la compra. Los productos deben estar en su estado original, sin usar y con todas las etiquetas y empaques originales. No se aceptarán devoluciones de souvenirs personalizados."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1578939662863-5cd416d45a69?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Prendas",
      description: "Política de devolución: Aceptamos devoluciones de prendas de vestir dentro de los 7 días posteriores a la compra. Las prendas deben estar en su estado original, sin usar y con todas las etiquetas y empaques originales. No se aceptarán devoluciones de prendas personalizadas, como uniformes con logotipos de la universidad."
    },
  ];
  

function Section3Dev() {
  return (
    <div className="flex flex-wrap justify-center bg-white bg-gradient-to-r from-white via-gray-100 to-gray-300">
      {cards.map((card, index) => (
        <Card key={index} className="w-full sm:w-96 mt-16 mb-16 mr-10 ml-10">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={card.imageSrc} alt="card-image" className="w-full h-full object-cover" width={500} height={500}/>
          </CardHeader>
          <CardBody className="mt-10">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {card.title}
            </Typography>
            <Typography>{card.description}</Typography>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Section3Dev;