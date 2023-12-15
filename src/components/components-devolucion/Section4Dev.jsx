'use client'
import { Button } from "@material-tailwind/react";

function Section4Dev() {

    const handleShopClick = () => {
        window.location.href = `/contactanos`;
    };

    return (
        <div className="bg-white text-black bg-gradient-to-r from-white via-gray-100 to-gray-300 p-6 border-t">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-4xl font-bold tracking-tight mt-6 text-center text-gray-900 mb-6 sm:text-4xl">¿Tienes alguna duda o consulta sobre tu pedido? ¡Háznoslo saber!</h1>
                <p className="text-center mt-6" style={{ maxWidth: "30rem" }}>
                    Explora nuestra amplia selección de productos en nuestro ecommerce. Desde tecnología hasta artículos universitarios, tenemos todo lo que estás buscando. Si tienes alguna pregunta sobre devoluciones, estaremos encantados de ayudarte. Haz clic en el botón de abajo para contactarnos.
                </p>
                <Button className="mt-10 mb-10 transition duration-500 ease-in-out bg-black hover:bg-[#135dd0] transform hover:-translate-y-1 hover:scale-110" onClick={handleShopClick}>Contactarnos</Button>
            </div>
        </div>
    );
}

export default Section4Dev;