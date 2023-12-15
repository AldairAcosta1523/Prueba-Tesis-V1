'use client'
import Image from "next/image"

function Section4About() {
    return (
        <div className="grid grid-cols-1 bg-white text-black border-t bg-gradient-to-r from-white via-gray-100 to-gray-300 lg:grid-cols-2 md:grid-cols-2">
            <div>
                <Image src="/image-about/calidad.svg" width={500} height={500} alt="Calidad" className="object-cover justify-center w-[50rem] h-[30rem] saturate-150" />
            </div>
            <div>
                <div className="ml-5 mt-3 text-center p-7">
                <h1 className="text-4xl font-bold tracking-tight mt-6 text-center text-gray-900 mb-6 sm:text-4xl">Compromiso Con La Calidad</h1>
                <p className="text-center mt-6 " style={{maxWidth:"40rem"}}>
                    En nuestra empresa, la calidad es un pilar fundamental en todo lo que hacemos. Nos esforzamos constantemente por ofrecer productos y servicios de alta calidad que superen las expectativas de nuestros clientes. Para lograrlo, seguimos rigurosos estándares de calidad en todas nuestras operaciones.
                </p>
                <p className="text-center mt-6 mb-6" style={{maxWidth:"40rem"}}>
                    Implementamos estrictos controles de calidad en cada etapa de nuestro proceso, desde la selección de materias primas hasta la entrega final del producto o servicio. Nuestro equipo de control de calidad realiza inspecciones exhaustivas para garantizar que cada producto cumpla con nuestros estándares de calidad establecidos.
                </p>
                </div>
            </div>
            
        </div>
    )
}

export default Section4About
