'use client'
import { Button } from "@material-tailwind/react";

function Section6About() {

    const handleShopClick = () => {
        window.location.href = `/shop`;
    };

    return (
        <div className="bg-white text-black bg-gradient-to-r from-white via-gray-100 to-gray-300 p-6">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-4xl font-bold tracking-tight mt-6 text-center text-gray-900 mb-6 sm:text-4xl">Sigue Descubriendo Más Productos en la Web</h1>
                <p className="text-center mt-6" style={{ maxWidth: "30rem" }}>
                    Descubre nuevos productos en nuestro ecommerce en el cual podrás encontrar todo lo que estás buscando. Desde productos tecnológicos hasta productos universitarios, tenemos una amplia selección de impresionantes productos. Haz clic en el botón de abajo para contactarnos.
                </p>
                <Button className="mt-10 mb-10 transition duration-500 ease-in-out bg-black hover:bg-[#135dd0] transform hover:-translate-y-1 hover:scale-110" onClick={handleShopClick}>Comprar</Button>
            </div>
        </div>
    );
}

export default Section6About;