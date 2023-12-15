'use client'
import Image from "next/image"
function Section2About() {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 border-t bg-gradient-to-r from-white via-gray-100 to-gray-300 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-6 sm:text-4xl">
                    Nuestra Historia                
                </h1>
                <figure className="mt-10">
                    <blockquote className="text-center text-lg font-normal leading-8 text-gray-900 sm:text-lg sm:leading-9">
                        <p>
                            En 2023, un grupo de apasionados de la tecnología se unió con un objetivo común: crear una experiencia de compra excepcional para los amantes de la tecnología en Tecsup. Con su pasión compartida por la innovación y el deseo de ofrecer productos de calidad, fundaron Tecshop.
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                    <Image className="mx-auto h-12 filter saturate-150" src="/logo_splash1.svg" height={500} width={500} alt=""/>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
export default Section2About