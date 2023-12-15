'use client'
import { Typography } from "@material-tailwind/react"
import Image from 'next/image'

function SectionPolity(){
    return(
        <div className="bg-gradient-to-r from-white via-gray-100 to-gray-300 text-black p-10">
        <div>
            <Typography variant='h1' className='text-3xl text-center mt-5 mb-8'>
                   Conoce mas acerca de nuestra Politicas de Privacidad
            </Typography>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 flex-col">
        <div className="flex flex-row items-center">
        <Image src="/image-politicas/transparencia.svg" alt="SVG" width={64} height={64} className="text-yellow-500 mr-5 filter saturate-150" />
        <div className="flex flex-col ml-5" style={{maxWidth: '20rem'}}>
        <Typography variant='h1' className='text-xl font-bold mt-5'>
        Transparencia
        </Typography>
        <Typography variant='lead' className='text-sm text-justify mt-3'>
        Somos transparentes en cuanto al uso que hacemos de tu información. Te explicamos de manera simple y clara cómo y por qué procesamos tus datos, así como con quién los podemos compartir en determinadas circunstancias.
        </Typography>
        </div>
        </div>

        <div className="flex flex-row items-center">
        <Image src="/image-politicas/proceso.svg" alt="SVG" width={64} height={64} className="text-yellow-500 mr-5 filter saturate-150" />
        <div className="flex flex-col ml-5" style={{maxWidth: '20rem'}}>
        <Typography variant='h1' className='text-xl font-bold mt-5'>
        Generación de Valor
        </Typography>
        <Typography variant='lead' className='text-sm text-justify mt-3'>
        Procesamos tus datos de manera responsable y ética para brindarte servicios personalizados y de calidad. Por ejemplo, utilizamos tu geolocalización para ofrecerte servicios y productos cercanos a tu ubicación, mejorando así tu experiencia de compra.        
        </Typography>
        </div>
        </div>

        <div className="flex flex-row items-center">
        <Image src="/image-politicas/envio.svg" alt="SVG" width={64} height={64} className="text-yellow-500 mr-5 filter saturate-150" />
        <div className="flex flex-col ml-5" style={{maxWidth: '20rem'}}>
        <Typography variant='h1' className='text-xl font-bold mt-5'>
        Calidad del Procesamiento
        </Typography>
        <Typography variant='lead' className='text-sm text-justify mt-3'>
        Nos esforzamos por procesar la información de manera precisa, actualizada y confiable. Mantenemos tus datos guardados y actualizados en todas nuestras plataformas, lo que nos permite entregarte tus compras de forma correcta y ahorrarte el tiempo de completar formularios repetitivos.        
        </Typography>
        </div>
        </div>

        <div className="flex flex-row items-center">
        <Image src="/image-politicas/datos.svg" alt="SVG" width={64} height={64} className="text-yellow-500 mr-5 filter saturate-150" />
        <div className="flex flex-col ml-5" style={{maxWidth: '20rem'}}>
        <Typography variant='h1' className='text-xl font-bold mt-5'>
        Protección de Datos
        </Typography>
        <Typography variant='lead' className='text-sm text-justify mt-3'>
        Protegemos tu información personal con los más altos estándares de seguridad. Implementamos medidas técnicas y organizativas para garantizar la confidencialidad, integridad y disponibilidad de tus datos. No compartimos ni comercializamos tu información con terceros sin tu consentimiento expreso.        
        </Typography>
        </div>
        </div>

        <div className="flex flex-row items-center">
        <Image src="/image-politicas/tiempo.svg" alt="SVG" width={64} height={64} className="text-yellow-500 mr-5 filter saturate-150" />
        <div className="flex flex-col ml-5" style={{maxWidth: '20rem'}}>
        <Typography variant='h1' className='text-xl font-bold mt-5'>
        Tiempo Limitado de Procesamiento
        </Typography>
        <Typography variant='lead' className='text-sm text-justify mt-3 mb-7'>
        Mantenemos tus datos personales solo durante el tiempo necesario para cumplir con los fines para los que fueron recopilados y para facilitarte el uso de nuestros productos y servicios. Una vez cumplido este plazo, tus datos son borrados de forma segura o transformados en datos anónimos para proteger tu privacidad.
        </Typography>
        </div>
        </div>

        </div>        
        </div>

    )
}
export default SectionPolity
