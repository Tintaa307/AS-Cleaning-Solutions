import { z } from "zod"

export const ContactSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Escribe un nombre mas largo" })
    .max(20, { message: "Escribe un nombre mas corto" }),
  email: z.string().email(),
  phone: z.string().refine((value) => value.length === 10, {
    message: "EL numero de telefono debe tener 10 digitos",
  }),
  enterprise: z
    .string()
    .min(1, { message: "Escribe un nombre de empresa mas largo" })
    .max(40, { message: "Escribe un nombre de empresa mas corto" }),
  message: z
    .string()
    .min(0, { message: "Escribe un mensaje" })
    .max(200, { message: "El mensaje debe ser mas corto" }),
  service: z.enum(["limpieza", "fumigacion"], {
    message: "Selecciona un servicio",
  }),
})
