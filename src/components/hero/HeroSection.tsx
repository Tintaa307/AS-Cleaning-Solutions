import React from "react"
import { Button } from "../ui/button"
import { IconBrandWhatsapp } from "@tabler/icons-react"
import Link from "next/link"

const HeroSection = () => {
  return (
    <main id="Hero" className="relative h-screen bg-[url('/hero-image.png')]">
      <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-30" />
      <article className="absolute bottom-0 w-full h-[40vh] flex items-center justify-between">
        <div className="flex-1 px-12 space-y-8 custom:flex custom:flex-col custom:items-center custom:justify-center services_sm:px-4">
          <h1 className="text-white text-6xl font-bold leading-snug custom:text-center hero:text-5xl hero:leading-[1.4] mds:hero:text-4xl services_sm:text-xl">
            Soluciones integrales para <br />
            ambientes profesionales
          </h1>
          <Link href={"#Contact"}>
            <Button className="text-lg h-14 px-5 mds:h-12">
              Contáctate con nosotros
            </Button>
          </Link>
        </div>
        <div className="fixed flex items-end justify-end px-12 right-12 z-40 mds:right-0">
          <Link href={"https://wa.me/+5491170659637"}>
            <Button
              size="icon"
              className="bg-white h-14 w-14 rounded-full hover:bg-white hover:bg-opacity-80 shadow-2xl border border-border services_sm:h-12 services_sm:w-12 services_sm:text-sm"
            >
              <IconBrandWhatsapp size={40} className="text-primary" />
            </Button>
          </Link>
        </div>
      </article>
    </main>
  )
}

export default HeroSection
