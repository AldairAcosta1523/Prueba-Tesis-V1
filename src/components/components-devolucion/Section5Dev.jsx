'use client'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Image from "next/image";

function Section5Dev() {
    const handleWhatsAppClick = () => {
        window.open("https://wa.me/937116621", "_blank");
    };

    const handleGmailClick = () => {
        window.open("mailto:bill.saravia@tecsup.edu.pe", "_blank");
    };

    return (
        <div className="relative grid grid-cols-1 justify-center justify-items-center bg-white bg-gradient-to-r from-white via-gray-100 to-gray-300 flex-shrink-0 lg:grid-cols-2 md:grid-cols-2">
            <div className="w-full p-6 sm:w-96 mt-10 mb-16 lg:p-0 md:p-0">
                <Card>
                    <CardBody>
                        <Image
                            src="/image-dev/telefono.svg"
                            height={500}
                            width={500}
                            alt="Telefono"
                            className="mb-4 h-12 w-12 saturate-150"
                        />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Llámanos Ahora            </Typography>
                        <Typography>
                            Estamos disponibles en línea de 9:00 a. m. a 5:00 p. m. (GMT95:45) Hable con nosotros ahora            </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block" onClick={handleWhatsAppClick}>
                            <Button size="sm" variant="text" className="flex items-center gap-2 transition duration-500 ease-in-out bg-black text-white  hover:bg-[#135dd0] transform hover:-translate-y-1 hover:scale-110">
                                Hablanos
                                <Image
                                    src="/image-dev/flecha_derecha.svg"
                                    height={500}
                                    width={500}
                                    alt="Flecha"
                                    className="h-4 w-4 saturate-150"
                                />
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>

            <div className="w-full p-6 sm:w-96 mt-10 mb-10 lg:p-0 md:p-0">
                <Card>
                    <CardBody>
                        <Image
                            src="/image-dev/mensaje.svg"
                            height={500}
                            width={500}
                            alt="Mensaje"
                            className="mb-4 h-12 w-12 saturate-150"
                        />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Habla con Nosotros
                        </Typography>
                        <Typography>
                            Estamos disponibles en línea de 9:00 a. m. a 5:00 p. m. (GMT95:45) Hable con nosotros ahora
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block" onClick={handleGmailClick}>
                            <Button size="sm" variant="text" className="flex items-center gap-2 transition duration-500 ease-in-out bg-black text-white  hover:bg-[#135dd0] transform hover:-translate-y-1 hover:scale-110">
                                Contactanos
                                <Image
                                    src="/image-dev/flecha_derecha.svg"
                                    height={500}
                                    width={500}
                                    alt="Flecha"
                                    className="h-4 w-4"
                                />
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Section5Dev;