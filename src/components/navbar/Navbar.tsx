"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    {
      title: "Inicio",
      href: "#Hero",
    },
    {
      title: "Conocenos",
      href: "#About",
    },
    {
      title: "Servicios",
      href: "#Services",
    },
    {
      title: "Trabaja con Nosotros",
      href: "#Contact",
    },
  ]

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
    <>
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
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-white font-semibold hover:underline hover:underline-offset-4 decoration-primary decoration-2 transition-all duration-150",
                  {
                    "text-black transition-colors duration-150": isScrolled,
                  }
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <Link href={"/contact"}>
            <Button className="hidden lg:flex items-center space-x-2">
              <span>Contactate</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button
            onClick={() => setIsMenuOpen(true)}
            variant="ghost"
            size="icon"
            className="lg:hidden"
          >
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

      <aside
        className={cn(
          "fixed top-0 left-0 w-full h-screen bg-white z-50 -translate-x-full transition-all duration-150",
          {
            "translate-x-0 transition-all duration-150": isMenuOpen,
          }
        )}
      >
        <Button
          onClick={() => setIsMenuOpen(false)}
          variant={"ghost"}
          size={"icon"}
          className="absolute top-9 right-5"
        >
          <X size={30} />
        </Button>
        <div className="flex-1 py-16">
          <ul className="flex items-center justify-center text-center flex-col gap-8">
            {navItems.map((item, index) => (
              <li key={index} className="">
                <Link
                  href={item.href}
                  className="text-black text-xl font-semibold hover:underline hover:underline-offset-4 decoration-primary decoration-2 transition-all duration-150"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex-1 flex items-center justify-center">
            <Button className="w-1/2 mt-8">Contactate</Button>
          </div>
        </div>
      </aside>
    </>
  )
}
