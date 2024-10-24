import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    title: "Limpieza",
    description:
      "Ofrecemos un servicio de limpieza empresarial eficiente, adaptado a sus necesidades específicas, garantizando un ambiente limpio y saludable.",
    imageUrl: "/services/service-2.jpg",
  },
  {
    title: "Fumigación",
    description:
      "Proveemos servicios especializados de fumigación y control de plagas para proteger su espacio y garantizar un ambiente saludable utilizando las técnicas más seguras y efectivas.",
    imageUrl: "/services/service-1.png",
  },
]

export default function ServicesSection() {
  return (
    <section id="Services" className="py-16 bg-white">
      <div className="container mx-auto px-4 custom:max-w-full">
        <h2 className="text-4xl font-bold mb-12 text-center services_sm:text-3xl">
          Servicios de Limpieza a tu Medida
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={400}
                height={400}
                className="w-full h-full object-cover brightness-[0.7] mds:h-[500px]"
              />

              <div className="absolute w-1/2 min-h-[200px] flex items-center flex-col justify-center bg-white/10 backdrop-blur-lg rounded-md border-white/40 border text-center bottom-10 left-0 right-0 mx-auto px-6 md:w-3/4 services_sm:w-4/5 services_sm:bottom-5 services_sm:min-h-[180px]">
                <h3 className="text-3xl text-white mb-4 services_sm:text-2xl">
                  {service.title}
                </h3>
                <p className="text-white text-sm services_sm:text-xs">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href={"#Contact"}>
            <Button size="lg" className="text-md">
              Quiero saber más
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
