import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/components-footer-navbar/Footer'
import Navbar  from '@/components/components-footer-navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tecshop',
  description: 'Eccomerce de Tecsup',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <div className='relative'>
          <Footer></Footer>
        </div>
        </body>
    </html>
    
    
  )
}

