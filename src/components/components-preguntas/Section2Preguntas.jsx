'use client'
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function Section2Preguntas() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleShopClick = () => {
    window.location.href = `/contactanos`;
};

  return (
    <div className=" flex justify-center items-center ">
      <Button onClick={handleOpen} className="mb-10 transition duration-700 ease-in-out bg-black hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
        ¿Dudas?
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>¿Necesitas ayuda?</DialogHeader>
        <DialogBody>
        Hola, ¿tienes alguna duda o consulta sobre nuestro ecommerce? Estamos aquí para ayudarte. Puedes comunicarte con nosotros mediante el canal de “Contactos” que encontrarás en el menú principal. </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleShopClick}>
            <span>Redirigir</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Section2Preguntas;