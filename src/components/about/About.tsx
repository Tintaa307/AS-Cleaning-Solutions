import Image from "next/image"
import { Button } from "@/components/ui/button"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"

const clientLogos = [
  { name: "Logo 1", src: "/trusted-by/alliance-1.png?height=100&width=100" },
  {
    name: "Vida Verde",
    src: "/trusted-by/alliance-2.png?height=100&width=100",
  },
  { name: "Sapiens", src: "/trusted-by/alliance-3.png?height=100&width=100" },
  { name: "Logo 4", src: "/trusted-by/alliance-4.png?height=100&width=100" },
  { name: "MMOR", src: "/trusted-by/alliance-5.png?height=100&width=100" },
  { name: "REM", src: "/trusted-by/alliance-6.png?height=100&width=100" },
]

const qualities = [
  {
    number: 1,
    title: "Calidad",
    description:
      "Otorgamos soluciones de alto estándar de calidad, su satisfacción y un entorno de trabajo seguro y saludable.",
  },
  {
    number: 2,
    title: "Confianza",
    description:
      "Fomentamos relaciones duraderas mediante un servicio confiable, transparente y personalizado, adaptándonos a sus necesidades específicas.",
  },
  {
    number: 3,
    title: "Versatilidad",
    description:
      "Ofrecemos una capacidad de respuesta rápida ante solicitudes urgentes o situaciones imprevistas.",
  },
  {
    number: 4,
    title: "Supervisión",
    description:
      "Poseemos un equipo encargado de realizar controles que permitan superar sus expectativas.",
  },
]

export default function AboutSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 custom:max-w-full">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Ya confiaron en nosotros:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
          <InfiniteMovingCards speed="normal" items={clientLogos} />
        </div>

        <div className="flex custom:flex-col md:flex-row gap-8 custom:items-center custom:justify-center">
          <div className="md:w-1/2">
            <Image
              src="/about-image.jpg?height=600&width=400"
              alt="Cleaning equipment"
              width={650}
              height={600}
              className="rounded-lg shadow-lg brightness-[0.7]"
            />
          </div>

          <div className="md:w-1/2 custom:w-2/3 mds:w-[90%]">
            <h2 className="text-3xl font-bold mb-6 custom:text-center">
              Conocenos: Compromiso y Calidad en Cada Detalle
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mds:w-full">
              {qualities.map((quality) => (
                <div key={quality.number} className="p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-300 text-white rounded-full w-16 h-16 flex items-center justify-center mr-3">
                      <span className="text-xl text-blue-600 font-bold">
                        {quality.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{quality.title}</h3>
                  </div>
                  <p className="text-gray-600 font-medium">
                    {quality.description}
                  </p>
                </div>
              ))}
            </div>

            <Button size="lg" className="mt-8 text-md">
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
