"use server"

import {
  ContactSchema,
  ContactSchemaWithoutService,
} from "@/lib/validators/ContactSchema"
import axios from "axios"
import { z } from "zod"

export const handleSubmit = async (formData: FormData) => {
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")

  const values = {
    name: name as string,
    email: email as string,
    phone: phone as string,
    message: message as string,
  }

  if (Object.values(values).some((value) => value === "")) {
    return { status: 500, message: "Por favor, complete todos los campos" }
  }

  try {
    const result = ContactSchemaWithoutService.parse(values)
    const res = await axios.post(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/emails"
        : "https://solutionsas.com.ar.com/api/emails",
      result
    )

    return res.data
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map((err) => err.message)
      return { status: 500, message: errors }
    } else {
      console.log(error)
      return error
    }
  }
}

export const handleSubmitService = async (formData: FormData) => {
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")
  const enterprise = formData.get("enterprise")
  const service = formData.get("service")

  const values = {
    name: name as string,
    email: email as string,
    enterprise: enterprise as string,
    phone: phone as string,
    message: message as string,
    service: service as string,
  }

  if (Object.values(values).some((value) => value === "")) {
    return { status: 500, message: "Por favor, complete todos los campos" }
  }

  try {
    const result = ContactSchema.parse(values)
    const res = await axios.post(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/emails"
        : "https://solutionsas.com.ar.com/api/emails",
      result
    )

    return res.data
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map((err) => err.message)
      return { status: 500, message: errors }
    } else {
      console.log(error)
      return error
    }
  }
}
