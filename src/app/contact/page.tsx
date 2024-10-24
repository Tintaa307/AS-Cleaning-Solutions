"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import { handleSubmit } from "@/actions/contact-action"
import { toast } from "sonner"

export default function ContactForm() {
  const FormAction = async (formData: any) => {
    const res = await handleSubmit(formData)
    switch (res.status) {
      case 200:
        toast.success(res.message)
        break
      case 500:
        res.message.map((msg: string) => toast.error(msg)) as string[]
        break
      default:
        toast.info("Error al enviar el mensaje")
        break
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center mb-12">
        <Link
          href="/"
          className="flex items-center text-blue-600 hover:text-blue-800 mb-4 md:mb-0"
        >
          <ArrowLeft className="mr-2" size={25} />
        </Link>
        <h2 className="text-3xl font-bold mds:text-2xl">
          Contactate con nosotros
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-6 mds:text-lg">
            Pongámonos en contacto.
          </h2>
          <form action={FormAction} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre Completo
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Ingrese su nombre completo"
                required
              />
            </div>
            <div>
              <label
                htmlFor="enterprise"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Empresa
              </label>
              <Input
                type="text"
                id="enterprise"
                name="enterprise"
                placeholder="Ingrese la empresa"
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
                placeholder="Ej: ejemplo@a&s.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Teléfono
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ej: 11 1234 5678"
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
              <Select name="service" required>
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
                Mensajes
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="¿Pregunta 1? ¿Pregunta 2? ¿Pregunta 3?"
                rows={12}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </div>

        <div className="w-full flex items-center justify-center md:w-1/2 custom:hidden">
          <Image
            src="/contact-image-2.png"
            alt="Cleaning professional mopping a floor"
            width={550}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  )
}
