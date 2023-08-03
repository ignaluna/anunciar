"use client"
import Navbar from "../components/Navbar";
import "../../globals.css";
import { MyGlobalContext } from './contexts/context';
import Footer from "@/components/Footer";


export const metadata = {
  title: 'Anunciar',
  description: 'Asociación Civil Anunciar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MyGlobalContext>
        <body className="w-screen overflow-x-hidden bg-gradient-to-t from-[#F1F1F1] to-[#F0991C]">
          <Navbar />
          {children}
          <Footer />
        </body>
      </MyGlobalContext>
    </html>
  )
}
