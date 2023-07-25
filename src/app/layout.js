import Navbar from "../components/Navbar";
import "../../globals.css";
import { MyGlobalContext } from './contexts/context';


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
        </body>
      </MyGlobalContext>
    </html>
  )
}
