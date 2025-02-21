import React from "react"
import { Button } from "../ui/button"
import { IconBrandWhatsapp } from "@tabler/icons-react"
import Link from "next/link"

const HeroSection = () => {
  return (
    <main id="Hero" className="relative h-screen bg-[url('/hero-image.png')]">
      <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-30" />
      <article className="absolute bottom-0 w-full h-[40vh] flex items-center justify-center">
        <div className="w-[82%] space-y-8 flex items-start flex-col custom:items-center custom:justify-center services_sm:px-4 hero_lg:w-full hero_lg:px-8">
          <h1 className="text-white text-6xl font-bold leading-snug custom:text-center hero:text-5xl hero:leading-[1.4] mds:hero:text-4xl services_sm:text-3xl xs:text-[26px]">
            Soluciones integrales para <br />
            ambientes profesionales
          </h1>
          <Link href={"/contact"}>
            <Button className="text-lg h-14 px-5 mds:h-12 mt-4">
              Contáctate con nosotros
            </Button>
          </Link>
        </div>
        <div className="fixed flex items-end justify-end px-12 right-12 z-40 mds:right-0 mds:px-4">
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
