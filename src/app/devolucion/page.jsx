import Section1Dev from '@/components/components-devolucion/Section1Dev';
import Section2Dev from '@/components/components-devolucion/Section2Dev';
import Section3Dev from '@/components/components-devolucion/Section3Dev';
import Section4Dev from '@/components/components-devolucion/Section4Dev';
import Section5Dev from '@/components/components-devolucion/Section5Dev';

import Box from '@/components/components-encabezado-pagina/Dash';
import React from 'react';
export default function Devoluciones() {
  return (
    <div>
    <div>
      <Box name="Devoluciones" description="¿Necesitas devolver un producto? Contáctanos para obtener asistencia en el proceso de devolución y resolver tus consultas. Tu satisfacción es nuestra prioridad." />
    </div>
    <div>
    </div>
    <Section2Dev></Section2Dev>
    <Section1Dev></Section1Dev>
    <Section3Dev></Section3Dev>
    <Section4Dev></Section4Dev>
    <Section5Dev></Section5Dev>
    </div>
  );
};