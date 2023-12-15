'use client'
import { Typography } from "@material-tailwind/react"
import Image from "next/image"

function PolitySection3() {
  return (
    <div className="divide-y divide-gray-200 border-t">
      <div className="grid grid-cols-2 divide-x divide-gray-200 bg-white text-black bg-gradient-to-r from-white via-gray-100 to-gray-300">
        <div>
          <div>
            <Typography variant="h1" className="p-10 text-center text-xl font-bold">Información que Recopilamos</Typography>
            <div className="flex justify-center">
              <Image
                src="/image-politicas/info.svg"
                alt="card-image"
                width={200}
                height={200}
                className="justify-center p-2 filter saturate-150"
              />
            </div>
            <div className="text-center p-10">
              <Typography>
                Recopilamos estos datos de forma directa, cuando usted nos los proporciona voluntariamente para acceder a nuestros servicios o funcionalidades. También podemos obtener información de otras fuentes como bases de datos públicas o servicios de proveedores externos, siempre de forma legal.
              </Typography>
            </div>
          </div>
        </div>



        <div>
          <Typography className="p-10 text-center text-xl font-bold">Medidas de Seguridad Implementadas</Typography>
          <div className="flex justify-center">
            <Image
              src="/image-politicas/seguridad.svg"
              alt="card-image"
              width={200}
              height={200}
              className="justify-center p-2 filter saturate-150"
              />
          </div>
          <div className="text-center p-10">
            <Typography>
              Implantamos medidas de seguridad físicas, técnicas y organizativas para proteger sus datos contra pérdida, mal uso, alteración, acceso no autorizado y robo. Por ejemplo: cifrado de datos, uso de antivirus, backup en la nube, políticas internas de seguridad, etc.
            </Typography>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 divide-x divide-gray-200 bg-white text-black bg-gradient-to-r from-white via-gray-100 to-gray-300">

        <div className="">
          <div>
            <Typography className="p-10 text-center text-xl font-bold">Derechos sobre sus datos</Typography>
            <div className="flex justify-center">
              <Image
                src="/image-politicas/datospolity.svg"
                alt="card-image"
                width={200}
                height={200}
                className="justify-center p-2 filter saturate-150"
              />
            </div>
            <div className="text-center p-10">
              <Typography>
                Puede ejercer sus derechos de acceso, rectificación, cancelación, oposición y olvido. También derecho a retirar su consentimiento omtir ciertos usos. Para ello, puede acudir a la Oficina de Protección de Dato
              </Typography>
            </div>
          </div>
        </div>



        <div>
          <Typography className="p-10 text-center text-xl font-bold">Cambios en la Politica de Privacidad

          </Typography>
          <div className="flex justify-center">
            <Image
              src="/image-politicas/cambios.svg"
              alt="card-image"
              width={200}
              height={200}
              className="justify-center p-2 filter saturate-150"
              />
          </div>
          <div className="text-center p-10">
            <Typography>
              En caso de que realicemos modificaciones en la forma en que manejamos tus datos, te informaremos a través de los canales habituales, como el correo electrónico o mensajes en nuestras aplicaciones. Si requerimos tu consentimiento, te notificaremos por estos mismos medios para que puedas decidir si estás de acuerdo.
            </Typography>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PolitySection3