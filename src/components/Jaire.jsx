import Image from "next/image"
import Link from "next/link"

const Jaire = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div className="flex items-center justify-center w-full">
                        <Image
                            src="https://res.cloudinary.com/dvh8hozns/image/upload/v1690737624/descarga-removebg-preview_3_1_haajts.png"
                            alt="Logo"
                            height={371}
                            width={371}
                            className="w-40 h-40 mb-4 duration-300 hover:scale-150"
                        />
                        </div>
                    <p class="mb-8 leading-relaxed">
                        Nuestra misión es la promoción humana y social de niñ@s, adolescentes y jóvenes. "Jaire" significa "Alégrate". Frente a la realidad de vulnerabilidad social
                        del sector, Jaire intenta ser un espacio de encuentro y alegría desde la educación, cultura, recreación y deporte. Talleres gratuitos semanales
                    </p>
                    <div class="flex justify-between md:w-full">
                        <Link target="_blank" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" href="https://wa.link/63apvp" >Voluntarios</Link>
                        <Link className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" href="https://wa.link/1veeyn">Donar</Link>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image className="object-cover object-center rounded-lg" alt="Jaire" src="https://res.cloudinary.com/dvh8hozns/image/upload/v1690313939/WhatsApp_Image_2023-07-25_at_16.31.57_pnalox.jpg"
                    width={600}
                    height={720}/>
                </div>
            </div>
        </section>
    )
}

export default Jaire