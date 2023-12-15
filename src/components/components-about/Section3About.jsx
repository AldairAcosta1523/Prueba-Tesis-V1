import Image from "next/image";

function Section3About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 bg-gradient-to-r from-white via-gray-100 to-gray-300 p-10 text-black ">
      <div className="flex flex-col items-center mt-5 mb-5">
        <Image
          src="/image-about/mision.svg"
          width={100}
          height={100}
          alt="Misión"
          className="saturate-150"
        />
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center mt-6 sm:text-2xl">Misión</h1>
        <p className="text-center mt-3" style={{ maxWidth: "20rem" }}>
          Ofrecer productos tecnológicos de calidad para apoyar la educación e investigación en nuestra universidad, brindando un servicio rápido, seguro y confiable.
        </p>
      </div>

      <div className="flex flex-col items-center mt-5 mb-5">
        <Image
          src="/image-about/vision.svg"
          width={100}
          height={100}
          alt="Visión"
          className="saturate-150"
        />
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center mt-6 sm:text-2xl">
          Vision
        </h1>        
        <p className="text-center mt-3" style={{ maxWidth: "20rem" }}>
          Ser el socio tecnológico preferido de nuestra comunidad universitaria, reconocidos por nuestro servicio diferenciado y por promover la innovación y el aprendizaje.
        </p>
      </div>

      <div className="flex flex-col items-center mt-5 mb-5">
        <Image
          src="/image-about/valores.svg"
          width={100}
          height={100}
          alt="Valores"
          className="saturate-150"
        />
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center mt-6 sm:text-2xl">Valores</h1>
        <p className="text-center mt-3" style={{ maxWidth: "20rem" }}>
          Trabajo en equipo, vocación de servicio, mejora continua, compromiso con la calidad y la puntualidad.
        </p>
      </div>
    </div>
  );
}

export default Section3About;