// COMPONENTE OKEY + LISTO PARA IMPLEMENTAR
import React from "react";

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 justify-center gap-3 mx-4 sm:mx-16 md:mx-16 md:flex-shrink-0 md:items-center md:justify-start">
      <img className="w-12 h-12 md:w-16 md:h-16" alt={title} src={icon} />
      <div className="flex flex-col items-center text-black md:items-center">
        <div className="text-xl font-semibold text-center md:text-left flex-grow">{title}</div>
        <div className="text-sm text-center md:text-left flex-shrink">{description}</div>
      </div>
    </div>
  );
}

function Section2Pag() {
  return (
    <div className="flex flex-col items-center justify-around gap-5 px-4 py-10 bg-[#faf3ea]">
      <div className="max-w mx-auto flex flex-wrap justify-center md:justify-around gap-4">
        <FeatureItem
          icon="guarantee.svg"
          title="Protección de Garantía"
          description="Más de 2 años de garantía"
        />
        <FeatureItem
          icon="shipping.svg"
          title="Entrega dentro del Campus"
          description="Entrega en 2-3 días hábiles dentro del campus académico"
        />
        <FeatureItem
          icon="customer-support.svg"
          title="Soporte 24/7"
          description="Soporte dedicado en cualquier momento"
        />
      </div>
    </div>
  );
}

export default Section2Pag;