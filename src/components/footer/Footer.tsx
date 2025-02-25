import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { IconMail, IconBrandInstagram } from "@tabler/icons-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8 custom:max-w-full">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-as-2.png"
                alt="A&S Cleaning Solutions"
                width={200}
                height={60}
                className="custom:w-[150px]"
              />
            </Link>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Índice</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#Hero"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#About"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Conocenos
                </Link>
              </li>
              <li>
                <Link
                  href="#Services"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#Contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Trabaja con nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Contáctanos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/as.cleaningsolutions.com"
                  className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                  <IconBrandInstagram size={23} className="mr-2" />
                  @as.cleaningsolutions
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="mailto:contacto@cleaningas.com?subject=Consulta&body=Hola,%20quisiera%20más%20información."
                  className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                  <IconMail size={22} className="mr-2" />
                  contacto@cleaningas.com
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="tel:+56912345678"
                  className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                  <Phone size={22} className="mr-2" />
                  (+54) 9 11 7065 9637
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="font-bold text-lg mb-4">Ubicación</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.123587416194!2d-58.627941387776474!3d-34.65158165991618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc75e89c1cdb5%3A0xb63496a1730fc95a!2sNtra%20Sra%20del%20Buen%20Viaje%201201%2C%20B1708ECW%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1729522329616!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="A&S Cleaning Solutions Location"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
