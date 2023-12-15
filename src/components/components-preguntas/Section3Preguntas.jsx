import React from "react";
import Section2Preguntas from "./Section2Preguntas";

function Section3Preguntas() {
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center p-20 lg:p-20 md:p-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>      <div className="text-white text-center lg:text-left">
        <h1 className="text-2xl font-bold sm:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl max-w-3xl xl:max-w-5xl" style={{maxWidth:"40rem"}}>Si aún tienes dudas, comunícate con nosotros</h1>
        <p className="my-5 text-sm mb-5 sm:text-base lg:text-lg xl:text-xl 2xl:text-xl max-w-md xl:max-w-3xl" style={{maxWidth:"40rem"}}>En nuestro ecommerce queremos ofrecerte el mejor servicio posible y resolver todas tus dudas. Si tienes alguna pregunta sobre nuestros productos, métodos de pago, políticas de envío o devolución, o cualquier otro tema, no dudes en comunicarte con nosotros. Estamos a tu disposición para atenderte y ayudarte en lo que necesites.</p>
        <Section2Preguntas></Section2Preguntas>
      </div>
    </div>
  );
}

export default Section3Preguntas;