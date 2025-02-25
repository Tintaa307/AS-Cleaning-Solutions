import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Toaster } from "sonner"
import { TagManagerProvider } from "@/context/TagManagerContext"

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "A&S Cleaning Solutions",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <TagManagerProvider>
          <Toaster position="top-center" duration={3000} richColors />
          {children}
        </TagManagerProvider>
      </body>
    </html>
  )
}
