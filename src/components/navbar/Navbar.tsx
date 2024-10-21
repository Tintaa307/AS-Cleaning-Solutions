"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-150",
        {
          "bg-white shadow-lg transition-all duration-150": isScrolled,
          "bg-transparent transition-all duration-150": !isScrolled,
        }
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center custom:max-w-full">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={"/Logo-AS-1.svg"} alt="logo" width={160} height={110} />
        </Link>
        <div className="hidden lg:flex items-center space-x-10">
          <Link
            href="#"
            className={cn(
              "text-white font-semibold hover:underline hover:underline-offset-2 transition-colors",
              {
                "text-black transition-colors duration-150": isScrolled,
              }
            )}
          >
            Inicio
          </Link>
          <Link
            href="#"
            className={cn(
              "text-white font-semibold hover:underline hover:underline-offset-2 transition-colors",
              {
                "text-black transition-colors duration-150": isScrolled,
              }
            )}
          >
            Conocenos
          </Link>
          <Link
            href="#"
            className={cn(
              "text-white font-semibold hover:underline hover:underline-offset-2 transition-colors",
              {
                "text-black transition-colors duration-150": isScrolled,
              }
            )}
          >
            Servicios
          </Link>
          <Link
            href="#"
            className={cn(
              "text-white font-semibold hover:underline hover:underline-offset-2 transition-colors",
              {
                "text-black transition-colors duration-150": isScrolled,
              }
            )}
          >
            Trabaja con Nosotros
          </Link>
        </div>

        <Link href={"/contact"}>
          <Button className="hidden lg:flex items-center space-x-2">
            <span>Contactate</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>

        <Button variant="ghost" size="icon" className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={cn("w-8 h-8 text-white", {
              "text-black": isScrolled,
            })}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="sr-only">Open menu</span>
        </Button>
      </div>
    </nav>
  )
}
