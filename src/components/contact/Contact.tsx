"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { useState } from "react"
import { SelectValue } from "@radix-ui/react-select"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src="/contact-image.png"
          alt="Cleaning professionals in a living room"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.4]"
        />
      </div>
      <div className="relative container mx-auto px-4 py-16 flex flex-col md:flex-row items-start custom:flex-col custom:items-center custom:justify-center custom:gap-6 custom:max-w-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-white mb-4 custom:text-center">
            Contactate con nosotros
          </h2>
        </div>
        <div className="md:w-1/2 mds:w-5/6">
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Pongámonos en contacto.
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre Completo
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: Juan Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ej: nombre@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Número Telefónico
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ej: +56 9 1234 5678"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tipo de Servicio
                </label>
                <Select
                  name="service"
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, service: value }))
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tipo de servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="limpieza">Limpieza</SelectItem>
                    <SelectItem value="fumigacion">Fumigación</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  rows={4}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-6">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
