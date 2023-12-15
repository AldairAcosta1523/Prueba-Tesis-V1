'use client'
import Image from "next/image"

function Section5About() {
    return (
        <div className="grid grid-cols-1 bg-white text-black border-t bg-gradient-to-r from-white via-gray-100 to-gray-300 lg:grid-cols-2 md:grid-cols-2">
            <div className="ml-5 mt-3 mr-2 mb-6 text-center p-7">
            <h1 className="text-4xl font-bold tracking-tight mt-6 text-center text-gray-900 mb-6 sm:text-4xl">Diferenciación</h1>
                <p className="text-center mt-6 " style={{maxWidth:"40rem"}}>
                Lo que nos distingue de la competencia es nuestra capacidad para ofrecer características únicas y enfoques innovadores en nuestros productos y servicios. Nos esforzamos por marcar la diferencia en el mercado y proporcionar soluciones que se destaquen.                </p>
                <p className="text-center mt-6" style={{maxWidth:"40rem"}}>
                Creemos que la diferenciación es fundamental para destacar en el mercado competitivo actual. Nos esforzamos por ser únicos y ofrecer algo que nuestros competidores no puedan replicar fácilmente. Nuestra pasión por la innovación y la búsqueda continua de formas de mejorar nos impulsa a mantenernos a la vanguardia y a brindar soluciones excepcionales a nuestros clientes.                </p>
            </div>
            <div>
                <div className="">
                <Image src="/image-about/diferencia.svg" width={500} height={500} alt="Calidad" className="object-cover justify-center w-[50rem] h-[30rem] saturate-150" />
                </div>
            </div>
        </div>
    )
}

export default Section5About
