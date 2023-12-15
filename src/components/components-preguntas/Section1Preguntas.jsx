'use client'
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function Section1Preguntas({ 
    data = [
        {
            id: 1,  
            titulo: "¿Cuáles son los métodos de pago que aceptan?",
            description: "¡Hola! Aceptamos una amplia variedad de métodos de pago para tu comodidad. Puedes pagar con todas las tarjetas de crédito y débito más conocidas como Visa, Mastercard, American Express y Cabal. También acepamos PayPal, uno de los métodos más utilizados a nivel mundial para compras por internet. ¿Prefieres transferir directo a nuestra cuenta bancaria? No hay problema, también ofrecemos esa opción. Y si lo tuyo es el efectivo, no te preocupes, tenemos pago contra entrega para que puedas abonar cuando el pedido llegue a tu casa. La idea es que cuentes con varias alternativas para pagar de la manera que más te convenga."
          },
          {
           id: 2,
           titulo: "¿Cuánto demora la entrega de mi pedido?",  
           description: "El tiempo de entrega varía dependiendo de dos factores principales: 1) El producto que hayas comprado, algunos requieren un procesamiento más rápido que otros. 2) Tu zona de envío, lógicamente no es lo mismo despachar dentro de la misma ciudad que enviar a otra provincia. Para darte una estimación, los envíos a domicilio dentro de la ciudad demoran entre 2 a 3 días hábiles. Si tu pedido se despacha a otra zona del país, el tiempo aproximado es de 5 a 7 días hábiles considerandowebs que los lunes y martes son los días de más alta demanda en nuestro centro de distribución. ¡Y no te preocupes! Independiente de tu ubicación y el producto que compres, nos mantendremos en contacto informándote sobre cualquier actualización de tu pedido."  
          },
          {
            id: 3,
            titulo: "¿Puedo cambiar el producto si elegí el equivocado?",
            description: "Entendemos que a veces nos podemos confundir o que cuando recibas el producto quizás no era lo que esperabas al verlo personalmente. ¡Sin problemas! Tienes 30 días a partir de la fecha en que recibiste tu pedido para solicitar un cambio. Solo es necesario que te comuniques con nuestro equipo de atención al cliente dentro de este período escribiendo a atencionalcliente@tienda.com. Debes indicarnos tu número de orden y los detalles del o los productos que necesitas cambiar. Nosotros verificaremos rápidamente el stock disponible para despacharte lo que necesites y coordinaremos la logística del cambio. ¡El proceso es súper sencillo! Nuestro equipo hará todo el trabajo pesado para que solo disfrutes de tu nueva compra."
          },   
          {
            id: 4,
            titulo: "¿Mi orden tiene garantía?", 
            description: "¡Claro que sí! Todos los productos cuentan con la garantía de fábrica, así que puedes comprar con absoluta tranquilidad. Además, al momento de concretar tu compra puedes adicionar un seguro de garantía extendida si lo deseas. Esta garantía extra tiene validez de 1 año adicional a la garantía original del fabricante. Cubre fallas, desperfectos y, en algunos casos como celulares o computadores, hasta roturas o daños accidentales. Si quieres agregar esta protección extra solo debes marcar la opción correspondiente al momento de realizar el pago."
          },
          {
            id: 5, 
            titulo: "No recuerdo mi contraseña, ¿qué hago?",
            description: "No te preocupes, es super común olvidar la contraseña, a todos nos ha pasado. Para estos casos tenemos una opción de recuperación súper sencilla. Solo debes dirigirte a la página de login de nuestra tienda y hacer clic en ¿Olvidaste tu Contraseña? Ahí te pedirá verificar tu email y te enviaremos un enlace temporario para que puedas establecer una nueva contraseña y recuperar el acceso a tu cuenta. ¡El proceso tarda menos de 5 minutos! Si tienes algún inconveniente o el link expira, no dudes en contactar a nuestro equipo de soporte para ayudarte a recuperar tu acceso lo antes posible." 
          },
          {
            id: 6,
            titulo: "¿Tienen descuentos o cupones?",
            description: "¡Por supuesto! De hecho, uno de los beneficios exclusivos por formar parte de nuestra comunidad es tener acceso anticipado a las mejores ofertas y descuentos relámpago que vamos lanzando. Los suscriptores a nuestro newsletter son los primeros en enterarse de cupones de descuento, promociones especiales y todas las novedades de la tienda. ¡Suscríbete ya para no perderte nuestras ofertas más calientes!"  
          }, 
          {
            id: 7, 
            titulo: "Mi orden llegó incompleta, ¿cómo reclamo?",
            description: "Lamentamos mucho si parte de tu orden no fue despachada en forma correcta. Para iniciar el reclamo solo debes escribirnos dentro de las primeras 24 horas luego de recibir el pedido incompleto. Cuéntanos tu número de orden y los detalles de lo sucedido, así haremos el seguimiento y las gestiones necesarias con nuestro centro de distribución. En la gran mayoría de los casos tenemos stock suficiente en bodega para reemplazar el faltante y enviarte nuevamente el producto lo antes posible. ¡Estamos para ayudarte, no dudes en contactarnos!"  
          },
          {
            id: 8,
            titulo: "¿Cuál es el horario de atención de la Oficina de Despachos?",
            description: "La oficina se encuentra disponible de lunes a viernes de 09:00 a 18.00 horas para que retires tu pedido cómodamente. Lleva contigo el comprobante que te enviamos por correo."
          },
          {
            id: 9,
            titulo: "¿Existe un monto mínimo de compra?",
            description: "No, no tenemos un monto establecido de compra mínima. Ya sea que necesites un solo producto o un pedido grande, podrás completar tu orden sin inconvenientes. ¡Compra tanto como necesites!"
            },
            {
            id: 10,
            titulo: "¿Qué ocurre si mi paquete se daña o extravía antes de llegar?",
            description: "Nuestro proceso interno está optimizado para evitar cualquier contratiempo. Pero si por alguna razón excepcional tu pedido sufriera algún daño o extravío, comunícate de inmediato con nosotros para reemplazarlo sin costo adicional."
            },
            {
              id: 13,
              titulo: "¿Cuál es el tiempo máximo para solicitar una devolución?",
              description: "Tienes un plazo máximo de 10 días luego del retiro para poder solicitar cambios o devoluciones por cualquier inconveniente."
            },
         ] 




}) {



  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="bg-white p-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-10 mt-2 text-center sm:text-6xl"> Preguntas Frecuentes de Tecshop </h1>
      {data.map((item) => (
        <Accordion
          key={item.id}
          open={open === item.id}
          className="mb-5 rounded-lg border border-blue-gray-100 px-4"
          icon={<Icon id={item.id} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(item.id)}
            className={`border-b-0 transition-colors ${
              open === item.id ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            {item.titulo}
          </AccordionHeader>
          <AccordionBody>{item.description}</AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}

export default Section1Preguntas;